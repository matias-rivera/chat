const {User} = require('../models') 
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/app')

exports.login = async (req, res) => {
    const {email, password} = req.body

    try {


        //find a user
        const user = await User.findOne({
            where: {email}
        })

        //check if user was found
        if(!user) return res.status(404).json({message: 'User not found'});
        //check if password match
        if(!bcrypt.compareSync(password, user.password)) return res.status(404).json({message: 'Password or User dont match'});
        //generate token
        const userWithToken = generateToken(user.get({raw: true}))
        return res.send(userWithToken)
        
    } catch(e) {
        return res.status(500).json({message: e.message})
    }



}

exports.register = async (req, res) => {

    try{
       

        const user = await User.create(req.body)

        const userWithToken = generateToken(user.get({raw: true}))
        return res.send(userWithToken)
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

const generateToken = (user) => {
    delete user.password

    const token = jwt.sign(user, config.appKey,{expiresIn: 86400})

    return {...user, ...{token}}
}
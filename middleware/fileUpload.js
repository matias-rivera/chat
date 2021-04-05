const multer = require('multer')
const fs = require('fs')
const path = require('path')

exports.userFile = ((req,res,next) => {

    const getFileType = (file) =>  {
        const mimeType = file.mimetype.split('/')
        return mimeType[mimeType.length - 1]
    }

    const generateFileName = (req, file, cb) => {
        const extension = getFileType(file)
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + extension

        cb(null, file.fieldname + '-' + filename)
    }

    const fileFilter = (req, file, cb) => {
        const extension = getFileType(file)
        const allowTypes = /jpeg|jpg|png/

        const passed = allowTypes.test(extension)

        if(passed) {
            return cb(null, true)
        }

        return cb(null, false)
    }

    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            const {id} = req.user
            const destination = `uploads/user/${id}`

            fs.access(destination, (error) => {
                if(error) {
                    return fs.mkdir(destination, (error) => {
                        cb(error, destination)
                    })
                } else {
                    fs.readdir(destination, (error, files) => {
                        if(error) throw error

                        for (const file of files) {
                            fs.unlink(path.join(destination, file), error => {
                                if(error) throw error
                            })
                        }
                    })
                    return cb(null, destination)
                }
            })
        },
        filename: generateFileName
    })
    return multer({storage, fileFilter}).single('avatar')
})()
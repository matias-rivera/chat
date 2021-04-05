import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout, updateProfile } from '../../../../store/actions/auth'
import Modal from '../../../Modal/Modal';
import {Link} from 'react-router-dom'


const Navbar = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.authReducer.user)

    const [showProfileOptions, setShowProfileOptions] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false)

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [gender, setGender] = useState(user.gender)
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const form = {firstName, lastName, email, gender, avatar}
        if(password.length > 0) form.password = password

        const formData = new FormData()

        for(const key in form) {
            formData.append(key, form[key])
        }

        dispatch(updateProfile(formData)).then(() => setShowProfileModal(false))


    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return ( 
            <div className='navbar card-shadow'>
                <h2 className='navbar__title'>Chat.io</h2>
                <div className='profile-menu' onClick={() => setShowProfileOptions(!showProfileOptions)} >
                    <img className='profile-menu__image' src={user.avatar} alt='avatar'/>
                    <p className='profile-menu__text'>{user.firstName} {user.lastName}</p>
                    <FontAwesomeIcon icon='caret-down' className='profile-menu__icon' />
                
                    { showProfileOptions && 
                    <div className='profile-menu__options'>
                        <p onClick={()=> setShowProfileModal(true)}>Update Profile</p>
                        <p onClick={() => handleLogout()}>Logout</p>
                    </div>

                    }
                    {
                        showProfileModal &&
                        <Modal handleClose={()=> setShowProfileModal(false)}>
                            <Fragment key='header'>
                                <h3 className='m-0'>Update Profile</h3>
                            </Fragment>
                            <Fragment key='body'>
                            <form onSubmit={submitForm}>
                                <div className='input-field mb-1'>
                                    <input placeholder='Firstname' 
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        required='required'
                                        type='text'
                                        placeholder='Firstname'
                                    />
                                </div>

                                <div className='input-field mb-1'>
                                    <input placeholder='Lastname' 
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        required='required'
                                        type='text'
                                        placeholder='Lastname'
                                    />
                                </div>

                                <div className='input-field mb-1'>
                                    <input placeholder='Email' 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required='required'
                                        type='text'
                                        placeholder='Email'
                                    />
                                </div>

                                <div className='input-field mb-1'>
                                    <select
                                        value={gender}
                                        onChange={e => setGender(e.target.value)}
                                        required='required'    
                                    >
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </div>

                                <div className='input-field mb-2'>
                                    <input placeholder='Password' 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required='required'
                                        type='password' 
                                        placeholder='Password'
                                    />
                                </div>

                                <div className='input-field mb-2'>
                                    <input 
                                        onChange={e => setAvatar(e.target.files[0])}
                                        type='file'
                                    />
                                </div>

                                
                            </form>

                            </Fragment>
                            <Fragment key='footer'>
                                <button 
                                    className='btn-success'
                                    onClick={submitForm}
                                >
                                    UPDATE
                                </button>
                            </Fragment>
                        </Modal>
                    }
                </div>
            </div>

     );
}
 
export default Navbar;
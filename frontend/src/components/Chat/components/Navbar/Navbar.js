import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../../../store/actions/auth'


const Navbar = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.authReducer.user)

    const [showProfileOptions, setShowProfileOptions] = useState(false);
 
    const handleLogout = () => {
        dispatch
        (logout())
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
                        <p>Update Profile</p>
                        <p onClick={() => handleLogout()}>Logout</p>
                    </div>

                    }
                </div>
            </div>

     );
}
 
export default Navbar;
import React, {useState} from 'react';
import loginImage from '../../assets/images/login.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import AuthServices from '../..//services/authServices'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/auth';


import './Auth.scss'

const Login = ({history}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(login({email, password},history))
        //AuthServices.login({email, password}).then(res => console.log(res))
    }

    return ( 
        <div className='auth-background'>
            <div className='auth-container'>
                <div className='auth-card card-shadow'>
                    <div className='auth-card__image'>
                        <img src={loginImage} alt='Login'/>
                    </div>

                    <div className='auth-card__form'>
                        <h2>Welcome back</h2>

                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required='required'
                                    type='text'
                                    placeholder='Email'
                                />
                            </div>

                            <div className='input-field mb-2'>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required='required'
                                    type='password' 
                                    placeholder='Password' 
                                />
                            </div>

                            <button>LOGIN</button>
                        
                            <p>Don't have and account? <Link to='/register'>Register</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Login;
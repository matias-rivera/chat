import React, { useState } from 'react';
import registerImage from '../../assets/images/register.svg'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';



import './Auth.scss'

const Register = ({history}) => {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')
    const [password, setPassword] = useState('')


    const submitForm = (e) => {
        e.preventDefault()
        dispatch(register({firstName, lastName, email, gender, password},history))
    }


    return ( 
        <div className='auth-background'>
            <div className='auth-container'>
                <div className='auth-card card-shadow'>
                    <div className='auth-card__image'>
                        <img src={registerImage} alt='Register'/>
                    </div>

                    <div className='auth-card__form'>
                        <h2>Create an account</h2>

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

                            <button>REGISTER</button>
                        
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Register;
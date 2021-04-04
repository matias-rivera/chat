import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import './Chat.scss'

const Chat = () => {
    
    const user = useSelector(state => state.authReducer.user)
    
    return ( 
        <div className='chat-container'>
            <Navbar />
            <div className='chat-wrap'>
                Data
            </div>

        </div>
     );
}
 
export default Chat;
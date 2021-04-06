import React from 'react';
import Message from '../Message/Message';
import './MessageBox.scss'
import { useSelector} from 'react-redux'

const MessageBox = ({chat}) => {

    const user = useSelector(state => state.authReducer.user)

    return ( 
        <div className='msg-box'>
            {
                chat.Messages.map((message,i) => {
                    return <Message
                                user={user}
                                chat={chat}
                                message={message}
                                index={i}
                                key={message.id}
                            />
                })
            }
        </div>
     );
}
 
export default MessageBox;
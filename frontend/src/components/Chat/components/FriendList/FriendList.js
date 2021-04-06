import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setCurrentChat } from '../../../../store/actions/chat';
import Friend from '../Friend/Friend.';
import './FriendList.scss'



const FriendList = () => {

    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatReducer.chats)

    const openChat = (chat) => {
        dispatch(setCurrentChat(chat))
    }

    return ( 
        <div className='friends' className='shadow-light'>
            <div className='friends__title'>
                <h3 className='m-0'>Friends</h3>
                <button>ADD</button>
            </div>
            <hr />

            <div className='friends__box'>
                {
                    chats.length > 0
                    ? chats.map(chat => {
                        return <Friend handleOpenChat={() => openChat(chat)} chat={chat} key={chat.id}/>
                    })
                    : <p className='no-chat'>No friends added</p>
                }
            </div>
        </div>

     );
}
 
export default FriendList
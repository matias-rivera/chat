import React from 'react';
import './Modal.scss'

const Modal = ({children, handleClose}) => {


    const findByKey = (name) => {
        const row = []
        children.map(child => {
            if(child.key == name) row.push(child)
        })
        return row
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if(e.target.classList.contains('modal-close')){
            return handleClose()
        }
    }

    return (
        <div className='modal-mask modal-close' onClick={closeModal}>
            <div className='modal-wrapper'>
                <div className='modal-container'>

                    <div className='modal-header'>
                        {findByKey('header')}
                    </div>

                    <div className='modal-body'>
                        {findByKey('body')}
                    </div>

                    <div className='modal-footer'>
                        <button 
                            className='modal-close'
                            onClick={closeModal}
                        >
                            CLOSE
                        </button> 
                        {findByKey('footer')}
                    </div>

                </div>
            </div>
        </div>
      );
}
 
export default Modal;
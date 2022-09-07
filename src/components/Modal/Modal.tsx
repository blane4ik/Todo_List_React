import React, { useCallback, useEffect } from 'react';
import './Modal.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = ({ icon, title = '', closeHandler, children: ModalComponent }) => {

    const keyboardHandler = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler(false);
        }
    }, [closeHandler]);

    useEffect(() => {
        document.addEventListener('keyup', keyboardHandler);

        return () => {
            window.removeEventListener('keyup', keyboardHandler);
        };
    }, [closeHandler, keyboardHandler]);

    return (
        <div onClick={() => closeHandler(false)} className="modal-wrapper">
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <div className="modal-window-header">
                    <div className="d-flex align-items-center">
                        <span className="mx-2 icon">{ icon }</span>
                        <h4 className="label user-select-none m-0 pt-1">{ title }</h4>
                    </div>
                    <AiFillCloseCircle onClick={() => closeHandler(false)} className="close" />
                </div>
                <div className="modal-window-content">
                    <ModalComponent close={() => closeHandler(false)} />
                </div>
            </div>
        </div>
    );
};

export default Modal;

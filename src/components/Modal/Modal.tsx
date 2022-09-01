import React, { useCallback, useEffect } from 'react';
import './Modal.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = ({ icon, title = '', closeHandler, children: ModalComponent }) => {

    const keyboardHandler = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            close();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keyup', keyboardHandler);

        return () => {
            document.removeEventListener('keyup', keyboardHandler);
        }
    }, []);

    function close() {
        closeHandler(false);
    }

    return (
        <div onClick={close} className="modal-wrapper">
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <div className="modal-window-header">
                    <div className="d-flex align-items-center">
                        <span className="mx-2 icon">{ icon }</span>
                        <h4 className="label user-select-none m-0 pt-1">{ title }</h4>
                    </div>
                    <AiFillCloseCircle onClick={close} className="close" />
                </div>
                <div className="modal-window-content">
                    <ModalComponent close={close} />
                </div>
            </div>
        </div>
    );
};

export default Modal;

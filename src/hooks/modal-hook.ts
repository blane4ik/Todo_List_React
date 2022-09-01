import { useState } from 'react';

export const useModal = (component, title = null, icon = null) => {
    const [ showModal, setShowModal ] = useState(false);

    const modal = `
        <Portal>
            <Modal
              icon=${icon}
              title=${title}
              closeHandler=${setShowModal}
              children=${component}  
            />
        </Portal>
    `

    return modal;

}

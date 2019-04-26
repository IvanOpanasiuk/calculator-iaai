import {createPortal} from 'react-dom';

const ModalWindow = (props) => (
    createPortal(props.children, props.domNode)
)
 
export default ModalWindow;
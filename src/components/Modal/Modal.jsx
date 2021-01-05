import ReactDOM from 'react-dom';
import { ModalContainer } from './Modal.style';

const Modal = ({ children, open }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <ModalContainer>{children}</ModalContainer>,
    document.getElementById('portal'),
  );
};

export default Modal;

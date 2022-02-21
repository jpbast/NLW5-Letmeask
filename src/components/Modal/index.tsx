import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { colors } from '../../styles/theme';
import Button from '../Button';
import { ModalWrapper } from './styles';

type ModalProps = {
  cancelText?: string;
  okText: string;
  visible: boolean;
  title: string;
  onOk: () => void;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  cancelText,
  okText,
  visible,
  title,
  onOk,
  onClose,
}) => {
  const [unmounting, setUnmounting] = React.useState<boolean>(false);

  const closeModal = () => {
    setUnmounting(true);
    setTimeout(() => {
      onClose();
      setUnmounting(false);
    }, 200);
  };

  return visible ? (
    <ModalWrapper
      onClick={() => {
        closeModal();
      }}
      className={unmounting ? 'close' : 'open'}
    >
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => closeModal()}>
          <AiOutlineCloseCircle size={40} />
        </button>
        <strong>{title}</strong>
        <div className="content">{children}</div>
        <footer>
          <Button $type="primary" $background={colors.gray} onClick={() => closeModal()}>
            {cancelText || 'Cancelar'}
          </Button>
          <Button $type="primary" $background={colors.red} onClick={() => onOk()}>
            {okText}
          </Button>
        </footer>
      </div>
    </ModalWrapper>
  ) : (
    <></>
  );
};

export default Modal;

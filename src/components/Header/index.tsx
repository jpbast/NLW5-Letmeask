import React from 'react';
import { FiCopy } from 'react-icons/fi';
import { HeaderWrapper } from './styles';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import Button from '../Button';
import { colors } from '../../styles/theme';
import Router from 'next/router';
import Modal from '../Modal';
import { useMediaQuery } from 'react-responsive';
import { IoSettingsSharp } from 'react-icons/io5';

const Header: React.FC<{ roomId: string; isAdmin?: boolean }> = ({ roomId, isAdmin }) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const isMenuSize = useMediaQuery({ query: '(max-width: 720px)' });

  React.useEffect(() => {
    if (!isMenuSize) setOpen(false);
  }, [isMenuSize]);

  const deleteRoom = async () => {
    try {
      await axios.delete('/api/deleteRoom', {
        data: {
          roomId,
        },
      });
      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HeaderWrapper isMenuOpen={isOpen}>
      <img src="/images/logo.svg" alt="Logo do projeto" width="110px" />
      {isMenuSize && (
        <button onClick={() => setOpen(!isOpen)}>
          <IoSettingsSharp size={25} />
        </button>
      )}
      <div className={isOpen ? 'actions open' : 'actions close'}>
        <div>
          <CopyToClipboard text={roomId}>
            <div>
              <FiCopy size={20} />
            </div>
          </CopyToClipboard>
          <span>Sala {roomId}</span>
        </div>
        {isAdmin && (
          <Button $type="secondary" $background={colors.primary} onClick={() => setShowModal(true)}>
            Encerrar sala
          </Button>
        )}
      </div>
      <Modal
        onOk={() => {
          deleteRoom();
          setShowModal(false);
        }}
        onClose={() => setShowModal(false)}
        okText="Sim, encerrar"
        visible={showModal}
        title="Encerrar sala"
      >
        Tem certeza que você deseja encerrar esta sala?
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;

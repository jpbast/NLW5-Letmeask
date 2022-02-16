import { FiCopy } from 'react-icons/fi'
import { HeaderWrapper } from './styles'
import CopyToClipboard from 'react-copy-to-clipboard'
import axios from 'axios'
import Button from '../Button'
import { colors } from '../../styles/theme'

const Header: React.FC<{ roomId: string; isAdmin?: boolean }> = ({ roomId, isAdmin }) => {
  const deleteRoom = async () => {
    try {
      await axios.delete('/api/deleteMessage', {
        data: {
          roomId,
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <HeaderWrapper>
      <img src="/images/logo.svg" alt="Logo do projeto" width="110px" />
      <div>
        <div>
          <CopyToClipboard text={roomId}>
            <div>
              <FiCopy size={20} />
            </div>
          </CopyToClipboard>
          <span>Sala {roomId}</span>
        </div>
        {isAdmin && (
          <Button $type="secondary" $background={colors.primary} onClick={() => deleteRoom}>
            Encerrar sala
          </Button>
        )}
      </div>
      
    </HeaderWrapper>
  )
}

export default Header

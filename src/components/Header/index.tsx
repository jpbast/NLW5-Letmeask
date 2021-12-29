import { FiCopy } from 'react-icons/fi'
import { HeaderWrapper } from './styles'
import CopyToClipboard from 'react-copy-to-clipboard'

const Header: React.FC<{ roomId: string }> = ({ roomId }) => {
  return (
    <HeaderWrapper>
      <img src="/images/logo.svg" alt="Logo do projeto" width="110px" />
      <div>
        <CopyToClipboard text={roomId}>
          <div>
            <FiCopy size={20} />
          </div>
        </CopyToClipboard>
        <span>Sala {roomId}</span>
      </div>
    </HeaderWrapper>
  )
}

export default Header

import { UserWrapper } from './styles'
import { AiOutlineUser } from 'react-icons/ai'

type UserProps = {
  name: string
  isDark?: boolean
}

const User: React.FC<UserProps> = ({ name, isDark }) => {
  return (
    <UserWrapper isDark={isDark}>
      <div>
        <AiOutlineUser size={20} />
      </div>
      <span>{name}</span>
    </UserWrapper>
  )
}

export default User

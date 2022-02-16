import { UserWrapper } from './styles';
import { AiOutlineUser } from 'react-icons/ai';

type UserProps = {
  name: string;
  picture?: string;
  isDark?: boolean;
};

const User: React.FC<UserProps> = ({ name, picture, isDark }) => {
  return (
    <UserWrapper isDark={isDark}>
      <div>{picture ? <img src={picture} alt="" /> : <AiOutlineUser size={20} />}</div>
      <span>{name}</span>
    </UserWrapper>
  );
};

export default User;

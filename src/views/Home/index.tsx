import { useState } from 'react';
import Button from '../../components/Button';
import { colors } from '../../styles/theme';
import { HomeWrapper } from './styles';
import { FiLogIn } from 'react-icons/fi';
import { BsGoogle } from 'react-icons/bs';
import Input from '../../components/Input';
import router from 'next/router';
import { useAuth } from '../../providers/authProvider';

const HomeView: React.FC = () => {
  const [room, setRoom] = useState<string>('');
  const { login } = useAuth();

  return (
    <HomeWrapper>
      <aside>
        <div>
          <img src="/images/illustration.svg" alt="" />
          <h1>Toda pergunta tem uma resposta.</h1>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
        </div>
      </aside>
      <section>
        <div>
          <img src="/images/logo.svg" alt="Logo do projeto" />
          <Button $background={colors.red} $type="primary" onClick={() => login('/room/new')}>
            <BsGoogle size={25} />
            Crie sua sala com o Google
          </Button>
          <div className="separator">ou entre em uma sala</div>
          <Input
            placeholder="Digite o código da sala"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <Button
            $background={colors.primary}
            $type="primary"
            onClick={() => router.push(`/room/${room}`)}
          >
            <FiLogIn size={25} />
            Entrar na sala
          </Button>
        </div>
      </section>
    </HomeWrapper>
  );
};

export default HomeView;

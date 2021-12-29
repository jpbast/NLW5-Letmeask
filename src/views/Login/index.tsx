import { useState } from 'react'
import Button from '../../components/Button'
import { colors } from '../../styles/theme'
import { LoginWrapper } from './styles'
import { FiLogIn } from 'react-icons/fi'
import { BsGoogle } from 'react-icons/bs'
import Input from '../../components/Input'
import router from 'next/router'

const LoginView: React.FC = () => {
  const [room, setRoom] = useState<string>('')

  return (
    <LoginWrapper>
      <section>
        <div>
          <h1>Toda pergunta tem uma resposta.</h1>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
        </div>
      </section>
      <section>
        <div>
          <img src="/images/logo.svg" alt="Logo do projeto" />
          <Button $background={colors.red} $type="primary">
            <BsGoogle size={25} />
            Crie sua sala com o Google
          </Button>
          <div>
            <div className="trace" />
            <span>ou entre em uma sala</span>
            <div className="trace" />
          </div>
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
    </LoginWrapper>
  )
}

export default LoginView

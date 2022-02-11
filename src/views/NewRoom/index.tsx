import { useState } from 'react'
import Button from '../../components/Button'
import { colors } from '../../styles/theme'
import Input from '../../components/Input'
import Link from 'next/link'
import { NewRoomWrapper } from './styles'

const NewRoomView: React.FC = () => {
  const [newRoom, setNewRoom] = useState<string>('')

  return (
    <NewRoomWrapper>
      <section>
        <div>
          <h1>Toda pergunta tem uma resposta.</h1>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
        </div>
      </section>
      <section>
        <div>
          <img src="/images/logo.svg" alt="Logo do projeto" />
          <h1>Crie uma nova sala</h1>
          <Input
            placeholder="Nome da sala"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
          />
          <Button $background={colors.primary} $type="primary">
            Criar sala
          </Button>
          <span>Quer entrar em uma sala já existente? <Link href="#"><a>Clique aqui</a></Link></span>
        </div>
      </section>
    </NewRoomWrapper>
  )
}

export default NewRoomView

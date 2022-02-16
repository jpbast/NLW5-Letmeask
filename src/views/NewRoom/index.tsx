import { useState } from 'react'
import Button from '../../components/Button'
import { colors } from '../../styles/theme'
import Input from '../../components/Input'
import Link from 'next/link'
import { NewRoomWrapper } from './styles'
import axios from 'axios'
import { useAuth } from '../../providers/authProvider'
import router from 'next/router'

const NewRoomView: React.FC = () => {
  const [roomName, setRoomName] = useState<string>('')
  const { user } = useAuth()

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
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <Button $background={colors.primary} $type="primary" onClick={async () => {
            try {
              const { data } = await axios.post('/api/createRoom', {
                data: {
                  title: roomName,
                  userId: user?.id,
                }
              })
              if (data) router.push(`/room/${data.roomId}`)
            } catch (err) {
              console.log(err)
            }
          }}>
            Criar sala
          </Button>
          <span>Quer entrar em uma sala já existente? <Link href="#"><a>Clique aqui</a></Link></span>
        </div>
      </section>
    </NewRoomWrapper>
  )
}

export default NewRoomView

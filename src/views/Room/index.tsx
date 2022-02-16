import React from 'react'
import Header from '../../components/Header'
import { RoomPageProps } from '../../pages/room/[id]'
import { RoomWrapper, Content, QuestionsWrapper, EmptyQuestions } from './styles'
import Button from '../../components/Button'
import { colors } from '../../styles/theme'
import Question from '../../components/Question'
import { database } from '../../services/firebase'
import { Room } from '../../types/backend'
import { useAuth } from '../../providers/authProvider'
import User from '../../components/User'
import axios from 'axios'
import formatRoomData from '../../utils/formatRoomData'

const RoomView: React.FC<RoomPageProps> = (props) => {
  const [room, setRoom] = React.useState<Room>(props.room)
  const [message, setMessage] = React.useState<string>('')
  const { login, user } = useAuth()

  const isAdmin = React.useMemo(() => props.room.userId === user?.id, [props.room, user])

  React.useEffect(() => {
    const ref = database.ref(`rooms/${props.room.id}`)
    if (ref) {
      ref.on('value', (snapshot) => {
        setRoom(formatRoomData(snapshot.val(), props.room.id))
      }, (err) => console.log(err))
    }
  }, [props.room])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const messageBody = {
        message,
        userName: user.name,
        userPicture: user.picture
      }
      const { data } = await axios.post('/api/createMessage', {
        data: { ...messageBody, roomId: room.id}
      })

      if (data.messageId)
        setRoom({ ...room, questions: [...(room.questions || []), { ...messageBody, upVotes: 0, id: data.messageId }] })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <RoomWrapper>
      <Header roomId={room.id} isAdmin={isAdmin} />
      <Content>
        <div>
          <h1>Sala {room.title}</h1>
          {room && room.questions.length > 0 && (
            <div>
              {room.questions.length} pergunta{room.questions.length > 1 ? 's' : ''}
            </div>
          )}
        </div>
        {!isAdmin && (
          <form onSubmit={handleSubmit}>
            <textarea rows={6} placeholder="O que você quer perguntar?" onChange={(e) => setMessage(e.target.value)} value={message} />
            <div>
              {user ? (
                <User name={user.name} picture={user.picture} />
              ) : (
                <span>
                  Para enviar uma pergunta,{' '}
                  <button onClick={() => login()}>faça seu login</button>
                </span>
              )}
              <Button $type="primary" $background={colors.primary} disabled={!user} htmlType="submit" >
                Enviar pergunta
              </Button>
            </div>
          </form>
        )}
        {room && room.questions && room.questions.length > 0 ? (
          <QuestionsWrapper>
            {room.questions.map((question) => (
              <Question key={question.id} {...question} roomId={room.id} userId={room.userId} />
            ))}
          </QuestionsWrapper>
        ) : (
          <EmptyQuestions>
            <img src="/images/empty-questions.svg" alt="" />
            <strong>Nenhuma pergunta por aqui...</strong>
            <span>{isAdmin ? 'Envie o código desta sala para seus amigos e comece a responder perguntas' : `${!user ? 'Faça o seu login e s' : 'S'}eja a primeira pessoa a fazer uma pergunta!`}</span>
          </EmptyQuestions>
        )}
      </Content>
    </RoomWrapper>
  )
}

export default RoomView

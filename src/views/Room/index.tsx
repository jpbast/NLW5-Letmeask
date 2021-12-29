import Header from '../../components/Header'
import { RoomPageProps } from '../../pages/room/[id]'
import { RoomWrapper, Content, QuestionsWrapper } from './styles'
import Link from 'next/link'
import Button from '../../components/Button'
import { colors } from '../../styles/theme'
import Question from '../../components/Question'

const RoomView: React.FC<RoomPageProps> = ({ roomId }) => {
  const questions = [
    {
      message:
        'Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.',
      user: {
        name: 'João Bast'
      },
      upVotes: 10
    },
    {
      message:
        'Estou integrando a emissão de nota fiscal numa aplicação, e a API me retorna um link html pra impressão. O problema é que quando jogo pra imprimir pela biblioteca react-print, usando o...',
      user: {
        name: 'João Bast'
      },
      upVotes: 7
    }
  ]

  return (
    <RoomWrapper>
      <Header roomId={roomId} />
      <Content>
        <h1>Sala React QA</h1>
        <textarea rows={6} placeholder="O que você quer perguntar?" />
        <div>
          <span>
            Para enviar uma pergunta,{' '}
            <Link href="/auth">
              <a>faça seu login</a>
            </Link>
          </span>
          <Button $type="primary" $background={colors.primary}>
            Enviar pergunta
          </Button>
        </div>
        <QuestionsWrapper>
          {questions.map((question) => (
            <Question key={question.message} {...question} />
          ))}
        </QuestionsWrapper>
      </Content>
    </RoomWrapper>
  )
}

export default RoomView

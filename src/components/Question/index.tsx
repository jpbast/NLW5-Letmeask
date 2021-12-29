import { FiThumbsUp } from 'react-icons/fi'
import User from '../User'
import { QuestionWrapper } from './styles'

type QuestionProps = {
  message: string
  user: {
    name: string
  }
  upVotes: number
}

const Question: React.FC<QuestionProps> = ({ message, user, upVotes }) => {
  return (
    <QuestionWrapper>
      <p>{message}</p>
      <div>
        <User name={user.name} />
        <span>
          {upVotes > 0 ? upVotes : null}
          <FiThumbsUp size={20} />
        </span>
      </div>
    </QuestionWrapper>
  )
}

export default Question

import axios from 'axios';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiMessage, BiTrashAlt } from 'react-icons/bi';
import { FiThumbsUp } from 'react-icons/fi';
import { useAuth } from '../../providers/authProvider';
import User from '../User';
import { QuestionWrapper } from './styles';

type QuestionProps = {
  message: string;
  userName: string;
  upVotes: number;
  roomId: string;
  userId: string;
  id: string;
  answering?: boolean;
  answered?: boolean;
};

const Question: React.FC<QuestionProps> = ({
  message,
  userName,
  upVotes,
  roomId,
  id,
  userId,
  answering,
  answered,
}) => {
  const { user } = useAuth();

  const updateMessage = async (data: {
    upVotes?: number;
    answering?: boolean;
    answered?: boolean;
  }) => {
    try {
      await axios.post('/api/updateMessage', {
        data: {
          roomId,
          questionId: id,
          ...data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async () => {
    try {
      await axios.delete('/api/deleteMessage', {
        data: {
          roomId,
          questionId: id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <QuestionWrapper answered={answered} answering={answering}>
      <p>{message}</p>
      <div>
        <User name={userName} />
        {userId === user?.id ? (
          <div className="admin-icons">
            <AiOutlineCheckCircle size={20} onClick={() => updateMessage({ answered: true })} />
            <BiMessage size={20} onClick={() => updateMessage({ answering: true })} />
            <BiTrashAlt size={20} onClick={() => deleteMessage()} />
          </div>
        ) : (
          <span>
            {upVotes > 0 ? upVotes : null}
            <FiThumbsUp size={20} onClick={() => updateMessage({ upVotes: upVotes + 1 })} />
          </span>
        )}
      </div>
    </QuestionWrapper>
  );
};

export default Question;

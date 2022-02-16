import { NextApiRequest, NextApiResponse } from 'next';
import { database, ref, set, push, child } from '../../services/firebase';

const createMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;

  const dbRef = ref(database, `rooms/${data.roomId}/questions`);
  const messageId = push(dbRef).key;

  set(child(dbRef, messageId), {
    message: data.message,
    upVotes: 0,
    userName: data.userName,
    userPicture: data.userPicture,
  })
    .then(() => res.status(200).json({ messageId, message: 'Question posted successfully' }))
    .catch((error) => res.json({ error }));
  return {};
};

export default createMessage;

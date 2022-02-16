import { NextApiRequest, NextApiResponse } from 'next';
import { database, ref, remove } from '../../services/firebase';

const deleteMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data: { roomId, questionId },
  } = req.body;

  const dbRef = ref(database, `rooms/${roomId}/questions/${questionId}`);
  remove(dbRef)
    .then(() => res.status(200).json({ message: 'Question deleted successfully' }))
    .catch((error) => res.json({ error }));
};

export default deleteMessage;

import { NextApiRequest, NextApiResponse } from 'next';
import { database, update, ref } from '../../services/firebase';

const updateMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data: { roomId, questionId, ...updatedContent },
  } = req.body;

  const dbRef = ref(database, `rooms/${roomId}/questions/${questionId}`);

  update(dbRef, updatedContent)
    .then(() => res.status(200).json({ message: 'Question updated successfully' }))
    .catch((error) => res.json({ error }));

  return;
};

export default updateMessage;

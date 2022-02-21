import { NextApiRequest, NextApiResponse } from 'next';
import { database, ref, remove } from '../../services/firebase';

const deleteRoom = (req: NextApiRequest, res: NextApiResponse) => {
  const { roomId } = req.body;

  const dbRef = ref(database, `rooms/${roomId}`);
  remove(dbRef)
    .then(() => res.status(200).json({ message: 'Room deleted successfully' }))
    .catch((error) => res.json({ error }));
};

export default deleteRoom;

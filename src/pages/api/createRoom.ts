import { NextApiRequest, NextApiResponse } from 'next';
import { database, ref, set, push, child } from '../../services/firebase';

const createRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;

  const dbRef = ref(database, 'rooms');
  const roomId = push(dbRef).key;

  set(child(dbRef, roomId), {
    title: data.title,
    userId: data.userId,
  })
    .then(() => res.status(200).json({ roomId, message: 'Room created successfully' }))
    .catch((error) => res.json({ error }));
};

export default createRoom;

import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../services/firebase'

const createRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body
  const ref = database.ref('rooms')
  const roomId = ref.push().key
  ref.child(roomId).set({
    title: data.title,
    userId: data.userId,
  })
    .then(() =>  res.status(200).json({ roomId, message: 'Room created successfully' }))
    .catch((error) => res.json({ error }))
}

export default createRoom
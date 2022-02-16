import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../services/firebase'

const deleteRoom = (req: NextApiRequest, res: NextApiResponse) => {
  const { data: { roomId } } = req.body
  console.log(roomId)
  const ref = database.ref(`rooms/${roomId}`)
  ref.remove()
    .then(() => res.status(200).json({ message: 'Room deleted successfully' }))
    .catch((error) => res.json({ error }))
} 

export default deleteRoom
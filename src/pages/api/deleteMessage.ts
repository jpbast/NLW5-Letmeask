import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../services/firebase'

const deleteMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const { data: { roomId, questionId } } = req.body
  console.log(roomId, questionId)
  const ref = database.ref(`rooms/${roomId}/questions/${questionId}`)
  ref.remove()
    .then(() => res.status(200).json({ message: 'Question deleted successfully' }))
    .catch((error) => res.json({ error }))
} 

export default deleteMessage
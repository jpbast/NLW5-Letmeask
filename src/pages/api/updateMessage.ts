import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../services/firebase'

const updateMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const { data: { roomId, questionId, ...updatedContent } } = req.body

  const ref = database.ref(`rooms/${roomId}/questions/${questionId}`)
  ref.update(updatedContent)
    .then(() => res.status(200).json({ message: 'Question updated successfully' }))
    .catch((error) => res.json({ error }))
    
  return 
}

export default updateMessage
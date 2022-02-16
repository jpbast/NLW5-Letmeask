import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../services/firebase'

const createMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body
  console.log(data)
  const ref = database.ref(`rooms/${data.roomId}/questions`)
  const messageId = ref.push().key
  ref.child(messageId).set({
    message: data.message,
    upVotes: 0,
    userName: data.userName,
    userPicture: data.userPicture
  })
    .then(() => res.status(200).json({ messageId, message: 'Question posted successfully' }))
    .catch((error) => res.json({ error }))
  return {

  }
}

export default createMessage
import { GetServerSideProps } from 'next'
import { auth, database, firebase, firebaseAdmin } from '../../services/firebase'
import { Room, RoomFirebase } from '../../types/backend'
import formatRoomData from '../../utils/formatRoomData'
import RoomView from '../../views/Room'

export type RoomPageProps = {
  room: Room
}

const RoomPage: React.FC<RoomPageProps> = (props) => {
  return <RoomView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const roomId = ctx.params.id
  const ref = database.ref(`rooms/${roomId}`)
  const snapshot = await ref.once('value', (snapshot) => {
    return snapshot
  }, (err) => console.log(err))

  // await firebaseAdmin.auth().verifyIdToken
  console.log('cookie', ctx.req.headers.cookie)
  if (snapshot.exists())
    return {
      props: {
        room: formatRoomData(snapshot.val() as RoomFirebase, roomId as string)
      }
    }

  return {
    notFound: true,
  }
}

export default RoomPage

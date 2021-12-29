import { GetServerSideProps } from 'next'
import RoomView from '../../views/Room'

export type RoomPageProps = {
  roomId: string
}

const RoomPage: React.FC<RoomPageProps> = (props) => {
  return <RoomView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      roomId: ctx.params.id
    }
  }
}

export default RoomPage

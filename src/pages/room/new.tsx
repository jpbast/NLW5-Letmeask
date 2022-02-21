import { GetServerSideProps } from 'next';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import NewRoomView from '../../views/NewRoom';
import nextCookies from 'next-cookies';

const NewRoom: React.FC = () => {
  return <NewRoomView />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nextCookies(ctx);
  const isValidUser = await firebaseAdmin
    .auth()
    .verifyIdToken(cookies.token || '')
    .then((_user) => {
      return true;
    })
    .catch(() => {
      return false;
    });
  if (isValidUser)
    return {
      props: {},
    };
  return {
    redirect: {
      destination: '/',
    },
    props: {},
  };
};

export default NewRoom;

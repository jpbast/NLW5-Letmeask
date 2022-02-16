import React from 'react';
import { GetServerSideProps } from 'next';
import { database, ref, get } from '../../services/firebase';
import nextCookies from 'next-cookies';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import { Room, RoomFirebase, User } from '../../types/backend';
import formatRoomData from '../../utils/formatRoomData';
import RoomView from '../../views/Room';
import { useAuth } from '../../providers/authProvider';

export type RoomPageProps = {
  room: Room;
  user?: User;
};

const RoomPage: React.FC<RoomPageProps> = (props) => {
  const { setUser } = useAuth();
  React.useEffect(() => {
    if (props.user) {
      setUser(props.user);
    }
  }, []);

  return <RoomView {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const roomId = ctx.params.id;
  const dbRef = ref(database, `rooms/${roomId}`);
  const cookies = nextCookies(ctx);
  const res = await get(dbRef)
    .then(async (snapshot) => {
      return snapshot.exists()
        ? await firebaseAdmin
            .auth()
            .verifyIdToken(cookies.token || '')
            .then((user) => {
              return {
                room: formatRoomData(snapshot.val() as RoomFirebase, roomId as string),
                user: {
                  name: user.name,
                  email: user.email,
                  picture: user.picture,
                  id: user.uid,
                } as User,
              };
            })
            .catch(() => {
              return {
                room: formatRoomData(snapshot.val() as RoomFirebase, roomId as string),
              };
            })
        : {
            notFound: true,
          };
    })
    .catch(() => {
      return {
        notFound: true,
      };
    });

  if (res['notFound'])
    return {
      notFound: true,
    };
  return {
    props: res,
  };
};

export default RoomPage;

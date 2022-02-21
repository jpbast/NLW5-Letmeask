import React from 'react';
import { GetServerSideProps } from 'next';
import { database, ref, get } from '../../services/firebase';
import nextCookies from 'next-cookies';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import { Room, RoomFirebase, User } from '../../types/backend';
import formatRoomData from '../../utils/formatRoomData';
import RoomView from '../../views/Room';

export type RoomPageProps = {
  room: Room;
  user?: User;
};

const RoomPage: React.FC<RoomPageProps> = (props) => {
  return <RoomView {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const roomId = ctx.params.id;
  const dbRef = ref(database, `rooms/${roomId}`);
  const cookies = nextCookies(ctx);
  const res:
    | {
        room: Room;
        user?: User;
      }
    | {
        notFound: boolean;
      } = await get(dbRef)
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

  if (!(res as { user?: User }).user)
    ctx.res.setHeader('Set-Cookie', [
      'token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
      'user=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
    ]);

  return {
    props: res,
  };
};

export default RoomPage;

import { Question, RoomFirebase } from '../types/backend';

const formatRoomData = (room: RoomFirebase, roomId: string) => {
  const sortedQuestions = Object.keys(room.questions || [])
    .map((key) => {
      return {
        ...room.questions[key],
        id: key,
      } as Question;
    })
    .sort((a, b) => b.upVotes - a.upVotes)
    .sort((a, b) => Number(a.answered || false) - Number(b.answered || false));

  return {
    ...room,
    id: roomId,
    questions: sortedQuestions,
  };
};

export default formatRoomData;

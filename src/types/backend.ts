export type User = {
  id: string;
  name: string;
  email: string;
  picture?: string;
};

export type Question = {
  id: string;
  message: string;
  upVotes: number;
  answered?: boolean;
  answering?: boolean;
  userName: string;
  userPicture?: string;
};

export type Room = {
  id: string;
  userId: string;
  title: string;
  questions: Question[];
};

export type RoomFirebase = {
  userId: string;
  title: string;
  questions: {
    [key: string]: Question;
  };
};

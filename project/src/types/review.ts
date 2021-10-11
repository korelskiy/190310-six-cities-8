type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type Review = {
  id: number;
  comments: Comment[];
};

type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Comment = {
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

export type UserNewReview = {
  rating: number;
  comment: string;
}

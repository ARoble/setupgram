export type SetupProps = {
  id: string;
  image: string;
  user?: UserProps;
  likes?: LikeProps[];
};

export type UserProps = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type LikeProps = {
  id: string;
  userId: string;
  setupId: string;
};

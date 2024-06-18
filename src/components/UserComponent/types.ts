export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

export type TAlbum = {
  albumId: string;
  title: string;
  userId: string;
};

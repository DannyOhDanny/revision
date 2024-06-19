export type TPhoto = {
  albumId: string;
  id: string;
  title: string;
  url: string;
};

export type TStore = {
  favourites: {
    photos: TPhoto[];
  };
};

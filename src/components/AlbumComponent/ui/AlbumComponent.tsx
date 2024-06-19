import { useState, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { InvalidateQueryFilters } from '@tanstack/react-query';

import usersAPI from '../../UserComponent/api/api.ts';

import { TAlbum } from 'src/components/UserComponent/types.ts';

import icOpen from '../../../assets/ic_open.svg';
import icClose from '../../../assets/ic_close.svg';

import { LineWrapper, Image, UserName } from '../styled.ts';

type TPhoto = {
  albumId: string;
  id: string;
  title: string;
  url: string;
};

export const AlbumComponent = ({ albums }: { albums: TAlbum[] }) => {
  const queryClient = useQueryClient();
  const [clickedAlbumId, setAlbumId] = useState<string | null>('');
  const [albumPhotoList, setAlbumPhotoList] = useState<TPhoto[]>([]);

  const handleClick = (albumId: string) => {
    setAlbumId(clickedAlbumId === albumId ? null : albumId);
    queryClient.invalidateQueries('get-photos' as InvalidateQueryFilters);
  };

  const {
    isPending,
    error,
    data: photos = []
  } = useQuery({
    queryKey: ['get-photos'],
    queryFn: async () => {
      if (clickedAlbumId) {
        const photoData = await usersAPI.getAlbumPhotos(clickedAlbumId);
        return photoData || [];
      }
      return [];
    }
  });

  useEffect(() => {
    if (photos) {
      setAlbumPhotoList(photos);
    }
  }, [clickedAlbumId]);

  if (isPending) return <p>Loading...</p>;

  if (error) return 'An error has occurred: ' + error.message;

  // console.log(albumPhotoList, 'p-list');

  return (
    <>
      {albums.map(album => (
        <LineWrapper
          key={album.albumId}
          onClick={() => handleClick(album.albumId)}>
          <Image src={clickedAlbumId === album.albumId ? icClose : icOpen} />
          <UserName>{album.title}</UserName>
        </LineWrapper>
      ))}
    </>
  );
};

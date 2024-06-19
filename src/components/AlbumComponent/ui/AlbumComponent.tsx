import { useState, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { InvalidateQueryFilters } from '@tanstack/react-query';

import usersAPI from '../../UserComponent/api/api.ts';

import { TAlbum } from 'src/components/UserComponent/types.ts';
import { PhotoComponent } from '../../../components/PhotoComponent/index.ts';
import { TPhoto } from 'src/components/PhotoComponent/types.ts';

import icOpen from '../../../assets/ic_open.svg';
import icClose from '../../../assets/ic_close.svg';

import { LineWrapper, Image, UserName, AlbumWrapper } from './styled.ts';

export const AlbumComponent = ({ albums }: { albums: TAlbum[] }) => {
  const queryClient = useQueryClient();

  const [selectedAlbumId, setAlbumId] = useState<string | null>('');

  const [albumPhotoList, setAlbumPhotoList] = useState<TPhoto[]>([]);

  const handleClick = (albumId: string) => {
    setAlbumId(selectedAlbumId === albumId ? null : albumId);
    queryClient.invalidateQueries('get-photos' as InvalidateQueryFilters);
  };

  const { error, data: photos = [] } = useQuery<TPhoto[]>({
    queryKey: ['get-photos', selectedAlbumId],
    queryFn: async () => {
      if (selectedAlbumId) {
        const photoData = await usersAPI.getAlbumPhotos(selectedAlbumId);
        return photoData || [];
      }
      return [];
    },
    enabled: !!selectedAlbumId
  });

  useEffect(() => {
    if (photos && photos.length > 0) {
      setAlbumPhotoList(photos);
    }
  }, [photos]);

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      {albums.map(album => (
        <div key={album.albumId}>
          <LineWrapper
            onClick={() => {
              handleClick(album.albumId);
            }}>
            <Image src={selectedAlbumId === album.albumId ? icClose : icOpen} />
            <UserName>{album.title}</UserName>
          </LineWrapper>
          <AlbumWrapper>
            {selectedAlbumId === album.albumId && albumPhotoList && (
              <PhotoComponent
                photos={albumPhotoList.filter(
                  photo => photo.albumId === album.albumId
                )}></PhotoComponent>
            )}
            {selectedAlbumId === album.albumId &&
              albumPhotoList &&
              albumPhotoList.length === 0 && <p>Loading...</p>}
          </AlbumWrapper>
        </div>
      ))}
    </>
  );
};

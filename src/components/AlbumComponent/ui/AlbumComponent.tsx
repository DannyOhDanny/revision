import { LineWrapper, Image, UserName } from '../styled.ts';
import icOpen from '../../../assets/ic_open.svg';
import icClose from '../../../assets/ic_close.svg';
import { TAlbum } from 'src/components/UserComponent/types.ts';

export const AlbumComponent = ({ albums }: { albums: TAlbum[] }) => {
  return (
    <>
      {albums.map(album => (
        <LineWrapper key={album.albumId}>
          <Image src={album.albumId ? icClose : icOpen} />

          <UserName>{album.title}</UserName>
        </LineWrapper>
      ))}
    </>
  );
};

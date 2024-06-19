import { useState } from 'react';

import { TPhoto } from '../types.ts';

import { LineWrapper, Image, Tooltip, FavIcon } from './styled.ts';

import Modal from '../../../components/Modal/Modal.tsx';
import FavouriteIconInactive from '../../../assets/ic_inactive.svg';
import FavouriteIconActive from '../../../assets/ic_added.svg';

export const PhotoComponent = ({ photos }: { photos: TPhoto[] }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>('');
  const [selectedPhotoLink, setSelectedPhotoLink] = useState<string | null>('');

  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = (photoId: string, photoUrl: string) => {
    setSelectedPhotoId(selectedPhotoId === photoId ? null : photoId);

    setSelectedPhotoLink(photoUrl);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  const handleSelectFavourite = () => {
    setSelected(!selected);
  };

  return (
    <>
      {photos.map(photo => (
        <LineWrapper
          key={photo.id}
          onClick={() => {
            handleClick(photo.id, photo.url);
          }}>
          <Image src={photo.url} onClick={() => setModalOpen(true)} />
          <Tooltip>{photo.title}</Tooltip>
          <FavIcon
            $img={
              selected && selectedPhotoId === photo.id
                ? FavouriteIconActive
                : FavouriteIconInactive
            }
            onClick={handleSelectFavourite}
          />
        </LineWrapper>
      ))}
      {modalOpen && <Modal onClose={onClose} link={selectedPhotoLink} />}
    </>
  );
};

import { useState } from 'react';

import { TPhoto } from '../types.ts';

import { LineWrapper, Image, Tooltip } from './styled.ts';

import Modal from '../../../components/Modal/Modal.tsx';

export const PhotoComponent = ({ photos }: { photos: TPhoto[] }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>('');
  const [selectedPhotoLink, setSelectedPhotoLink] = useState<string | null>('');

  const handleClick = (photoId: string, photoUrl: string) => {
    setSelectedPhotoId(selectedPhotoId === photoId ? null : photoId);

    setSelectedPhotoLink(photoUrl);
  };

  const onClose = () => {
    setModalOpen(false);
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
        </LineWrapper>
      ))}
      {modalOpen && <Modal onClose={onClose} link={selectedPhotoLink} />}
    </>
  );
};

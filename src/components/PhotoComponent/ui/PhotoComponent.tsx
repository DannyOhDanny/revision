import { useState, useEffect } from 'react';

import { TPhoto, TStore } from '../types.ts';

import { LineWrapper, Image, Tooltip, FavIcon } from './styled.ts';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addPhoto, removePhoto } from '../../../app/slices/favouritesSlice.ts';
import Modal from '../../../components/Modal/Modal.tsx';
import FavouriteIconInactive from '../../../assets/ic_inactive.svg';
import FavouriteIconActive from '../../../assets/ic_added.svg';

export const PhotoComponent = ({ photos }: { photos: TPhoto[] }) => {
  const dispatch = useDispatch();

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

  const photosStore = useSelector((state: TStore) => state.favourites.photos);

  useEffect(() => {
    localStorage.setItem('FavouritesStore', JSON.stringify(photosStore));
  }, [photosStore]);

  //console.log(photosStore, 'store1');

  const handleSelectFavourite = (photo: TPhoto) => {
    const photoIndex = photosStore.findIndex(
      (item: TPhoto) => item.id === photo.id
    );

    if (photoIndex !== -1) {
      dispatch(removePhoto(photo));
      setSelected(false);
    } else {
      dispatch(addPhoto(photo));
      setSelected(true);
    }
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
              photosStore?.find((item: TPhoto) => item.id === photo.id)
                ? FavouriteIconActive
                : FavouriteIconInactive
            }
            onClick={() => {
              handleSelectFavourite(photo);
            }}
          />
        </LineWrapper>
      ))}
      {modalOpen && <Modal onClose={onClose} link={selectedPhotoLink} />}
    </>
  );
};

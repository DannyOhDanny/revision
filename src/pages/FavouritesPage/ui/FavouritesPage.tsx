import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { addPhoto } from '../../../app/slices/favouritesSlice.ts';

import { PhotoComponent } from '../../../components/PhotoComponent/index.ts';
import { NavBar } from '../../../components/NavBar/index.ts';

import { TPhoto } from 'src/components/PhotoComponent/types.ts';

import { StyledSection, BlockWrapper, FavouritesWrapper } from './styled.ts';

import FavouriteBanner from '../../../assets/img_favourites.png';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState<TPhoto[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    const favsString = localStorage.getItem('FavouritesStore');

    if (favsString) {
      const favs = JSON.parse(favsString);
      setFavourites(favs);
    }
  }, []);

  useEffect(() => {
    if (favourites && favourites.length > 0) {
      favourites.forEach((item: TPhoto) => {
        dispatch(addPhoto(item));
      });
    }
  }, [favourites, dispatch]);

  return (
    <StyledSection id="favourites-page">
      <div>
        <NavBar />

        {(!favourites || favourites.length === 0) && (
          <BlockWrapper>
            <img src={FavouriteBanner} alt="фото" />
            <h1>Список избранного пуст</h1>
            <p>Добавляйте изображения, нажимая на звездочки</p>
          </BlockWrapper>
        )}
        <FavouritesWrapper>
          {favourites && <PhotoComponent photos={favourites} />}
        </FavouritesWrapper>
      </div>
    </StyledSection>
  );
};

export default FavouritesPage;

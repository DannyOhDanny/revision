import { useState, useEffect } from 'react';
import { PhotoComponent } from '../../../components/PhotoComponent/index.ts';
import { NavBar } from '../../../components/NavBar/index.ts';
import FavouriteBanner from '../../../assets/img_favourites.png';
import { useSelector } from 'react-redux';
import { TStore } from 'src/components/PhotoComponent/types.ts';
import { StyledSection, BlockWrapper, FavouritesWrapper } from './styled.ts';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../../../app/slices/favouritesSlice.ts';
import { TPhoto } from 'src/components/PhotoComponent/types.ts';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState<TPhoto[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    const favsString = localStorage.getItem('FavouritesStore');

    if (favsString) {
      const favs = JSON.parse(favsString);
      setFavourites(favs);
    }
    const favorites: TPhoto[] = [];

    // if (favorites) {
    //   favorites.forEach((item: TPhoto) => {
    //     dispatch(addPhoto(item));
    //   });
    // }
  }, []);

  //const photosStore = useSelector((state: TStore) => state.favourites.photos);
  //console.log(photosStore, 'store2');
  //console.log(favourites, 'favor');
  return (
    <StyledSection id="favourites-page">
      <div>
        <NavBar />

        {(!favourites || favourites!.length == 0) && (
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

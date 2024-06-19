import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { NavBar } from '../../../components/NavBar/index.ts';
import { UserComponent } from '../../../components/UserComponent/index.ts';
import { TPhoto } from 'src/components/PhotoComponent/types.ts';

import { addPhoto } from '../../../app/slices/favouritesSlice.ts';

import { StyledSection } from '../ui/styled.ts';

const MainPage = () => {
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
    <StyledSection id="main-page">
      <div>
        <NavBar />
        <UserComponent />
      </div>
    </StyledSection>
  );
};
export default MainPage;

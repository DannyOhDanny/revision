import { Route, Routes } from 'react-router-dom';

import { FavouritesPage } from '../../pages/FavouritesPage';
import { MainPage } from '../../pages/MainPage';

import ErrorPage from '../../pages/ErrorPage/ui/ErrorPage';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
};

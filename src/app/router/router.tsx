import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { MainPage } from '../../pages/MainPage';
import App from '../App';
import { FavouritesPage } from '../../pages/FavouritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },

      {
        path: '/favourites',
        element: <FavouritesPage />
      },
      {
        path: '/*',
        element: <ErrorPage />
      }
    ]
  }
]);

export { router };

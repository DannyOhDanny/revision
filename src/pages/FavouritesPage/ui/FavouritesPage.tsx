import { StyledSection, BlockWrapper } from './styled.ts';
import { NavBar } from '../../../components/NavBar/index.ts';
import FavouriteBanner from '../../../assets/img_favourites.png';

const FavouritesPage = () => {
  return (
    <StyledSection id="main-page">
      <div>
        <NavBar />
        {
          <BlockWrapper>
            <img src={FavouriteBanner} alt="фото" />
            <h1>Список избранного пуст</h1>
            <p>Добавляйте изображения, нажимая на звездочки</p>
          </BlockWrapper>
        }
      </div>
    </StyledSection>
  );
};
export default FavouritesPage;

import { StyledSection } from '../ui/styled.ts';
import { NavBar } from '../../../components/NavBar/index.ts';
import { UserComponent } from '../../../components/UserComponent/index.ts';

const MainPage = () => {
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

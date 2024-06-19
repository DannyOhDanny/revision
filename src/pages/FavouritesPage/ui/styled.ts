import styled from 'styled-components';

const StyledSection = styled.section`
  margin: 56px auto;
  max-width: 744px;
  height: fit-content;
`;
const BlockWrapper = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 855px;

  h1 {
    margin-top: 32px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3;
  }

  p {
    margin-top: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
  }
`;

const FavouritesWrapper = styled.div`
  display: grid;
  margin: 60px 100px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 42px;
`;
export { StyledSection, BlockWrapper, FavouritesWrapper };

import styled from 'styled-components';
import colors from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

const MainLink = styled.a<{ $active?: boolean }>`
  text-align: center;
  border-radius: 16px;
  padding: 16px 32px;
  font-family: ${fonts.fontFamily};
  min-width: 372px;
  width: 100%;
  height: 55px;
  color: ${props => (props.$active ? colors.navTextColor : colors.titleColor)};
  background-color: ${props =>
    props.$active ? colors.activeNavColor : colors.background};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;
  cursor: pointer;
`;
export { ButtonWrapper, MainLink };

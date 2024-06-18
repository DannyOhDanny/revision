import styled from 'styled-components';
import { fonts } from '../../utils/fonts';

const LineWrapper = styled.div`
  padding: 0px 72px 0px 56px;
  width: 744px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 24px;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
`;

const UserName = styled.p`
  font-family: ${fonts.fontFamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;
`;

export { LineWrapper, Image, UserName };

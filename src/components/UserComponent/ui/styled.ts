import styled from 'styled-components';
import { fonts } from '../../../utils/fonts';
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
const LineWrapper = styled.div`
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
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { LineWrapper, Image, UserName, SectionWrapper, AlbumWrapper };

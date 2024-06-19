import styled from 'styled-components';
import { fonts } from '../../../utils/fonts';
import colors from '../../../utils/colors';

const LineWrapper = styled.div`
  width: 150px;
  heifgt: 150px;
  position: relative;

  &:hover img + div {
    display: block;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;

const UserName = styled.p`
  font-family: ${fonts.fontFamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;
`;

const Tooltip = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.69);
  border-radius: 4px;
  padding: 4px 8px;
  width: 150px;
  height: 56px;
  bottom: -30px;
  left: 30%;
  font-family: ${fonts.fontFamily};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: ${colors.background};
  display: none;
`;

export { LineWrapper, Image, UserName, Tooltip };

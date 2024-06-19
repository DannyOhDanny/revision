import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 600px;
  height: 600px;
  img {
    width: 600px;
    height: 600px;
  }
`;

const CloseButton = styled.div<{ $img?: string }>`
  background-image: url(${props => props.$img});
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  opacity: 1;
`;

export { ModalContainer, ModalOverlay, CloseButton };

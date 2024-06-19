import React, { useEffect, MouseEventHandler } from 'react';

import { ModalContainer, ModalOverlay, CloseButton } from './styled.ts';

import closeButton from '../../assets/ic_close_modal.svg';

import { TModal } from './types.ts';

const Modal: React.FC<TModal> = ({ onClose, link }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleClickOutside}>
      <ModalContainer>
        {link !== null ? (
          <img src={link} alt="фото котиков" />
        ) : (
          <p>Изображение недоступно</p>
        )}
        <CloseButton
          $img={closeButton}
          onClick={() => {
            onClose();
          }}
        />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

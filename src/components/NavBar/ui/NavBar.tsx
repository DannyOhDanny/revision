import { useState, useEffect, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { ButtonWrapper, MainLink } from '../ui/styled.ts';

const NavBar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setIsActive('home');
    } else if (location.pathname === '/favourites') {
      setIsActive('favourites');
    }
  }, [location]);

  const activeLink = useMemo(() => isActive, [isActive]);

  return (
    <ButtonWrapper>
      <MainLink href="/" $active={activeLink === 'home'}>
        Главная
      </MainLink>
      <MainLink href="/favourites" $active={activeLink === 'favourites'}>
        Избранное
      </MainLink>
    </ButtonWrapper>
  );
};

export default NavBar;

import { useState, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { InvalidateQueryFilters } from '@tanstack/react-query';
import { Query } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/react-query';
import usersAPI from '../api/api.ts';

import { AlbumComponent } from '../../AlbumComponent/index.ts';

import { IUser } from '../types.ts';
import { TAlbum } from '../types.ts';

import {
  LineWrapper,
  Image,
  UserName,
  SectionWrapper,
  AlbumWrapper
} from '../styled.ts';

import icOpen from '../../../assets/ic_open.svg';
import icClose from '../../../assets/ic_close.svg';

const UserComponent = () => {
  const queryClient = useQueryClient();

  const [clickedUserId, setClickedUserId] = useState<string | null>(
    '9f2483a8-69a1-4f90-9160-ec291ed32fdf'
  );
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [albumList, setAlbumList] = useState<TAlbum[]>([]);

  const handleClick = (userId: string) => {
    setClickedUserId(clickedUserId === userId ? null : userId);
    queryClient.invalidateQueries('get-albums' as InvalidateQueryFilters);
  };

  const { data: users = [] } = useQuery<IUser[] | null>({
    queryKey: ['get-users'],
    queryFn: async () => {
      const userData = await usersAPI.getUsers();
      return userData || [];
    }
  });

  useEffect(() => {
    if (users) {
      setUsersList(users);
    }
  }, [users]);

  const { data: albums = [] } = useQuery<TAlbum[]>({
    queryKey: ['get-albums'],
    queryFn: async () => {
      if (clickedUserId) {
        const albumData = await usersAPI.getAlbums(clickedUserId);
        return albumData || [];
      }
      return [];
    }
  });

  useEffect(() => {
    if (albums) {
      setAlbumList(albums);
    }
  }, [clickedUserId]);

  return (
    <SectionWrapper>
      {usersList.map(user => (
        <>
          <LineWrapper key={user.id} onClick={() => handleClick(user.id)}>
            <Image src={clickedUserId == user.id ? icClose : icOpen} />

            <UserName>{user.name}</UserName>
          </LineWrapper>

          <AlbumWrapper>
            {clickedUserId === user.id && (
              <AlbumComponent albums={albumList}></AlbumComponent>
            )}
          </AlbumWrapper>
        </>
      ))}
    </SectionWrapper>
  );
};

export default UserComponent;

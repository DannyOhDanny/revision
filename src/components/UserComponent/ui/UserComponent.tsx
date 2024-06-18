import { useState, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { InvalidateQueryFilters } from '@tanstack/react-query';

import { AlbumComponent } from '../../AlbumComponent/index.ts';

import usersAPI from '../api/api.ts';

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
  const [clickedUserId, setClickedUserId] = useState<string | null>('');
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [albumList, setAlbumList] = useState<TAlbum[]>([]);
  const queryClient = useQueryClient();

  const handleClick = (userId: string) => {
    setClickedUserId(clickedUserId === userId ? null : userId);
    queryClient.invalidateQueries('get-albums' as InvalidateQueryFilters);
  };

  const { isLoading: isUsersLoading, data: users = [] } = useQuery<
    IUser[] | null
  >({
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

  const { isLoading: isAlbumsLoading, data: albums = [] } = useQuery<TAlbum[]>({
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

  const isLoading = isAlbumsLoading || isUsersLoading;
  return (
    <SectionWrapper>
      {usersList.map(user => (
        <>
          <LineWrapper key={user.id} onClick={() => handleClick(user.id)}>
            <Image src={clickedUserId === user.id ? icClose : icOpen} />

            <UserName>{user.name}</UserName>
          </LineWrapper>

          <AlbumWrapper>
            {clickedUserId === user.id && !isLoading && (
              <AlbumComponent albums={albumList}></AlbumComponent>
            )}
          </AlbumWrapper>
        </>
      ))}
    </SectionWrapper>
  );
};

export default UserComponent;

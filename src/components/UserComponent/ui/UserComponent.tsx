import { useState, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { InvalidateQueryFilters } from '@tanstack/react-query';

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
} from './styled.ts';

import icOpen from '../../../assets/ic_open.svg';
import icClose from '../../../assets/ic_close.svg';

const UserComponent = () => {
  const queryClient = useQueryClient();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [albumList, setAlbumList] = useState<TAlbum[]>([]);

  const handleClick = (userId: string) => {
    setSelectedUserId(userId);
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
    queryKey: ['get-albums', selectedUserId],
    queryFn: async () => {
      if (selectedUserId) {
        const albumData = await usersAPI.getAlbums(selectedUserId);
        return albumData || [];
      }
      return [];
    },
    enabled: !!selectedUserId
  });

  useEffect(() => {
    if (albums && selectedUserId) {
      setAlbumList(albums);
    }
  }, [albums, selectedUserId]);

  //console.log(selectedUserId, albumList, 'USER-ALBUM');

  return (
    <SectionWrapper>
      {usersList.map(user => (
        <div key={user.id}>
          <LineWrapper onClick={() => handleClick(user.id)}>
            <Image src={selectedUserId === user.id ? icClose : icOpen} />
            <UserName>{user.name}</UserName>
          </LineWrapper>

          <AlbumWrapper>
            {selectedUserId === user.id && albumList && (
              <AlbumComponent albums={albumList}></AlbumComponent>
            )}

            {selectedUserId === user.id &&
              albumList &&
              albumList.length === 0 && <p>Loading...</p>}
          </AlbumWrapper>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default UserComponent;

import React, { memo, useEffect, useState, useCallback } from 'react';
import firebase from 'firebase';
import { useQuery } from '@apollo/client';

import { GET_STORES } from 'graphql/queries';

import logo from 'assets/lightLogo.svg';
import Categories from './components/Categories';
import Item from './components/Item';
import { useDebouncedEffect } from 'helpers/debounce';

import {
  Content,
  Header,
  HeaderContent,
  ItemsRow,
  Logo,
  HeaderText,
  Search,
  SearchInput,
  SearchIcon,
  StoreText,
  LoaderContent,
  Loader,
  HeaderView,
} from './styles';

const Home = memo(({ history }) => {
  const [search, setSearch] = useState('');
  const [userName, setUserName] = useState('');
  // const [getDog, { loading, data }] = useLazyQuery(GET_STORES, {O});

  const { data, loading } = useQuery(GET_STORES);

  const stores = data?.merchants ?? [];

  useDebouncedEffect(() => console.log(search), 500, [search]);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => setUserName(user?.displayName ?? ''));
  }, []);

  const signOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('token');
        history.push('/login');
      });

  const renderHeaderText = () =>
    userName ? (
      <HeaderView onClick={signOut}>
        <HeaderText>Bem vindo,</HeaderText>
        <HeaderText>{userName}</HeaderText>
      </HeaderView>
    ) : null;

  const renderStores = useCallback(
    () => stores.map(item => <Item key={item.id} data={item} />),
    [stores],
  );

  const renderContent = useCallback(
    () =>
      loading ? (
        <LoaderContent>
          <Loader />
        </LoaderContent>
      ) : (
        renderStores()
      ),
    [loading, renderStores],
  );

  return (
    <>
      <Header>
        <HeaderContent>
          <ItemsRow>
            <Logo src={logo} />

            {renderHeaderText()}
          </ItemsRow>
        </HeaderContent>
      </Header>

      <Content>
        <Search>
          <SearchInput
            type="text"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="O que você está procurando?"
          />

          <SearchIcon />
        </Search>

        <Categories />

        <StoreText>Lojas</StoreText>

        {renderContent()}
      </Content>
    </>
  );
});

export default Home;

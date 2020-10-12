import React, { memo, useEffect, useState, useCallback } from 'react';
import firebase from 'firebase';
import { useQuery } from '@apollo/client';

import { GET_STORES } from 'graphql/queries';

import logo from 'assets/lightLogo.svg';
import Categories from './components/Categories';
import Item from './components/Item';

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
} from './styles';

const Home = memo(() => {
  const [search, setSearch] = useState('');
  const [userName, setUserName] = useState('');

  const { data, loading } = useQuery(GET_STORES, {
    options: {
      context: {
        headers: {
          'X-Hasura-Role': 'salesman',
        },
      },
    },
  });

  const stores = data?.merchants ?? [];

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUserName(user.displayName));
  }, []);

  const renderHeaderText = () =>
    userName ? (
      <HeaderText>
        Bem vindo,
        <br />
        {userName}
      </HeaderText>
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
    [loading],
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

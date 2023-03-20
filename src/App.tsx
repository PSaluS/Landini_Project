import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import getAllCartsRequest from './API/getAllCarts';
import CartDiv from './components/cart';
import FlexDiv from './components/flexDiv';
import Theme from './style/theme';
import { cartI, requestParamI } from './types';

const requestParamInit = {
  skip: 0,
  total: 0,
  limit: 0,
  pages: [],
};

function App() {
  const [page, setPage] = useState<number>(0);
  const [carts, setCarts] = useState<undefined | cartI[]>();
  const [apiError, setApiError] = useState<undefined | string>(undefined);
  const [requestParam, setRequestParam] =
    useState<requestParamI>(requestParamInit);

  useEffect(() => {
    getAllCartsRequest(setCarts, setApiError, setRequestParam);
  }, [page]);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <FlexDiv>
          {carts === undefined && apiError === undefined ? (
            <p>Loading...</p>
          ) : null}
          {carts !== undefined && !apiError && carts.length > 0 ? (
            carts.map((element) => (
              <CartDiv key={element.id}>Cart: {element.id}</CartDiv>
            ))
          ) : (
            <p>{apiError}</p>
          )}
        </FlexDiv>
        {requestParam && requestParam.pages.length > 1
          ? requestParam.pages.map((element) => ` ${element} `)
          : null}
      </>
    </ThemeProvider>
  );
}

export default App;

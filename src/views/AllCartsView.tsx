import { useState, useEffect } from 'react';
import AddCart from '../API/addCart';
import getAllCartsRequest from '../API/getAllCarts';
import AddButton from '../components/atoms/buttons/addButton';
import FlexCartsDiv from '../components/atoms/carts/flexCartsDiv';
import Cart from '../components/molecules/cart/cart';
import CartsNav from '../components/molecules/cartsNav/cartsNav';
import ErrorMess from '../components/molecules/errorMess/errorMess';
import { cartI, requestParamI } from '../types';

interface allCartsViewI {
  carts: undefined | cartI[];
  setCarts: React.Dispatch<React.SetStateAction<cartI[] | undefined>>;
  setSelect: React.Dispatch<React.SetStateAction<cartI | undefined>>;
}

const requestParamInit = {
  skip: 0,
  total: 0,
  limit: 0,
  pages: [],
};

const AllCartsView = ({ carts, setCarts, setSelect }: allCartsViewI) => {
  const [page, setPage] = useState<number>(0);
  const [apiError, setApiError] = useState<undefined | string>(undefined);
  const [requestParam, setRequestParam] =
    useState<requestParamI>(requestParamInit);

  const addLocalCart = (cart: cartI) => {
    if (carts) setCarts([...carts, cart]);
  };

  useEffect(() => {
    getAllCartsRequest(setCarts, setApiError, setRequestParam, page);
  }, [page, setCarts]);

  return (
    <>
      {apiError ? <ErrorMess mess={apiError} setError={setApiError} /> : null}
      <FlexCartsDiv>
        {carts === undefined && apiError === undefined ? (
          <p>Loading...</p>
        ) : null}
        {carts !== undefined && !apiError && carts.length > 0
          ? carts.map((element) => (
              <Cart
                element={element}
                carts={carts}
                setCarts={setCarts}
                setSelect={setSelect}
                setApiError={setApiError}
              />
            ))
          : null}
        <CartsNav requestParam={requestParam} page={page} setPage={setPage} />
        <AddButton onClick={() => AddCart(setApiError, addLocalCart)}>
          Add Cart +
        </AddButton>
      </FlexCartsDiv>
    </>
  );
};

export default AllCartsView;

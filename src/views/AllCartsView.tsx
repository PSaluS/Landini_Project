import { useState, useEffect } from 'react';
import styled from 'styled-components';
import getAllCartsRequest from '../API/getAllCarts';
import AddButton from '../components/atoms/buttons/addButton';
import DetailButton from '../components/atoms/buttons/detailButton';
import RemoveButton from '../components/atoms/buttons/removeButton';
import CartDiv from '../components/cart';
import FlexCartsDiv from '../components/flexCartsDiv';
import NavP from '../components/navP';
import { cartI, requestParamI } from '../types';

interface allCartsViewI {
  carts: undefined | cartI[];
  setCarts: React.Dispatch<React.SetStateAction<cartI[] | undefined>>;
  setSelect: React.Dispatch<React.SetStateAction<cartI | undefined>>;
}

const NavRaw = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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

  useEffect(() => {
    getAllCartsRequest(setCarts, setApiError, setRequestParam, page);
  }, [page, setCarts]);

  return (
    <>
      <FlexCartsDiv>
        {carts === undefined && apiError === undefined ? (
          <p>Loading...</p>
        ) : null}
        {carts !== undefined && !apiError && carts.length > 0 ? (
          carts.map((element) => (
            <CartDiv key={element.id}>
              Cart: {element.id}
              <DetailButton onClick={() => setSelect(element)}>
                Details
              </DetailButton>
              <RemoveButton
                onClick={() =>
                  setCarts(carts.filter((cart) => cart.id !== element.id))
                }
              >
                Remove Cart
              </RemoveButton>
            </CartDiv>
          ))
        ) : (
          <p>{apiError}</p>
        )}
        {/* <AddButton>Add Cart +</AddButton> */}
        <NavRaw>
          {requestParam && requestParam.pages.length > 1
            ? requestParam.pages.map((element) => {
                if (element - 1 === page)
                  return (
                    <div key={`navPages: ${element}`}>
                      <NavP here>{element}</NavP>
                    </div>
                  );
                else
                  return (
                    <div
                      key={`navPages: ${element}`}
                      onClick={() => setPage(element - 1)}
                    >
                      <NavP>{element}</NavP>
                    </div>
                  );
              })
            : null}
        </NavRaw>
        <AddButton>Add Cart +</AddButton>
      </FlexCartsDiv>
    </>
  );
};

export default AllCartsView;

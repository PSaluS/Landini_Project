import React, { useEffect, useState } from 'react';

interface product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

interface cart {
  id: number;
  products: product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

function App() {
  const [carts, setCarts] = useState<undefined | cart[]>();
  const [apiError, setApiError] = useState<undefined | string>(undefined);
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((result) => {
        setApiError(undefined);
        setCarts(result.carts);
      })
      .catch((err) => {
        if (err) setApiError('API request for carts fail!');
      });
  }, []);
  return (
    <>
      {carts !== undefined &&
      !apiError &&
      carts !== null &&
      carts.length > 0 ? (
        carts.map((element) => (
          <div key={element.id}>
            {' '}
            <p> {element.id} </p>
          </div>
        ))
      ) : (
        <p>{apiError}</p>
      )}
    </>
  );
}

export default App;

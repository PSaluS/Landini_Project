import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/globalStyle';
import Theme from './style/theme';
import { cartI } from './types';
import AllCartsView from './views/AllCartsView';
import DetailView from './views/DetailView';

function App() {
  const [carts, setCarts] = useState<undefined | cartI[]>();
  const [select, setSelect] = useState<cartI | undefined>();
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {!select ? (
        <AllCartsView carts={carts} setCarts={setCarts} setSelect={setSelect} />
      ) : (
        <DetailView setSelect={setSelect} select={select} />
      )}
    </ThemeProvider>
  );
}

export default App;

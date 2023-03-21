import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/globalStyle';
import Theme from './style/theme';
import { cartI } from './types';
import AllCartsView from './views/AllCartsView';

function App() {
  const [carts, setCarts] = useState<undefined | cartI[]>();
  const [select, setSelect] = useState<cartI | undefined>();
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {!select ? (
        <AllCartsView carts={carts} setCarts={setCarts} setSelect={setSelect} />
      ) : (
        <button onClick={() => setSelect(undefined)}>Back</button>
      )}
    </ThemeProvider>
  );
}

export default App;

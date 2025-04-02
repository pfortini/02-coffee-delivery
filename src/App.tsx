import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './components/Router';
import { CartContextProvider } from './contexts/Products';
import { CheckoutContextProvider } from './contexts/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CartContextProvider>
            <CheckoutContextProvider>
              <Router />
            </CheckoutContextProvider>
          </CartContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

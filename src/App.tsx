import { lazy, Suspense } from 'react';

import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import useTheme from './hooks/useTheme';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Main = lazy(() => import('./views/Main'));

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className='content'>
        <Header />
        <main>
          <Suspense fallback={null}>
            <Main />
          </Suspense>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;

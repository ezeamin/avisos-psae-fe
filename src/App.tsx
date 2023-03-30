import { lazy, Suspense } from "react";

import { Container } from "@mui/material";

import Footer from "./components/Footer";

const Main = lazy(() => import("./views/Main"));

const App = () => {
  return (
    <Container className="content">
      <main>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default App;

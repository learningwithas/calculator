import Container from "./Components/Container";
import Heading from "./Components/Heading";
import ShowResult from "./Components/ShowResult";
import InputButton from "./Components/InputButton";
import StoreContextProvider from "./Store/StoreContextProvider";

const App = () => {
  return (
    <>
      <StoreContextProvider>
        <Container>
          <Heading />
          <ShowResult />
          <InputButton />
        </Container>
      </StoreContextProvider>
    </>
  );
};

export default App;

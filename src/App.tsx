import "./App.css";
import GlobalContextProvider from "./context/GlobalContextProvider";
import Game from "./pages/Game";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="app">
        <Game />
      </div>
    </GlobalContextProvider>
  );
};

export default App;

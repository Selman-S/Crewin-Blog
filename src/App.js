import OpenContextProvider from "./context/OpenContext";
import AppRouter from "./router/AppRouter";
import  './scss/App.scss';

function App() {
  return (
    <div className="container" >
      <OpenContextProvider>

     <AppRouter />
      </OpenContextProvider>
    </div>
  );
}

export default App;

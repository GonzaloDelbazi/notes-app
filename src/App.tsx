import { store } from "./redux/store";
import { Provider } from "react-redux";
import Rutas  from "./routes/routes"
import { BrowserRouter} from "react-router-dom";



const App = () => {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <Rutas />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;

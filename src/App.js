import './App.css';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Home from "./components/home.js";
import Cart from "./components/cart.js";

import {Provider} from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cart/>
        <Header/>
        <Home/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;

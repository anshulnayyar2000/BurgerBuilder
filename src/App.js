import "./App.css";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import OrdersModal from "./Container/OrdersModal/OrdersModal";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
            <Switch>
              <Route path="/Checkout" component={Checkout} />
              <Route path="/orders" component={OrdersModal} />
              <Route path="/" component={BurgerBuilder} />
              
            </Switch>
          </Layout>
        {/* <BrowserRouter>
            <Routes>
              <Route path="/">
                <BurgerBuilder />
              </Route>
              <Route path="/Checkout">
                <Checkout />
              </Route>
            </Routes>
          </BrowserRouter> */}
      </div>
    );
  }
}
export default App;

import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import SuccessOrder from "./pages/SuccessOrder";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ backgroundColor: "rgb(238, 238, 238)" }}>
      <header>
        <Nav></Nav>
      </header>
      <main className="content">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/book-store-ts" exact component={Home}></Route>
          <Route path="/book-store-ts/store" exact component={Store}></Route>
          <Route path="/book-store-ts/cart" exact component={Cart}></Route>
          <Route
            path="/book-store-ts/store/:slug"
            exact
            component={SingleProduct}
          ></Route>
          <Route
            path="/book-store-ts/cart/success"
            exact
            component={SuccessOrder}
          ></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

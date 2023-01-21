import React from "react";
import "../src/styles/App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Cart from "../src/pages/Cart";
import store from "../src/store/store";

import Header from "../src/layout/Header/header/Header";
import Footer from "../src/layout/Footer/Footer";
import Login from "../src/components/Login/LoginPage/LoginPage";
import Orders from "../src/components/Order.js/Orders";
import Profile from "../src/components/Profile/Profile";
import Checkout from "../src/components/Checkout/Checkout";
import Signupform from "../src/components/Signupform/Signupform";

const App = () => {
  return (
    <div id="main">
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={[<Header />, <Home />, ]} />
              <Route
                path="/cart"
                element={[<Header />, <Cart />, ]}
              />
              <Route path="/Login" element={[<Login />]}>
                {" "}
              </Route>
              <Route path="/Signup" element={[<Header />, <Signupform />]}>
                {" "}
              </Route>{" "}
              <Route
                path="/Orders"
                element={[<Header />, <Orders />, ]}
              />{" "}
              <Route path="/Profile" element={[<Header />, <Profile />]}>
                {" "}
              </Route>{" "}
              <Route
                path="/Checkout/:id"
                element={[<Header />, <Checkout />, ]}
              />{" "}
              <Route
                path="/Cart/Checkout/:id"
                element={[<Header />, <Checkout />, ]}
              />{" "}
            </Routes>{" "}
          </BrowserRouter>{" "}
        </div>{" "}
      </Provider>
    </div>
  );
};

export default App;

// ============================================================


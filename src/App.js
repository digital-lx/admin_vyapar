import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Generator from "./constant/DataGenerator";
import Product from "./pages/product";
import User from "./pages/users";
import Vendor from "./pages/vendor";
import logo from "./assets/university_bg_s.jpg";

/**TODO----
 * 1.CREATE FAKE SAMPLE DATA OF USER,VENDOR ,PRODUCT;(JS)
 * 2.CREATE A FORM CONTAINING INPUT OR RELEVANT COMPONENT
 * 3.LIST OF ALL THE DATA - PAGINATION
 * 4.
 * 5.
 */
function App() {
  return (
    <div className="parent">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">user</Link>
              </li>
              <li>
                <Link to="/product">product</Link>
              </li>
              <li>
                <Link to="/vendor">vendor</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/vendor">
              <Vendor />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/">
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

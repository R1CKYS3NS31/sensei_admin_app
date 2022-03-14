import "./App.css";
import Home from "./components/views/pages/home/Home";
import SideBar from "./components/views/sidebar/SideBar";
import Topbar from "./components/views/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/views/pages/userList/UserList";
import { productRows, userRows } from "./components/model/DummyData";
import User from "./components/views/pages/user/User";
import NewUser from "./components/views/pages/newUser/NewUser";
import ProductList from "./components/views/pages/productList/ProductList";
import Product from "./components/views/pages/product/Product";
import NewProduct from "./components/views/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          {/* user */}
          <Route path={"/users"}>
            <UserList rows={userRows} />
          </Route>
          <Route path={"/newUser"}>
            <NewUser />
          </Route>
          <Route path={"/user/:userId"}>
            <User />
          </Route>
          {/* product */}
          <Route path={"/products"}>
            <ProductList rows={productRows} />
          </Route>
          <Route path={"/newProduct"}>
            <NewProduct />
          </Route>
          <Route path={"/product/:productId"}>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

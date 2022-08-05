import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from "./components/views/pages/home/Home";
import SideBar from "./components/views/sidebar/SideBar";
import Topbar from "./components/views/topbar/Topbar";
import UserList from "./components/views/pages/userList/UserList";
import { productRows } from "./components/model/DummyData";
import User from "./components/views/pages/user/User";
import NewUser from "./components/views/pages/newUser/NewUser";
import ProductList from "./components/views/pages/productList/ProductList";
import Product from "./components/views/pages/product/Product";
import NewProduct from "./components/views/pages/newProduct/NewProduct";
import { useEffect, useState } from "react";

function App() {
  // USERS
  // fetch users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const usersData = res.json();
    // console.log(usersData);
    return usersData
  };

  console.log(users);
  

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
            <UserList users={users} />
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

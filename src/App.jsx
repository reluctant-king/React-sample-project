import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";
import Dashboard from "./pages/Dashboard";
import AddGroceries from "./components/Groceries/Addgroceries";
import GroceryListing from "./components/Groceries/Grocery";
import AddProducts from "./components/Products/Addproducts";
import ProductListing from "./components/Products/Products";
import EditUser from "./components/Users/EditUser";
import Users from "./components/Users/User";
import ResetPwd from "./components/Users/ResetPswd";
import SignIn from "./components/Users/SignIn";
import SignOut from "./components/Users/Signout";
import AddUser from "./components/Users/AddUser";

// Import pages


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />}>
          {/* child pages */}
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="products" element={<ProductListing />} />

          <Route path="users" element={<Users />} />
          <Route path="addusers" element={<AddUser />} />
          <Route path="editusers/:id" element={<EditUser />} />

          <Route path="resetpassword" element={<ResetPwd />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />

          <Route path="addgroceries" element={<AddGroceries />} />
          <Route path="groceries" element={<GroceryListing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

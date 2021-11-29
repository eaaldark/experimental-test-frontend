import { Fragment } from "react";
import "./App.scss";
import "./config";
import Buttom from "./components/Buttom";
import User from "./pages/User";
import UserList from "./pages/UserList";
import UserAdd from "./pages/UserAdd";
import UserDelete from "./pages/UserDelete";
import UserUpdate from "./pages/UserUpdate";
import { Route, Routes } from "react-router";

const App = () => (
  <Fragment>
    <Routes>
      <Route path="/" element={<Buttom />} />
      <Route path="/getitem" element={<User />}/>
      <Route path="/get" element={<UserList />}/>
      <Route path="/insert" element={<UserAdd />}/>
      <Route path="/delete" element={<UserDelete />}/>
      <Route path="/update" element={<UserUpdate />}/>
    </Routes>
  </Fragment>
);

export default App;

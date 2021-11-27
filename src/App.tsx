import { Fragment } from "react";
import "./App.scss";
import "./config";
import Buttom from "./components/Buttom";
import { Route, Routes } from "react-router";

const App = () => (
  <Fragment>
    <Routes>
      <Route path="/" element={<Buttom />} />
    </Routes>
  </Fragment>
);

export default App;

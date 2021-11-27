import AddUser from "../images/AddUser.png";
import ListUser from "../images/ListUser.png";
import RemoveUser from "../images/RemoveUser.png";
import EditUser from "../images/EditUser.png";
import User from "../images/User.png";
import "../styles/Buttom.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Buttom = () => (
  <Fragment>
    <div className="container">
      <div className="row">
        <Link to="/getitem" className="col">
          <img src={User} className="home-buttoms" alt="exercise" />
        </Link>
        <Link to="/get" className="col">
          <img src={ListUser} className="home-buttoms" alt="exercise" />
        </Link>
        <Link to="/insert" className="col">
          <img src={AddUser} className="home-buttoms" alt="exercise" />
        </Link>
        <Link to="/delete" className="col">
          <img src={RemoveUser} className="home-buttoms" alt="exercise" />
        </Link>
        <Link to="/update" className="col">
          <img src={EditUser} className="home-buttoms" alt="exercise" />
        </Link>
      </div>
    </div>
  </Fragment>
);

export default Buttom;

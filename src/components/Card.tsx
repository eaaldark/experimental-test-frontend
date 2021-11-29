import { Fragment } from "react";
import { ICard } from "../interfaces/CardInterface";

const Card = ({
  id,
  firtsname,
  middlename,
  lastname,
  phonenumber,
  birthday,
  email,
}: ICard) => (
  <Fragment>
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {firtsname} {middlename} {lastname}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Identificador: {id}</h6>
        <p className="card-text">
          Contacto del usuario para mas informacion {phonenumber} {email} ademas
          nacio el {birthday}
        </p>
        <a href="/#" className="card-link">
          Card link
        </a>
        <a href="/#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  </Fragment>
);

export default Card
import { Fragment } from "react";
import Card from "./Card";

const CardList = ({ data }: any) => (
  <Fragment>
    {data.map((users: any) => (
      <Card
        key={users.id}
        {...users}

        // title={exercise.title}
        // description={exercise.description}
        // img={exercise.img}
        // leftColor={exercise.leftColor}
        // rightColor={exercise.rightColor}
      />
    ))}
  </Fragment>
);

export default CardList;

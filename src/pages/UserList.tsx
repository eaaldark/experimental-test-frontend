import CardList from "../components/CardList";
import useFetch from "../hooks/useFetchUsers";

const UserList = () => {
  const { data } = useFetch(`http://localhost:8080/get`);
  return (
      <CardList data={data} />
  );
};

export default UserList;

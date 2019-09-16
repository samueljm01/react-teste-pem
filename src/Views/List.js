import React, { useState, useEffect } from "react";
import ListItems from "../Components/ListItems";
import { withRouter } from "react-router-dom";
import Title from "../Components/Title";
import { getUsers, deleteUser } from "../Actions/Users";
import Button from "../Components/Button";

const List = props => {
  const [users, setUsers] = useState([]);

  const initAsync = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const onDelete = async id => {
    await deleteUser(id);
    alert("Usuario deletado.");
    setUsers([
        ...users.filter(e => e.id !== id)
    ])
  };

  useEffect(() => {
    initAsync();
  }, []);

  return (
    <>
      <Title title="Usuários" />
      <Button onClick={() => props.history.push("/novo")} color="blue">
        Novo
      </Button>
      <ListItems items={users} onDelete={onDelete} />
    </>
  );
};

export default withRouter(List);

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Label from "../Components/Label";
import { getUserById } from "../Actions/Users";
import Button from "../Components/Button";
import { editUser, createUser } from "../Actions/Users";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
};

toast.configure()

const Edit = ({ match }) => {
  const notify = (text) => toast(text);

  const [user, setUser] = useState({ ...initialState });

  const initAsync = async () => {
    const { data } = await getUserById(match.params.id);
    setUser({ ...data });
  };

  const handleAddress = ({ name, value }) =>
    setUser({
      ...user,
      address: {
        ...user.address,
        [name]: value
      }
    });

  const handleInfo = ({ name, value }) =>
    setUser({
      ...user,
      [name]: value
    });

  const handleCompany = ({ name, value }) =>
    setUser({
      ...user,
      company: {
        ...user.company,
        [name]: value
      }
    });

  const onSave = async () => {
    if (user.id > 0) {
      await editUser(user.id, user);
      notify('Usuario editado!')
    } else {
      await createUser(user);
      notify('Usuario criado!')
    }
  };

  useEffect(() => {
    if (match.params.id) {
      initAsync();
    }
  }, []);

  return (
    <>
      <Title title="Detalhes" />
      <form>
        <div>
          <Label>Nome: </Label>
          <Input
            name="name"
            value={user.name}
            onChange={({ target }) => handleInfo(target)}
          />
        </div>
        <div>
          <Label>Usuário: </Label>
          <Input
            name="username"
            value={user.username}
            onChange={({ target }) => handleInfo(target)}
          />
        </div>
        <div>
          <Label>Email: </Label>
          <Input
            name="email"
            value={user.email}
            onChange={({ target }) => handleInfo(target)}
          />
        </div>
        <div>
          <Label>Telefone: </Label>
          <Input
            name="phone"
            value={user.phone}
            onChange={({ target }) => handleInfo(target)}
          />
        </div>
        <div>
          <Label>Site: </Label>
          <Input
            name="website"
            value={user.website}
            onChange={({ target }) => handleInfo(target)}
          />
        </div>

        <Title title="Endereço" />
        <div>
          <Label>Rua: </Label>
          <Input
            name="street"
            value={user.address.street}
            onChange={({ target }) => handleAddress(target)}
          />
        </div>
        <div>
          <Label>Cidade: </Label>
          <Input
            name="city"
            value={user.address.city}
            onChange={({ target }) => handleAddress(target)}
          />
        </div>
        <div>
          <Label>CEP: </Label>
          <Input
            name="zipcode"
            value={user.address.zipcode}
            onChange={({ target }) => handleAddress(target)}
          />
        </div>

        <Title title="Empresa" />
        <div>
          <Label>Nome: </Label>
          <Input
            name="name"
            value={user.company.name}
            onChange={({ target }) => handleCompany(target)}
          />
        </div>
        <div>
          <Label>Frase: </Label>
          <Input
            name="catchPhrase"
            value={user.company.catchPhrase}
            onChange={({ target }) => handleCompany(target)}
          />
        </div>
        <div>
          <Label>BS: </Label>
          <Input
            name="bs"
            value={user.company.bs}
            onChange={({ target }) => handleCompany(target)}
          />
        </div>
        <hr />
        <Button color="blue" onClick={onSave}>
          {user.id === 0 ? 'Criar' : 'Salvar'}
        </Button>
      </form>
    </>
  );
};

export default withRouter(Edit);

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Loading from "./Loading"

const Wrapper = styled.ul`
  padding: 0;
  margin: 1em 0;
`;

const Item = styled.li`
  list-style: none;
  margin: 1em 0;
  width: 100%;
`;

const ItemInfo = styled.span`
  margin-right: 0.5em;
  min-width: 20%;
  display: inline-block;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: #1d9dea;
  margin-right: 20px;
`;

export default ({ items, onDelete }) => {
  return (
    <Wrapper>
      {items.length === 0 ? (
        <Loading color="red" type="spin"/>
        ) : (
        items.map((item, index) => {
          return (
            <Item key={index}>
              <ItemInfo>{item.name}</ItemInfo>
              <ItemInfo>{item.email}</ItemInfo>
              <ItemInfo>{item.website}</ItemInfo>
              <ItemInfo>
                <LinkTo to={`/novo/${item.id}`}>Editar</LinkTo>
                <Button onClick={() => onDelete(item.id)}>Deletar</Button>
              </ItemInfo>
            </Item>
          );
        })
      )}
    </Wrapper>
  );
};

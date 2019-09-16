import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  color: #444;
  background: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: inline-block;
  width: 80%;
  padding: 10px;
`;

const Input = props => {
  return <InputStyled {...props} />;
};

export default Input;

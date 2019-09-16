import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: sans-serif;
  color: #555;
  display: block;
  padding-bottom: .5em;
  margin: 20px 0 20px;
  border-bottom: 1px solid #eee;
`;

export default ({ title }) => <Title>{title}</Title>;

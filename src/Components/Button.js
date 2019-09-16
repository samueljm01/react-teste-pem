import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
    border: 0;
    color: white;
    background: ${({ color }) => {
        if (color === 'blue') return '#2f73d9';
        else return '#e25050'
    }};
    border-radius: 6px;
    padding: .5em;
    cursor: pointer;
`

export default props => {
  return (
    <ButtonStyled type="button" {...props}>
      {props.children}
    </ButtonStyled>
  );
};

import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  background: ${(props) => (props.disabled ? "#5586A4" : "#0c3e5d")};
  display: inline-block;
  border-radius: 5px;
  padding: 10px 0;
  margin: 15px;
  width 150px;
  border: none;
  color: #fff;
  font-size: 12px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

const Button = ({ title, actionHandler, disabled = false }) => {
  return (
    <CustomButton onClick={actionHandler} disabled={disabled}>
      {title}
    </CustomButton>
  );
};

export default Button;

import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px 0px;
  background: #fff;
  color: #C3783E;
  border: 2px solid #fff;
  font-size: 20px;
  font-weight: 600;
`;

const TitleBox = ({ message }) => {
  return <Box>{message}</Box>;
};

export default TitleBox;
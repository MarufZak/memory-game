import React from 'react';
import styled from 'styled-components';

const ModalContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  max-width: 655px;
  width: 100%;
  padding: 50px 55px 70px 55px;
  border-radius: 20px;
  background-color: var(--color-gray-300);
`;

export default ModalContent;

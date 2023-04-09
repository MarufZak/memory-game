import React from 'react';
import styled from 'styled-components';
import ModalContent from './ModalContent';

const Modal = ({ children,...props }) => {
  return (
    <Wrapper {...props}>
      <div className="overlap"></div>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlap {
    position: absolute;
    inset: 0;
    background-color: var(--color-black-500);
  }
`;

Modal.Content = ModalContent;
export default Modal;

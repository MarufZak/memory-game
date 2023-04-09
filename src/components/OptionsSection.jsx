import React from 'react';
import styled from 'styled-components';
import Option from './Option';

const OptionsSection = ({ title, children, ...props }) => {
  return (
    <Wrapper>
      <h3 className="title">{title}</h3>
      <div className="options" {...props}>
        {children}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    font-size: 2rem;
    color: var(--color-gray-blue-500);
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  .options {
    display: flex;
    gap: 30px;
    margin-bottom: 32px;
  }
`;

OptionsSection.Option = Option;
export default OptionsSection;

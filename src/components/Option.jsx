import React from 'react';
import styled from 'styled-components';

const BaseOption = styled.button`
  cursor: pointer;
  padding: 11px 0 9px 0;
  width: 100%;
  border-radius: 26px;
  font-size: 2.6rem;
  color: var(--color-gray-100);
  text-transform: capitalize;
`;

const OptionIdle = styled(BaseOption)`
  background-color: var(--color-gray-blue-300);

  :hover {
    background-color: var(--color-blue-400);
  }
`;

const OptionActive = styled(BaseOption)`
  background-color: var(--color-gray-blue-700);
`;

const options = {
  idle: OptionIdle,
  active: OptionActive,
};

const optionsKeys = Object.keys(options);

const Option = ({ children, state = 'idle', ...props }) => {
  if (!optionsKeys.includes(state)) {
    console.error(`Incorrect state for Option: ${state}, expected: ${optionsKeys}`);
  }

  const Tag = options[state];

  return <Tag {...props}>{children}</Tag>;
};

export default Option;

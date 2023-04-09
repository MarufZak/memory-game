import React from 'react';
import styled from 'styled-components';

const BaseTile = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  font-size: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
`;

const TileIdle = styled(BaseTile)`
  color: transparent;
  background-color: var(--color-gray-blue-700);

  :hover {
    background-color: var(--color-blue-400);
  }
`;

const TileSelected = styled(BaseTile)`
  color: var(--color-gray-100);
  background-color: var(--color-yellow-500);
`;

const TileFound = styled(BaseTile)`
  color: var(--color-gray-100);
  background-color: var(--color-gray-blue-300);
`;

const options = {
  idle: TileIdle,
  selected: TileSelected,
  found: TileFound,
};
const optionsKeys = Object.keys(options);

const GameTile = ({ title, state = 'idle', ...props }) => {
  if (!optionsKeys.includes(state)) {
    console.error(`Incorrect state for GameTile: ${state}, expected ${optionsKeys}`);
  }

  const Title = typeof title === 'function' ? title : null;

  const Tag = options[state];
  const isTileDisabled = state === 'selected' || state === 'found';
  return (
    <Tag disabled={isTileDisabled} {...props}>
      {Title ? <Title /> : title}
    </Tag>
  );
};

export default GameTile;

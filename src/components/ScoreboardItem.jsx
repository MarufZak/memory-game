import React from 'react';
import styled from 'styled-components';

const BaseItem = styled.li`
  width: 205px;
  padding: 9px 18px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .value {
    font-size: 3.2rem;
  }

  margin-top: 32px;
`;

const ItemIdle = styled(BaseItem)`
  background-color: var(--color-gray-200);

  .title {
    color: var(--color-gray-blue-500);
  }

  .value {
    color: var(--color-gray-blue-700);
  }
`;

const ItemActive = styled(BaseItem)`
  background-color: var(--color-yellow-500);
  position: relative;

  ::before {
    content: '';
    width: 18px;
    height: 18px;
    background-color: var(--color-yellow-500);
    transform: rotate(45deg) translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0;
  }

  ::after {
    content: 'CURRENT TURN';
    width: 100%;
    font-size: 1.3rem;
    color: var(--color-gray-blue-900);
    letter-spacing: 5px;
    position: absolute;
    text-align: center;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .title,
  .value {
    color: var(--color-gray-100);
  }
`;

const options = {
  idle: ItemIdle,
  active: ItemActive,
};

const optionsKeys = Object.keys(options);

const ScoreboardItem = ({ title, value, state = 'idle' }) => {
  if (!optionsKeys.includes(state)) {
    console.error(
      `Incorrect state for ScoreboardItem: ${state}, expected ${optionsKeys}`
    );
  }

  const Tag = options[state];

  return (
    <Tag>
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </Tag>
  );
};

export default ScoreboardItem;

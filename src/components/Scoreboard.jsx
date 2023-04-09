import React from 'react';
import styled from 'styled-components';
import ScoreboardItem from './ScoreboardItem';

const Scoreboard = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

Scoreboard.Item = ScoreboardItem;

export default Scoreboard;

import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import MultiplayerModal from './MultiplayerModal';
import Scoreboard from './Scoreboard';

const MultiplayerScoreboard = ({
  players,
  currentUser,
  foundTiles,
  tilesNumber,
}) => {
  return (
    <Wrapper>
      {players.map((item) => {
        const itemState = currentUser === item.id ? 'active' : 'idle';
        const itemTitle = `Player ${item.id}`;
        return (
          <Scoreboard.Item
            key={item.id}
            title={itemTitle}
            value={item.guessed}
            state={itemState}
          />
        );
      })}
      {foundTiles.length >= tilesNumber / 2 && (
        <MultiplayerModal players={players} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Scoreboard)`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
`;

export default MultiplayerScoreboard;

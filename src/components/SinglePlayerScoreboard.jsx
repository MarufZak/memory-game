import React from 'react';
import styled from 'styled-components';
import { addZero } from '../utils/helpers';
import Scoreboard from './Scoreboard';
import SinglePlayerModal from './SinglePlayerModal';

const SinglePlayerScoreboard = ({ players, foundTiles, tilesNumber }) => {
  const [time, setTime] = React.useState(0);
  const intervalRef = React.useRef();

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (foundTiles.length >= tilesNumber / 2) {
      clearInterval(intervalRef.current);
    }
  }, [foundTiles]);

  const minutes = Math.floor(time / 60);
  const seconds = addZero(time - minutes * 60);
  const timeValue = `${minutes}:${seconds}`;
  return (
    <Wrapper>
      <Scoreboard.Item title="Time" value={timeValue} />
      <Scoreboard.Item title="Moves" value={players[0].moves} />
      {foundTiles.length >= tilesNumber / 2 && (
        <SinglePlayerModal time={timeValue} moves={players[0].moves} />
      )}
      {}
    </Wrapper>
  );
};

const Wrapper = styled(Scoreboard)`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
`;

export default SinglePlayerScoreboard;

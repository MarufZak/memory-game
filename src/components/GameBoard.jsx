import React from 'react';
import { icons } from '../utils/constants';
import styled from 'styled-components';
import { AppContext } from '../App';
import { randomRepeatedRange, range } from '../utils/helpers';
import GameTile from './GameTile';
import MultiplayerScoreboard from './MultiplayerScoreboard';
import SinglePlayerScoreboard from './SinglePlayerScoreboard';
import MultiplayerModal from './MultiplayerModal';
import SinglePlayerModal from './SinglePlayerModal';

const GameBoard = () => {
  const { settings } = React.useContext(AppContext);
  const [firstSelectedTile, setFirstSelectedTile] = React.useState(null);
  const [secondSelectedTile, setSecondSelectedTile] = React.useState(null);
  const [foundTiles, setFoundTiles] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(1);
  const [players, setPlayers] = React.useState(() => {
    return range(1, settings.players + 1).map((item) => ({
      id: item,
      guessed: 0,
      moves: 0,
    }));
  });
  const boardRef = React.useRef();

  const handleClick = (element) => {
    if (firstSelectedTile) {
      const newPlayers = players.map((item) => {
        if (item.id === currentUser) {
          return { ...item, moves: item.moves + 1 };
        }
        return item;
      });
      setPlayers(newPlayers);
      setSecondSelectedTile(element);
      return;
    }

    setFirstSelectedTile(element);
  };

  const nextPlayer = () => {
    if (currentUser >= settings.players) {
      setCurrentUser(1);
      return;
    }

    setCurrentUser(currentUser + 1);
  };

  const tilesNumber = settings.grid === '4x4' ? 16 : 36;
  const tiles = React.useMemo(() => {
    return randomRepeatedRange(tilesNumber / 2).map((item) => {
      // divide by 2 bcs numbers are repeated
      return {
        id: crypto.randomUUID(),
        title: item,
        icon: icons[item],
      };
    });
  }, [settings.grid]);

  React.useEffect(() => {
    if (!firstSelectedTile || !secondSelectedTile) return;

    boardRef.current.style.pointerEvents = 'none';
    const timeout = setTimeout(() => {
      setFirstSelectedTile(null);
      setSecondSelectedTile(null);
    }, 1000);

    return () => {
      if (boardRef.current) {
        boardRef.current.style.pointerEvents = 'all';
      }
      clearTimeout(timeout);
    };
  }, [secondSelectedTile]);

  React.useEffect(() => {
    if (!firstSelectedTile && !secondSelectedTile) return;
    if (firstSelectedTile.title !== secondSelectedTile.title) {
      nextPlayer();
      return;
    }

    const newPlayers = players.map((item) => {
      if (item.id === currentUser) {
        return { ...item, guessed: item.guessed + 1 };
      }
      return item;
    });
    setPlayers(newPlayers);
    setFoundTiles([...foundTiles, firstSelectedTile.title]);
  }, [secondSelectedTile]);

  return (
    <Wrapper ref={boardRef} grid={settings.grid}>
      <div className="board">
        {tiles.map((item) => {
          let tileState = 'idle';
          if (
            firstSelectedTile?.id === item.id ||
            secondSelectedTile?.id === item.id
          ) {
            tileState = 'selected';
          } else if (foundTiles.includes(item.title)) {
            tileState = 'found';
          }
          const title = settings.theme === 'numbers' ? item.title : item.icon;
          return (
            <GameTile
              key={item.id}
              state={tileState}
              title={title}
              onClick={() => handleClick(item)}
            />
          );
        })}
      </div>
      {settings.players > 1 ? (
        <MultiplayerScoreboard
          foundTiles={foundTiles}
          tilesNumber={tilesNumber}
          players={players}
          currentUser={currentUser}
        />
      ) : (
      <SinglePlayerScoreboard
          foundTiles={foundTiles}
          tilesNumber={tilesNumber}
          players={players}
          currentUser={currentUser}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .board {
    display: grid;
    grid-template-columns: ${(props) =>
      props.grid === '4x4' ? 'repeat(4,1fr)' : 'repeat(6,1fr)'};
    gap: 8px;
  }
`;

export default GameBoard;

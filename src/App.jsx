import React from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import GameOptions from './components/GameOptions';
import Modal from './components/Modal';
import MultiplayerModal from './components/MultiplayerModal';
import { gameOptions } from './utils/constants';

export const AppContext = React.createContext();

function App() {
  const [settings, setSettings] = React.useState({
    theme: '',
    players: 0,
    grid: '',
  });
  const [state, setState] = React.useState('start'); // start | play

  const setup = () => {
    const newTheme = gameOptions[0].options[0].title;
    const newPlayers = gameOptions[1].options[0].title;
    const newGrid = gameOptions[2].options[0].title;
    setSettings({ theme: newTheme, players: newPlayers, grid: newGrid });
    setState('start');
  };

  React.useEffect(() => {
    setup();
  }, []);

  const value = {
    settings,
    setSettings,
    setState,
    setup,
  };

  return (
    <AppContext.Provider value={value}>
      <Wrapper>
        {state === 'start' && <GameOptions />}
        {state === 'play' && <GameBoard />}
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-gray-blue-900);
`;

export default App;

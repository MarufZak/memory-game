import React from 'react';
import styled from 'styled-components';
import OptionsSection from './OptionsSection';
import { gameOptions } from '../utils/constants';
import { AppContext } from '../App';

const GameOptions = () => {
  const { settings, setSettings, setState } = React.useContext(AppContext);

  const handleClick = (e) => {
    let key = e.target.id;
    let value = e.target.textContent;

    if (key === 'players') {
      value = Number(value);
    }

    setSettings({ ...settings, [key]: value });
  };

  return (
    <Wrapper>
      <div className="settings">
        {gameOptions.map((item) => (
          <OptionsSection key={item.id} title={item.title}>
            {item.options.map((option) => (
              <OptionsSection.Option
                id={item.id}
                state={settings[item.id] === option.title ? 'active' : 'idle'}
                onClick={handleClick}
                key={option.id}
              >
                {option.title}
              </OptionsSection.Option>
            ))}
          </OptionsSection>
        ))}
        <button onClick={() => setState('play')} className="submit-btn">
          Start Game
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 655px;
  width: 100%;

  .settings {
    padding: 56px;
    background-color: var(--color-gray-100);
    border-radius: 20px;
  }

  .submit-btn {
    cursor: pointer;
    padding: 16px 0 14px 0;
    width: 100%;
    background-color: var(--color-yellow-500);
    color: var(--color-gray-100);
    border-radius: 35px;
    font-size: 3.2rem;
  }
`;

export default GameOptions;

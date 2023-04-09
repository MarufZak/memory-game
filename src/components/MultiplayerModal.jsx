import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { AppContext } from '../App';

const MultiplayerModal = ({ players }) => {
  const { setup } = React.useContext(AppContext);
  let maxScore = 0;

  for (let i = 0; i < players.length; i++) {
    if (players[i].guessed > maxScore) {
      maxScore = players[i].guessed;
    }
  }

  const winners = players.filter((item) => item.guessed === maxScore);

  const title = winners.length > 1 ? `It's a tie!` : `Player ${winners[0].id} Wins!`;
  return (
    <Wrapper>
      <Modal.Content>
        <h2 className="title">{title}</h2>
        <p className="desc">Game over! Here are the results…</p>
        <ul className="list">
          {players
            .sort((a, b) => b.guessed - a.guessed)
            .map((item) => {
              const isWinner = item.guessed === maxScore;
              return (
                <li key={item.id} className={`${isWinner ? 'item active' : 'item'}`}>
                  <h3 className="item-title">
                    {isWinner ? `Player ${item.id} (Winner!)` : `Player ${item.id}`}
                  </h3>
                  <p className="item-value">{item.guessed} Pairs</p>
                </li>
              );
            })}
        </ul>
        <div className="controls">
          <button onClick={setup} className="btn">
            Setup New Game
          </button>
        </div>
      </Modal.Content>
    </Wrapper>
  );
};

const Wrapper = styled(Modal)`
  text-align: center;

  .title {
    font-size: 4.2rem;
    color: var(--color-gray-blue-900);
  }

  .desc {
    color: var(--color-gray-blue-500);
    margin-bottom: 32px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;

    .item {
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      background-color: var(--color-gray-200);

      &-title {
        color: var(--color-gray-blue-500);
      }

      &-value {
        font-size: 2.8rem;
        color: var(--color-gray-blue-700);
      }

      &.active {
        background-color: var(--color-gray-blue-900);

        .item-title,
        .item-value {
          color: var(--color-gray-100);
        }
      }
    }
  }

  .controls {
    display: flex;
    gap: 14px;
    margin-top: 32px;

    .btn {
      padding: 13px 0;
      border-radius: 26px;
      font-size: 2rem;
      width: 100%;
      background-color: var(--color-yellow-500);
      color: var(--color-gray-200);
      cursor: pointer;
    }
  }
`;

export default MultiplayerModal;

import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import Modal from './Modal';

const SinglePlayerModal = ({ time, moves }) => {
  const { setup } = React.useContext(AppContext);
  return (
    <Wrapper>
      <Modal.Content>
        <h2 className="title">You did it!</h2>
        <p className="desc">Game over! Here's how you got on…</p>
        <ul className="list">
          <li className="item">
            <h3 className="item-title">Time Elapsed</h3>
            <p className="item-value">{time}</p>
          </li>
          <li className="item">
            <h3 className="item-title">Moves Taken</h3>
            <p className="item-value">{moves}</p>
          </li>
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

export default SinglePlayerModal;

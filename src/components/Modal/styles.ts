import styled from 'styled-components';

export const ModalWrapper = styled.div`
  @keyframes openModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes closeModal {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  &.open {
    animation: openModal 0.2s;
  }

  &.close {
    animation: closeModal 0.2s;
  }

  div.card {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    padding: 6.4rem;
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: #737380;

    & > button {
      background-color: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        color: ${({ theme }) => theme.colors.red};
      }
    }

    & > strong {
      font-size: 2.4rem;
      color: black;
      margin-bottom: -16px;
    }

    div.content {
      background-color: ${({ theme }) => theme.colors.background} !important;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      gap: 0.8rem;
    }
  }
`;

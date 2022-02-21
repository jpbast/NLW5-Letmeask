import styled from 'styled-components';
import media from '../../styles/media';

export const HeaderWrapper = styled.header<{ isMenuOpen: boolean }>`
  background-color: transparent;
  height: 9rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16rem;

  ${media('large')} {
    padding: 0 8rem;
  }

  ${media('small')} {
    padding: 0 4rem;

    img {
      width: 80px;
    }
  }

  ${media('extraSmall')} {
    padding: 0 2rem;
  }

  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
      color: ${({ theme, isMenuOpen }) =>
        isMenuOpen ? theme.colors.primaryDark : theme.colors.primary};
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }

  div.actions {
    display: flex;
    gap: 8px;

    @media screen and (max-width: 720px) {
      flex-direction: column;
      position: absolute;
      top: 9rem;
      left: 0;
      width: 100%;
      background-color: white;
      padding: 2rem;
      opacity: 0;
      transition: all 0.2s;

      &.open {
        opacity: 1;
      }

      &.close {
        opacity: 0;
      }
    }

    div {
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.colors.primary};
      height: 4rem;
      font-size: 16px;
      display: flex;
      align-items: center;

      div {
        width: 4.4rem;
        height: 100%;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 8px 0 0 8px;
        border: none;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: ${(props) => props.theme.colors.primaryDark};
        }
        svg {
          color: white;
          width: 2rem;
        }
      }

      span {
        display: block;
        flex: 1;
        padding: 0 10px;
        font-size: 1.6rem;
      }

      & + button {
        height: 4rem;
        background-color: transparent;
        font-weight: 500;
        border-radius: 8px;
      }
    }
  }
`;

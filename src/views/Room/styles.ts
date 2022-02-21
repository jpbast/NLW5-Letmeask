import styled from 'styled-components';
import media from '../../styles/media';

export const RoomWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 16rem;
  margin: auto;
  background-color: transparent;

  ${media('large')} {
    padding: 0 8rem;
  }

  ${media('small')} {
    padding: 0 4rem;
  }

  ${media('extraSmall')} {
    padding: 0 2rem;
  }

  & > div:first-child {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.6rem;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 2.4rem;

    div {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 5rem;
      padding: 0.8rem 1.6rem;
      color: ${({ theme }) => theme.colors.background};
      font-size: 1.4rem;
      font-weight: 500;
    }

    h1 {
      font-size: 2.4rem;
    }
  }

  form {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
      width: 100%;
      padding: 14px;
      outline: none;
      border: 2px solid white;
      font-family: inherit;
      border-radius: 8px;

      &:focus {
        border: 2px solid ${(props) => props.theme.colors.primary};
      }
    }
    & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 1.5rem;
      & > span {
        button {
          color: ${(props) => props.theme.colors.primary};
          text-decoration: underline;
          transition: all 0.2s;
          cursor: pointer;
          background-color: transparent;
          outline: none;
          border: none;
          padding: 0;
          font-size: 1.6rem;

          &:hover {
            color: ${(props) => props.theme.colors.primaryDark};
          }
        }
      }
      & > button {
        width: 17rem;
      }
    }
  }
`;
export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 3.2rem;
`;

export const EmptyQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 6.4rem;

  img {
    margin-bottom: 0.8rem;
  }

  strong {
    font-size: 1.8rem;
  }

  span {
    font-size: 1.4rem;
    text-align: center;
    color: #737380;
    width: 31rem;
  }
`;

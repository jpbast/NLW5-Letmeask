import styled from 'styled-components';
import media from '../../styles/media';

export const NewRoomWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.44fr 0.56fr;

  ${media('medium')} {
    display: flex;
    flex-direction: column;
  }

  aside {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media('medium')} {
      padding: 4.8rem;
    }

    div {
      width: 80%;

      ${media('medium')} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
          width: 200px;
        }
      }

      ${media('small')} {
        img {
          width: 150px;
        }
      }

      h1 {
        font-size: 3.6rem;
        line-height: 1.2;
        margin-bottom: 10px;
      }
      p {
        font-size: 2.4rem;
        opacity: 0.7;
      }
    }
  }

  section {
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.6rem;
    width: 100%;

    ${media('medium')} {
      padding: 4.8rem;
    }

    h1 {
      font-weight: 700;
      color: black;
      margin-top: 2rem;
      font-size: 2.4rem;
    }

    div {
      max-width: 360px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;

      img {
        margin-bottom: 16px;
      }

      span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.gray};

        a {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    button {
      width: 100%;
    }
  }
`;

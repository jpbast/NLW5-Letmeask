import styled from 'styled-components';
import media from '../../styles/media';

export const HomeWrapper = styled.div`
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
    padding: 1.6rem;

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

    button {
      width: 100%;
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

        ${media('small')} {
          width: 100px;
        }
      }

      div.separator {
        display: flex;
        flex-direction: row;
        width: 100%;
        opacity: 0.8;
        margin: 10px 0;
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.gray};

        &::before {
          content: '';
          flex: 1;
          opacity: 0.8;
          height: 1px;
          background-color: ${(props) => props.theme.colors.gray};
          margin-right: 16px;
        }

        &::after {
          content: '';
          flex: 1;
          opacity: 0.8;
          height: 1px;
          background-color: ${(props) => props.theme.colors.gray};
          margin-left: 16px;
        }
      }
    }
  }
`;

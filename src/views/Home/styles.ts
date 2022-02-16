import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/logo.svg');
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;

  section:first-child {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 80%;
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

  section:last-child {
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

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
      width: 45%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;

      img {
        margin-bottom: 16px;
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

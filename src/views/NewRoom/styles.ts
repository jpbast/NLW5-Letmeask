import styled from 'styled-components';

export const NewRoomWrapper = styled.div`
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

      span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.gray};

        a {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

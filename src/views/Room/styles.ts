import { BsFileX } from 'react-icons/bs'
import styled from 'styled-components'

export const RoomWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
`

export const Content = styled.div`
  max-width: 100rem;
  margin: auto;
  background-color: transparent;

  h1 {
    font-size: 2.4rem;
    margin-top: 5rem;
    margin-bottom: 2.4rem;
  }

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

  & > div:nth-of-type(1) {
    font-size: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    span {
      a {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: underline;
        transition: all 0.2s;

        &:hover {
          color: ${(props) => props.theme.colors.primaryDark};
        }
      }
    }
    button {
      width: 17rem;
    }
  }
`
export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 3.2rem;
`

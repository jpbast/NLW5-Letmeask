import styled from 'styled-components'

export const QuestionWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;
  padding: 1.4rem;
  font-size: 1.6rem;

  p {
    margin-bottom: 16px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: rgb(0, 0, 0, 0.5);
      svg {
        margin-left: 6px;
      }
    }
  }
`

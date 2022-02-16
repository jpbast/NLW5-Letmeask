import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: transparent;
  height: 9rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    gap: 8px;

    div {
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.colors.primary};
      /* width: 18rem; */
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
        }
      }

      span {
        display: block;
        flex: 1;
        padding: 0 10px;
      }
    }

    & > button {
      height: 4rem;
      background-color: transparent;
      font-weight: 500;
    }
  }
  
`

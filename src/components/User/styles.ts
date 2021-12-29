import styled from 'styled-components'

export const UserWrapper = styled.div<{ isDark?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  & > div {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    position: relative;

    svg {
      position: absolute;
      color: white;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  span {
    color: ${({ isDark }) => (isDark ? 'black' : 'rgb(0, 0, 0, 0.5)')};
    font-size: 1.6rem;
  }
`

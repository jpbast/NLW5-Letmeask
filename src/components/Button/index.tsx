import styled, { css } from 'styled-components'

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'type'> {
  $background?: string
  $type: 'primary' | 'secondary'
  $color?: string
}

const ButtonWrapper = styled.button<ButtonProps>`
  ${(props) =>
    props.$type === 'primary' &&
    css`
      background-color: ${props.$background};
      color: white;
      transition: all 0.2s;

      &:hover {
        background-color: ${props.theme.colors[
          props.$background === props.theme.colors.primary
            ? 'primaryDark'
            : 'redDark'
        ]};
      }
    `}
  ${(props) =>
    props.$type === 'secondary' &&
    css`
      background-color: transparent;
      color: ${props.color};
    `}
    border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.8rem;
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

export default Button

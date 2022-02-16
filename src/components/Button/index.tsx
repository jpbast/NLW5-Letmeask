import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'type'> {
  $background?: string
  $type: 'primary' | 'secondary'
  $color?: string
  htmlType?: React.ComponentPropsWithoutRef<'button'>['type'];
  disabled?: boolean
}

const ButtonWrapper = styled.button<ButtonProps>`
  ${(props) =>
    props.$type === 'primary' &&
    css`
      background-color: ${props.$background};
      color: white;
      transition: all 0.2s;
      border: none;

      &:not(:disabled):hover {
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
      color: ${props.$background};
      border: 1px solid ${props.$background};

      &:not(:disabled):hover {
        border-color: ${props.theme.colors[
          props.$background === props.theme.colors.primary
            ? 'primaryDark'
            : 'redDark'
        ]};
        color: ${props.theme.colors[
          props.$background === props.theme.colors.primary
            ? 'primaryDark'
            : 'redDark'
        ]};
      }
    `}
  outline: none;
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 0 2.4rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

export default Button

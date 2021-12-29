import styled from 'styled-components'

const InputWrapper = styled.input`
  border-radius: 0.8rem;
  width: 100%;
  height: 5rem;
  border: 2px solid ${(props) => props.theme.colors.gray};
  padding-left: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  opacity: 0.5;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`

const Input: React.FC<Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>> = (
  props
) => {
  return <InputWrapper {...props} />
}

export default Input

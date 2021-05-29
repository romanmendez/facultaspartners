import styled from 'styled-components'

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${props => props.justify};
  justify-content: ${props => props.align};
  > * + * {
    margin-top: ${props =>
      props.space === 0 ? 0 : props.theme.scale(props.space)};
  }
  :only-child {
    height: 100%;
  }
`

export default Stack

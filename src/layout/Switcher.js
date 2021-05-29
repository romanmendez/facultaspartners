import styled from 'styled-components'

const Switcher = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    flex-grow: 1;
    margin: ${props => props.theme.scale(props.margin) || 0};
    max-width: ${props => props.theme.scale(props.maxWidth) || 'none'};
    overflow: hidden;
    text-align: center;
  }
`

export default Switcher

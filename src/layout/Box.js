import styled from 'styled-components'

const ratio = 1.5
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  color: ${props => props.color};
  width: ${props => `${Math.pow(ratio, props.width)}rem` || 'content'};
  height: ${props => props.height};
  padding: ${props => props.theme.scale(props.padding || 1)};
  background-image: ${props => (props.img ? `url(${props.img})` : 'none')};
  background-size: cover;
  background-color: ${props => props.background || 'inherit'};
  min-height: ${props => props.theme.scale(props.minHeight) || 'auto'};
  border-width: ${props => props.theme.scale(props.borderWidth)};
  border-style: ${props => (props.borderColor ? 'solid' : 'none')};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.theme.scale(props.radius)};
  cursor: ${props => (props.button ? 'pointer' : 'initial')};
`

export default Box

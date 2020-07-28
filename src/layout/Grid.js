import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.scale(props.gap)};
  grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
`
export default Grid

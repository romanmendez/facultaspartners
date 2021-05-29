import styled from 'styled-components'

const Cluster = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width};
  justify-content: ${props => props.justify};
  gap: ${props => props.theme.scale(props.gap)};
`
export default Cluster

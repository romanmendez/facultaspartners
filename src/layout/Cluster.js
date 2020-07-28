import styled from 'styled-components'

const Cluster = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.scale(props.gap)};
`
export default Cluster

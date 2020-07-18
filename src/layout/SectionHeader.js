import styled from 'styled-components'

const SectionHeader = styled.p`
  font-size: 18px;
  font-weight: 300;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5rem;
  color: ${props => props.color};
`

export default SectionHeader

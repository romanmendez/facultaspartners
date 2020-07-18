import styled from 'styled-components'

const SectionTitle = styled.h2`
  font-size: calc(30px + (36 - 30) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 500;
  padding: 10px 0;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.color};
  line-height: 1.5rem;
  letter-spacing: -1px;
`

export default SectionTitle

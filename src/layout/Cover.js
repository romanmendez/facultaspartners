import styled from 'styled-components'

const Cover = styled.div`
  display: flex;
  justify-content: center;
  background: url(${props => props.background});
  min-height: ${props => props.height};
  background-size: cover;
`

export default Cover

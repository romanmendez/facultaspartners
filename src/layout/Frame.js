import styled from 'styled-components'

const Frame = styled.div`
  padding-bottom: ${props => (props.height / props.width) * 100}%;
  position: relative;
  > * {
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    object-position: ${props => props.position};
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`
export default Frame

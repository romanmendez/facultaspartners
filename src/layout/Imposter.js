import styled from 'styled-components'

const Imposter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  > * {
    position: fixed;
    top: 50%;
    left: 50%;
    background: white;
    opacity: 1;
    transform: translate(-50%, -50%);
    width: min(90%, 80ch);
  }
`

export default Imposter

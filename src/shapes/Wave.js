import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  background: ${props => props.background};
  height: 0;

  .wave {
    position: absolute;
    height: 50px;
    width: 100%;
    background: ${props => props.background};
    bottom: 0;
  }

  .wave::before,
  .wave::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
  }

  .wave::before {
    width: 55%;
    height: 109%;
    background-color: black;
    right: -1.5%;
    top: 60%;
  }
  .wave::after {
    width: 55%;
    height: 100%;
    background-color: black;
    left: -1.5%;
    top: 60%;
  }
`
function Wave({background, color}) {
  return (
    <Container {...{background, color}}>
      <div className="wave"></div>
    </Container>
  )
}

export default Wave

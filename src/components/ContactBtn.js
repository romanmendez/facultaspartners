import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  background: white;
  width: 145px;
  height: 35px;
  position: relative;
  top: 210px;
  margin: 0 auto;
  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme.darkBlue};
    height: inherit;
  }
`

function ContactBtn() {
  return (
    <Button>
      <span>Contact Us</span>
    </Button>
  )
}

export default ContactBtn

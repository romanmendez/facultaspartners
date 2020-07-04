import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'

const Banner = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  position: relative;
  img {
    object-fit: cover;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .container {
    position: absolute;
    width: 100%;
    bottom: 0;
    top: 0;
    div {
      display: flex;
      align-items: center;
      height: 100%;
    }
    h2 {
      width: 100%;
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 400;
      text-align: center;
      color: ${props => props.theme.darkBlue};
    }
    p {
      width: 70%;
      font-size: 14px;
      color: white;
      font-weight: 200;
      padding: 10px 50px;
    }
  }
`

function BannerSection({header, text, img, side}) {
  const [language] = useLanguage()

  return (
    <>
      <Banner>
        <img src={img} alt="strategic advisory image" />
        {side === 'left' ? (
          <div className="container">
            <div>
              <h2>{header[language]}</h2>
              <p>{text[language]}</p>
            </div>
          </div>
        ) : (
          <div className="container">
            <div>
              <p>{text[language]}</p>
              <h2>{header[language]}</h2>
            </div>
          </div>
        )}
      </Banner>
    </>
  )
}

export default BannerSection

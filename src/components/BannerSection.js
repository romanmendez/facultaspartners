import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {theme} from '../styles/theme'
import {useLanguage} from '../context'
import SectionTitle from '../styles/components/SectionTitle'
import Text from '../styles/components/Text'
import {device} from '../styles/theme'

const Banner = styled.div`
  &.large {
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    height: 250px;
    background: url(${props => props.img}) no-repeat center;
    object-fit: cover;
    .container {
      width: 100%;
      display: flex;
      * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        .title {
          width: 60%;
        }
        .text {
          width: 30%;
        }
      }
    }
  }
  &.small {
    .title {
      background: ${props => props.theme.lightBlue};
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        margin-bottom: 0 !important;
      }
    }
    .text {
      background: url(${props => props.img});
      display: flex;
      align-items: center;
      p {
        text-align: center;
      }
    }
  }
  .text {
    color: white;
    padding: 2rem 3rem;
  }
  @media (min-width: 1265px) {
    &.small {
      display: none;
    }
  }
  @media (max-width: 1265px) {
    &.large {
      display: none;
    }
  }
`

function BannerSection({header, text, img, side}) {
  const [language] = useLanguage()

  return (
    <>
      <Banner img={img.large} className="large">
        {side === 'left' ? (
          <div className="container">
            <SectionTitle className="title" color={theme.darkBlue}>
              {header[language]}
            </SectionTitle>
            <Text className="text">{text[language]}</Text>
          </div>
        ) : (
          <div className="container">
            <Text className="text">{text[language]}</Text>
            <SectionTitle className="title" color={theme.darkBlue}>
              {header[language]}
            </SectionTitle>
          </div>
        )}
      </Banner>
      <Banner img={img.small} className="small">
        <div className="container">
          <div>
            <div className="title">
              <SectionTitle color={theme.darkBlue}>
                {header[language]}
              </SectionTitle>
            </div>
            <div className="text">
              <Text>{text[language]}</Text>
            </div>
          </div>
        </div>
      </Banner>
    </>
  )
}

export default BannerSection

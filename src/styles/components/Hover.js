import React from 'react'
import styled from 'styled-components'

const HoverStyle = styled.div`
  .list div {
    background: #90caf9;
    flex: 1;
  }
  .list div a {
    text-decoration: none;
    color: inherit;
    padding-top: 1rem;
    display: block;
    text-align: center;
    overflow: hidden;
    font-size: 40px;
  }
  .list div a span {
    display: block;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    font-size: 22px;
    margin-top: 1rem;
  }

  @media (hover: hover) {
    .list div a span {
      transform: translateY(100px);
      transition: 0.2s;
    }
    .list:hover span {
      transform: translateY(0);
    }
  }
`
function Hover() {
  return (
    <div class="list">
      <div>
        <a href="#0">
          <span>This</span>
        </a>
      </div>
    </div>
  )
}

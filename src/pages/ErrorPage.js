import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link to='/' className='back-home'>
          Back Home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 96px);
  h3,
  h1 {
    font-weight: 700;
    color: #172b4d;
    font-family: 'Manrope', sans-serif;
    padding-bottom: 5px;
  }
  h3 {
    padding-bottom: 25px;
  }
  .back-home {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    color: #fff;
    background: #0517f8;
    border: 1px solid #0517f8;
  }
`

export default ErrorPage

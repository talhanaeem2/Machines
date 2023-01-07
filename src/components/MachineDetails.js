import React from 'react'
import styled from 'styled-components'
import machineImg from '../assets/images/Machine-Image.png'

const MachineDetails = ({ singleMachine }) => {
  if (!singleMachine) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div>
        <Wrapper>
          <div>
            <img
              src={singleMachine.img ? singleMachine.img : machineImg}
              alt='main img'
            />
          </div>
          <div>
            <div className='text'>
              <span>Serial Number:</span>
              <h3>{singleMachine.serial}</h3>
            </div>
            <div className='text text-cont'>
              <span>Facility:</span>
              <h3>{singleMachine.company}</h3>
            </div>
            <div className='text'>
              <span>Installation Date:</span>
              <h3>02-04-2020</h3>
            </div>
          </div>
        </Wrapper>
        <div className='desc'>
          <h2>Description</h2>
          <p>{singleMachine.desc}</p>
        </div>
      </div>
    )
  }
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 24px 0;
  img {
    width: 100%;
    padding-right: 30px;
  }
  h3 {
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    color: #172b4d;
    font-family: 'Manrope', sans-serif;
  }
  .text-cont h3:nth-child(2) {
    color: #6974fb;
  }
  span {
    font-weight: 700;
    font-size: 10px;
    font-family: 'Manrope', sans-serif;
    text-transform: uppercase;
    color: #748094;
  }
  div .text {
    padding-bottom: 12px;
    display: grid;
    grid-template-columns: 23% 77%;
  }
`

export default MachineDetails

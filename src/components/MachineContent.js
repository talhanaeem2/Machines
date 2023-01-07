import React from 'react'
import { useMachineContext } from '../context/context'
import machineImg from '../assets/images/Machine-Image.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MachineContent = () => {
  const { allMachines, searchedMachines } = useMachineContext()
  return (
    <Wrapper>
      {searchedMachines.length > 0
        ? searchedMachines.map((item, index) => {
            return (
              <Link
                to={`/machines/${item.id}`}
                className='machine-content'
                key={index}
              >
                <div className='img-cont'>
                  <img
                    src={item.img ? item.img : machineImg}
                    alt={item.title}
                  />
                </div>
                <div className='text-cont'>
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                  <p>{item.company}</p>
                </div>
                <div className='serial-cont'>
                  <h3>
                    <span>Serial Number</span>
                    <br />
                    {item.serial}
                  </h3>
                </div>
              </Link>
            )
          })
        : allMachines.map((item, index) => {
            return (
              <Link
                to={`/machines/${item.id}`}
                className='machine-content'
                key={index}
              >
                <div className='img-cont'>
                  <img
                    src={item.img ? item.img : machineImg}
                    alt={item.title}
                  />
                </div>
                <div className='text-cont'>
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                  <p>{item.company}</p>
                </div>
                <div className='serial-cont'>
                  <h3>
                    <span>Serial Number</span>
                    <br />
                    {item.serial}
                  </h3>
                </div>
              </Link>
            )
          })}
    </Wrapper>
  )
}
const Wrapper = styled.main`
  overflow-y: scroll;
  height: calc(100vh - 97px);
`

export default MachineContent

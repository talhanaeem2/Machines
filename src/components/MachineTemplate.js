import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useMachineContext } from '../context/context'
import machineImg from '../assets/images/Machine-Image.png'

const MachineTemplate = () => {
  const { allMachines, searchedMachines } = useMachineContext()
  return (
    <Wrapper>
      {allMachines.map((item, index) => {
        return (
          <Link
            to={`machines/${item.id}`}
            className='machine-content machine-temp'
            key={index}
          >
            <div className='img-cont'>
              <img src={item.img ? item.img : machineImg} alt={item.title} />
            </div>
            <div className='text-cont'>
              <h3>{item.title}</h3>
              <span
                className={`${
                  item.category === 'machine Template' ? 'redC' : ''
                }`}
              >
                {item.category}
              </span>
            </div>
            <div className='serial-cont'>
              <h3>
                <span>Created Machines</span>
                <br />
                {item.createdM}
              </h3>
            </div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default MachineTemplate

const Wrapper = styled.main`
  overflow-y: scroll;
  height: calc(100vh - 97px);
`

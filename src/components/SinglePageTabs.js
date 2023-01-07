import React from 'react'
import styled from 'styled-components'
import { useMachineContext } from '../context/context'
import { singleTabs } from '../data'
import MachineDetails from './MachineDetails'
import MachineDocumentation from './MachineDocumentation'
import MachineHistory from './MachineHistory'
import MachineMaintenance from './MachineMaintenance'

const SinglePageTabs = ({ singleMachine }) => {
  const { singleMachineTabs, changeSingleTabs } = useMachineContext()
  return (
    <Wrapper>
      <ul>
        {singleTabs.map((item) => {
          return (
            <li
              key={item.id}
              className={`${singleMachineTabs === item.id ? 'active' : ''}`}
              onClick={() => changeSingleTabs(item.id)}
            >
              {item.title}
            </li>
          )
        })}
      </ul>
      {singleMachineTabs === 1 && (
        <MachineDetails singleMachine={singleMachine} />
      )}
      {singleMachineTabs === 2 && <MachineDocumentation />}
      {singleMachineTabs === 3 && <MachineHistory />}
      {singleMachineTabs === 4 && <MachineMaintenance />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  ul li {
    color: #748094;
    font-weight: 500;
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    text-align: center;
    list-style: none;
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e8eaed;
    padding-bottom: 12px;
  }
  .active {
    color: #0517f8;
    border-bottom: 1px solid #0517f8;
    font-weight: 700;
  }
`
export default SinglePageTabs

import React from 'react'
import icMachines from '../assets/images/ic-machines.svg'
import machineTemp from '../assets/images/machine-templates.svg'
import { useMachineContext } from '../context/context'

const Machinetabs = () => {
  const { handleTabs, machineTabs, allMachines } = useMachineContext()
  const tempMachines = [...allMachines]
  //console.log(machineTabs)
  return (
    <div className='machine-tabs'>
      <ul>
        <li onClick={() => handleTabs(1)}>
          <img src={icMachines} alt='All Machines' />
          <h3 className={`${machineTabs === 0 ? 'active' : ''}`}>
            All Machines
          </h3>
        </li>
        {tempMachines.filter((item, index) => {
          return (
            <li onClick={() => handleTabs(index)} key={index}>
              <img src={machineTemp} alt={item.title} />
              <h3 className={`${machineTabs === 1 ? 'active' : ''}`}>
                {item.title}
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Machinetabs

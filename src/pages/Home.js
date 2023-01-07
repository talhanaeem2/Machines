import React from 'react'
import MachineContent from '../components/MachineContent'
import Machinetabs from '../components/Machinetabs'
import MachineTemplate from '../components/MachineTemplate'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import { useMachineContext } from '../context/context'

const Home = () => {
  const { machineTabs, addNewMachine, singleMachineMounted, dispatch } =
    useMachineContext()
  if (singleMachineMounted) {
    dispatch({ type: 'SINGLE_MACHINE_UNMOUNTED' })
  }
  return (
    <section className='main-sect'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='machines'>
        <Machinetabs />
        {machineTabs === 0 ? <MachineContent /> : <MachineTemplate />}
      </div>
      {addNewMachine && <Modal />}
    </section>
  )
}

export default Home

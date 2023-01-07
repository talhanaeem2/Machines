import React from 'react'
import closeButton from '../assets/images/closeButton.svg'
import { useMachineContext } from '../context/context'
import CreateNewMachine from './CreateNewMachine'
import CrmFromTemplate from './CrmFromTemplate'
import nextId from 'react-id-generator'

const Modal = () => {
  const {
    closeSidebar,
    addNewMachine,
    handleRadio,
    checkSidebar,
    newMachine,
    handlerNewMachine,
  } = useMachineContext()
  return (
    <aside className={`${addNewMachine ? 'Sidebar show-sidebar' : 'Sidebar'}`}>
      <div className='sidebar-header'>
        <h3>Create New Machine</h3>
        <button type='button' onClick={() => closeSidebar()}>
          <img src={closeButton} alt='close' />
        </button>
      </div>
      <div className='sidebar-body'>
        <div className='radio-btns'>
          <input
            type='radio'
            id='crm'
            name='crm'
            checked={`${checkSidebar === 'crm' ? 'checked' : ''}`}
            value='crm'
            onChange={(e) => handleRadio(e.target.value)}
          />
          <label htmlFor='crm'>Create New Machine</label>
          <input
            type='radio'
            id='crmft'
            name='crmft'
            checked={`${checkSidebar === 'crmft' ? 'checked' : ''}`}
            value='crmft'
            onChange={(e) => handleRadio(e.target.value)}
          />
          <label htmlFor='crmft'>Create New Machine From Template</label>
        </div>
        {checkSidebar === 'crm' && <CreateNewMachine />}
        {checkSidebar === 'crmft' && <CrmFromTemplate />}
      </div>
      <div className='sidebar-footer'>
        <button
          type='button'
          disabled={
            !newMachine.name ||
            !newMachine.serialNum ||
            !newMachine.facility ||
            !newMachine.desc
          }
          onClick={(e) => handlerNewMachine({ ...newMachine, id: nextId() })}
        >
          Submit New Machine
        </button>
      </div>
    </aside>
  )
}

export default Modal

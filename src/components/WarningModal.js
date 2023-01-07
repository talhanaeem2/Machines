import React from 'react'
import { useMachineContext } from '../context/context'
import modalImg from '../assets/images/ilustracija.svg'

const WarningModal = () => {
  const { warningModal, closeModal, cancelMachine } = useMachineContext()
  return (
    <div
      id='customModal'
      className={`${warningModal ? 'modal modal-show' : 'modal modal-hide'}`}
    >
      <div className='modal-body'>
        <div>
          <img src={modalImg} alt='' />
        </div>
        <div>
          <h3>
            Are you sure you want to quit without saving this new machine?
          </h3>
          <div className='btn-cont'>
            <button type='button' onClick={() => cancelMachine()}>
              Yes, Cancel
            </button>
            <button onClick={() => closeModal(true)} type='button'>
              No, Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WarningModal

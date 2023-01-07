import React from 'react'
import vector from '../assets/images/Vector.svg'
import vect from '../assets/images/Vectorw.svg'
import { useMachineContext } from '../context/context'
import { Link } from 'react-router-dom'

const NavbarSinglePage = () => {
  const { editMachine } = useMachineContext()
  return (
    <nav className='main-nav single-nav'>
      <div className='user-side'>
        <h3>User</h3>
      </div>
      <div className='logo'>
        <Link to='/'>
          <img src={vector} alt='back' />
          <h2>Back</h2>
        </Link>
        <div className='edit'>
          <button type='button' onClick={() => editMachine()}>
            <img src={vect} alt='edit' /> Edit
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarSinglePage

import React from 'react'
import logo from '../assets/images/Frame.svg'
import { CiSearch } from 'react-icons/ci'
import { useMachineContext } from '../context/context'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { openSidebar, addNewMachine, handleSearch } = useMachineContext()
  return (
    <nav className='main-nav'>
      <div className='user-side'>
        <h3>User</h3>
      </div>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          <h2>Machines</h2>
        </Link>
        <div className='search-bar'>
          <CiSearch />
          <input
            type='text'
            placeholder='Search by name or serial number'
            className={`${addNewMachine ? 'inp-opacity' : ''}`}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button type='button' onClick={() => openSidebar()}>
            Add New Machine
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

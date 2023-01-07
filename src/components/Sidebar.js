import React from 'react'
import { menuItems } from '../data'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar

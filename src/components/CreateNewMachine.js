import React from 'react'
import fileIcon from '../assets/images/ic-image.svg'
import warningIcon from '../assets/images/ic-warrning.svg'

import { useMachineContext } from '../context/context'

const CreateNewMachine = () => {
  const { handleChange, error } = useMachineContext()

  return (
    <div className='create-machine'>
      <div>
        <h3>Machine Name *</h3>
        <input
          type='text'
          placeholder='Add machine name'
          onChange={(name) => {
            handleChange(name.target.value, 'name')
          }}
        />
      </div>
      <div>
        <h3>Serial Number * (has to be unique within your organisation)</h3>
        <input
          type='text'
          placeholder='Add serial number'
          onChange={(serialNum) => {
            handleChange(serialNum.target.value, 'serialNum')
          }}
        />
        {error.err && (
          <div className='error'>
            <img src={warningIcon} alt='' />
            <p>{error.message}</p>
          </div>
        )}
      </div>
      <div>
        <h3>Facility</h3>
        <select
          name='facility'
          id='facility'
          onChange={(facility) => {
            handleChange(facility.target.value, 'facility')
          }}
        >
          <option value='choose'>Choose facility</option>
          <option value='Apple juice factory Rothenburg'>
            Apple juice factory Rothenburg
          </option>
          <option value='Banana juice factory Rothenburg'>
            Banana juice factory Rothenburg
          </option>
          <option value='Orange juice factory Rothenburg'>
            Orange juice factory Rothenburg
          </option>
          <option value='Mango juice factory Rothenburg'>
            Mango juice factory Rothenburg
          </option>
        </select>
      </div>
      <div>
        <h3>Category</h3>
        <select
          name='category'
          id='category'
          onChange={(facility) => {
            handleChange(facility.target.value, 'category')
          }}
        >
          <option value='choose'>Choose category</option>
          <option value='Line Template'>Line Template</option>
          <option value='Machine Template'>Machine Template</option>
          <option value='Production Line A'>Production Line A</option>
          <option value='Production Line B'>Production Line B</option>
          <option value='Production Line C'>Production Line C</option>
        </select>
      </div>
      <div>
        <h3>Machine Description</h3>
        <textarea
          name='mach-desc'
          id='mach-desc'
          placeholder='Add machine description'
          onChange={(desc) => {
            handleChange(desc.target.value, 'desc')
          }}
        ></textarea>
      </div>
      <div className='file-up'>
        <img src={fileIcon} alt='upload' />
        <h3>
          Drop your image here, or
          <label htmlFor='file-upload'>
            click to browse
            <input
              type='file'
              id='file-upload'
              onChange={(img) => {
                handleChange(img.target.value, 'img')
              }}
            />
          </label>
          <span>on your computer</span>
        </h3>
        <p>1600 x 1200 (4:3) recommended, up to 10MB.</p>
      </div>
    </div>
  )
}

export default CreateNewMachine

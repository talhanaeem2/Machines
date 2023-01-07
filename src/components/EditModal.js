import React from 'react'
import { useMachineContext } from '../context/context'
import styled from 'styled-components'
import deleteImg from '../assets/images/ic-delete.svg'

const EditModal = () => {
  const {
    isEditting,
    closeEditModal,
    singleItem,
    saveEdit,
    updateMachine,
    deleteMachine,
  } = useMachineContext()
  const { title, desc, serial, company, category, img, id } = singleItem
  //console.log(singleItem)
  return (
    <Wrapper
      id='editModal'
      className={`${isEditting ? 'modal modal-show' : 'modal modal-hide'}`}
    >
      <div className='modal-header'>
        <h1>Edit {title}</h1>
      </div>
      <div className='modal-body'>
        <div>
          <label htmlFor='name'>Add Machine Name</label>
          <input
            type='text'
            id='name'
            name='title'
            placeholder={title}
            onChange={(e) => saveEdit(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='serial'>Add Serial Number</label>
          <input
            type='text'
            id='serial'
            name='serial'
            placeholder={serial}
            onChange={(e) => saveEdit(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='facility'>Add Facility Name</label>
          <input
            type='text'
            id='facility'
            name='company'
            placeholder={company}
            onChange={(e) => saveEdit(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='category'>Add Category Name</label>
          <input
            type='text'
            id='category'
            name='category'
            placeholder={category}
            onChange={(e) => saveEdit(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='desc'>Add Machine Description</label>
          <textarea
            type='text'
            id='desc'
            name='desc'
            placeholder={desc}
            onChange={(e) => saveEdit(e.target.name, e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor='img'>Add Machine Image</label>
          <input type='file' id='img' name='img' />
        </div>
      </div>
      <div className='modal-footer'>
        <button type='button' onClick={() => deleteMachine(id)}>
          <img src={deleteImg} alt='delete' />
          Delete
        </button>
        <button type='button' onClick={() => closeEditModal()}>
          Cancel
        </button>
        <button type='button' onClick={() => updateMachine()}>
          Update
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 750px;
  height: 660px;
  font-family: 'Manrope', sans-serif;
  .modal-header {
    //position: fixed;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 24px 0 12px 24px;
  }
  h1 {
    color: #000;
    font-weight: 700;
    font-size: 16px;
  }
  .modal-body {
    margin: 0 24px;
    border: 1px solid #e8eaed;
    border-top: none;
    border-bottom: none;
    padding: 0 24px;
    display: block;
    overflow-y: scroll;
    height: calc(100vh - 44vh);
  }
  .modal-body > div {
    padding-top: 24px;
  }
  textarea {
    padding: 11px 12px;
    font-weight: 500;
    font-size: 12px;
    color: #172b4d;
    border: 1px solid #e6e8fe;
    border-radius: 8px;
    width: 50%;
    height: 80px;
  }
  input {
    padding: 11px 12px;
    font-weight: 500;
    font-size: 12px;
    color: #172b4d;
    border: 1px solid #e6e8fe;
    border-radius: 8px;
    width: 50%;
  }
  label {
    font-weight: 500;
    font-size: 12px;
    color: #748094;
    display: block;
    padding-bottom: 8px;
    padding-left: 6px;
  }
  .modal-footer {
    border-top: 1px solid #ccc;
    width: 100%;
    padding: 24px 24px 12px 24px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
  }
  .modal-footer button:nth-child(1) img {
    margin: 0px 5px -5px 0;
  }
  .modal-footer button:nth-child(1) {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
    color: #ee0064;
    background: #fff;
    border: 1px solid #e8eaed;
    margin-right: 16px;
  }
  .modal-footer button:nth-child(2) {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
    color: #0517f8;
    background: #fff;
    border: 1px solid #e8eaed;
    margin-right: 16px;
  }
  .modal-footer button:nth-child(3) {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
    color: #fff;
    background: #0517f8;
    border: 1px solid #0517f8;
  }
`

export default EditModal

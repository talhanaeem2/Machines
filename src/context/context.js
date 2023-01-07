import React, { useReducer, useContext } from 'react'
import machineReducer from '../reducer/reducer'
import { machineTabItems } from '../data'
import toast from 'react-hot-toast'

let items = machineTabItems

const newAllMachines = JSON.parse(localStorage.getItem('machines'))
if (newAllMachines) {
  items = newAllMachines
}

const initialState = {
  allMachines: items,
  searchedMachines: [],
  machineTabs: 0,
  addNewMachine: false,
  checkSidebar: 'crm',
  newMachine: {
    name: '',
    serialNum: '',
    facility: '',
    desc: '',
    img: '',
  },
  error: {
    err: false,
    message: '',
  },
  warningModal: false,
  singleItem: {},
  singleMachineMounted: false,
  singleMachineTabs: 1,
  isEditting: false,
}

const MachineContext = React.createContext()
export const MachineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(machineReducer, initialState)

  const handleTabs = (e) => {
    dispatch({ type: 'CHANGE_TAB', payload: e })
  }
  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' })
  }
  const closeSidebar = () => {
    const { name, serialNum, facility, desc, img } = state.newMachine
    if (name || serialNum || facility || desc) {
      dispatch({ type: 'WARNING_MODAL' })
    } else {
      dispatch({ type: 'CLOSE_SIDEBAR' })
    }
  }
  const cancelMachine = () => {
    dispatch({ type: 'CLOSE_MODALS' })
  }
  const closeModal = (e) => {
    dispatch({ type: 'WARNING_MODAL', payload: e })
  }
  const handleRadio = (value) => {
    dispatch({ type: 'CHECK_SIDEBAR', payload: value })
  }
  const handleChange = (value, name) => {
    const error = state.error
    if (name === 'serialNum') {
      const machines = state.allMachines
      let serialNum = ''
      machines.map((item) => {
        serialNum = machines.find((el) => el.serial === value)
        return serialNum
      })
      if (serialNum) {
        dispatch({ type: 'ERROR_HANDLING', payload: 'matched' })
      } else {
        dispatch({ type: 'ERROR_HANDLING', payload: 'no match' })
      }
    }
    if (!error.err && !state.isEditting) {
      dispatch({ type: 'UPDATE_NEW_MACHINE', payload: { name, value } })
    }
  }
  const handlerNewMachine = (e) => {
    dispatch({ type: 'ADD_NEW_MACHINE', payload: e })
    dispatch({ type: 'CLOSE_SIDEBAR' })
    toast.success('New machine has been added', {
      duration: 4000,
      position: 'top-right',
    })
  }
  const changeSingleTabs = (e) => {
    dispatch({ type: 'CHANGE_SINGLE_TABS', payload: e })
  }
  const editMachine = () => {
    dispatch({ type: 'IS_EDITTING' })
  }
  const closeEditModal = () => {
    dispatch({ type: 'CLOSE_EDIT_MODAL' })
  }
  const saveEdit = (n, v) => {
    dispatch({ type: 'SAVE_EDITTING', payload: { n, v } })
  }
  const updateMachine = () => {
    dispatch({ type: 'UPDATE_MACHINE' })
    setTimeout(() => {
      dispatch({ type: 'CLOSE_EDIT_MODAL' })
      toast.success('Machine Updated!', {
        duration: 4000,
        position: 'top-right',
      })
    }, 2000)
  }
  const deleteMachine = (id) => {
    dispatch({ type: 'DELETE_MACHINE', payload: id })
    dispatch({ type: 'CLOSE_EDIT_MODAL' })
    toast.success('Machine Deleted!', {
      duration: 4000,
      position: 'top-right',
    })
  }
  const handleSearch = (e) => {
    dispatch({ type: 'SEARCH_MACHINES', payload: e })
  }
  console.log(state)
  return (
    <MachineContext.Provider
      value={{
        ...state,
        handleTabs,
        openSidebar,
        closeSidebar,
        handleRadio,
        handleChange,
        handlerNewMachine,
        closeModal,
        cancelMachine,
        dispatch,
        changeSingleTabs,
        editMachine,
        closeEditModal,
        saveEdit,
        updateMachine,
        deleteMachine,
        handleSearch,
      }}
    >
      {children}
    </MachineContext.Provider>
  )
}

export const useMachineContext = () => {
  return useContext(MachineContext)
}

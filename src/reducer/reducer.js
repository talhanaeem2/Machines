const machineReducer = (state, action) => {
  if (action.type === 'CHANGE_TAB') {
    if (action.payload === 0) {
      return {
        ...state,
        machineTabs: 1,
      }
    }
    if (action.payload === 1) {
      return {
        ...state,
        machineTabs: 0,
      }
    }
  }
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, addNewMachine: true }
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, addNewMachine: false }
  }
  if (action.type === 'CHECK_SIDEBAR') {
    return { ...state, checkSidebar: action.payload }
  }
  if (action.type === 'UPDATE_NEW_MACHINE') {
    const { name, value } = action.payload

    return { ...state, newMachine: { ...state.newMachine, [name]: value } }
  }
  if (action.type === 'ADD_NEW_MACHINE') {
    const { id, name, serialNum, facility, desc, img, category } =
      action.payload
    const tempArray = [...state.allMachines]
    const tempObject = {
      id: id,
      title: name,
      serial: serialNum,
      company: facility,
      category,
      desc,
      img,
      createdM: '3',
    }
    tempArray.push(tempObject)
    localStorage.setItem('machines', JSON.stringify(tempArray))
    return { ...state, allMachines: tempArray }
  }
  if (action.type === 'ERROR_HANDLING') {
    const check = action.payload
    if (check === 'matched') {
      return {
        ...state,
        error: {
          err: true,
          message:
            'This serial number is already associated with another machine in your company',
        },
      }
    } else {
      return {
        ...state,
        error: {
          err: false,
          message: '',
        },
      }
    }
  }
  if (action.type === 'WARNING_MODAL') {
    const closed = action.payload
    if (closed) {
      return { ...state, warningModal: false }
    }
    return { ...state, warningModal: true }
  }
  if (action.type === 'CLOSE_MODALS') {
    return { ...state, addNewMachine: false, warningModal: false }
  }
  if (action.type === 'SINGLE_ITEM') {
    return { ...state, singleItem: action.payload }
  }
  if (action.type === 'SINGLE_MACHINE_MOUNTED') {
    return { ...state, singleMachineMounted: true }
  }
  if (action.type === 'SINGLE_MACHINE_UNMOUNTED') {
    return { ...state, singleMachineMounted: false }
  }
  if (action.type === 'CHANGE_SINGLE_TABS') {
    return { ...state, singleMachineTabs: action.payload }
  }
  if (action.type === 'IS_EDITTING') {
    return { ...state, isEditting: true }
  }
  if (action.type === 'CLOSE_EDIT_MODAL') {
    return { ...state, isEditting: false }
  }
  if (action.type === 'SAVE_EDITTING') {
    const { n: name, v: value } = action.payload
    return { ...state, singleItem: { ...state.singleItem, [name]: value } }
  }
  if (action.type === 'UPDATE_MACHINE') {
    const { allMachines, singleItem } = state
    const editedMachine = allMachines.find(
      (machine) => machine.id === singleItem.id
    )
    editedMachine.title = singleItem.title
    editedMachine.company = singleItem.company
    editedMachine.desc = singleItem.desc
    editedMachine.serial = singleItem.serial
    editedMachine.category = singleItem.category

    localStorage.setItem('machines', JSON.stringify(allMachines))

    return { ...state, allMachines }
  }
  if (action.type === 'DELETE_MACHINE') {
    const { allMachines } = state
    const del = allMachines.filter((item) => item.id !== action.payload)
    localStorage.setItem('machines', JSON.stringify(del))
    return { ...state, allMachines: del }
  }
  if (action.type === 'SEARCH_MACHINES') {
    const { allMachines } = state
    const val = action.payload
    const tempMachines = [...allMachines]
    const searchedMachines = tempMachines.filter((machine) => {
      return machine.title.toLowerCase().startsWith(val)
    })
    return { ...state, searchedMachines }
  }
  throw new Error(`No matching ${action.type} - action type`)
}
export default machineReducer

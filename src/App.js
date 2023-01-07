import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import { useMachineContext } from './context/context'
import WarningModal from './components/WarningModal'
import { Toaster } from 'react-hot-toast'
import SingleMachinePage from './pages/SingleMachinePage'
import NavbarSinglePage from './components/NavbarSinglePage'
import EditModal from './components/EditModal'
function App() {
  const { addNewMachine, warningModal, singleMachineMounted, isEditting } =
    useMachineContext()
  return (
    <>
      {addNewMachine && <div className='overlay'></div>}
      {warningModal && <div className='overlay2'></div>}
      {isEditting && <div className='overlay3'></div>}
      {singleMachineMounted ? <NavbarSinglePage /> : <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/machines/:id' element={<SingleMachinePage />} />
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
      <Toaster />
      {warningModal && <WarningModal />}
      {isEditting && <EditModal />}
    </>
  )
}

export default App

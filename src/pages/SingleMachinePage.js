import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useMachineContext } from '../context/context'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import SinglePageTabs from '../components/SinglePageTabs'
import { useNavigate } from 'react-router-dom'

const SingleMachinePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { allMachines, dispatch, singleMachineMounted } = useMachineContext()
  const singleMachine = useMemo(
    () => allMachines.find((item) => item.id === id),
    [allMachines]
  )
  useEffect(() => {
    if (!singleMachineMounted) {
      dispatch({ type: 'SINGLE_MACHINE_MOUNTED' })
      dispatch({ type: 'SINGLE_ITEM', payload: singleMachine })
    }
  }, [singleMachineMounted])

  //console.log(singleMachine)
  if (!singleMachine) {
    navigate('/')
    return <h1>Loading...</h1>
  } else {
    return (
      <Wrapper>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='single-content'>
          <h1>{singleMachine.title}</h1>
          <SinglePageTabs singleMachine={singleMachine} />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 20% 52% 28%;
  .single-content {
    padding: 25px 60px 0 70px;
    border-right: 1px solid #e8eaed;
  }
  h1 {
    font-weight: 700;
    font-size: 18px;
    color: #172b4d;
    font-family: 'Manrope', sans-serif;
  }
`

export default SingleMachinePage

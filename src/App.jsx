import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slice'

const App = () => {
  const [myData , setMyData] = useState('')
  const ReduxData = useSelector((data)=>data.MyRedux.value)
  const dispatch = useDispatch()


  const HandlePlus = () => {
    dispatch(increment())
  }
  const HandleMinus = ()=>{
    if(ReduxData != 0){
      dispatch(decrement())

    }
  }
  const InpNO = Number(myData)
  const HandleAmount = ()=>{
    dispatch(incrementByAmount(InpNO))
  }

  return (
    <>
      <div>
          <div className='bg-[#aec08b] h-[50px] w-[400px] rounded-full flex border-1 border-[#a3a3a3]'>
            <input onChange={(e)=>setMyData(e.target.value)} className='h-full text-black rounded-full w-full pl-5 outline-none' placeholder='Enter Number' type="number" />
            <button onClick={HandleAmount} className='bg-[#FF1E1E] px-10 rounded-full text-white font-bold cursor-pointer'>Add</button>
          </div>
          <div className='mt-30 flex items-center gap-5 justify-center'>
            <button onClick={HandleMinus} className='bg-[#FF1E1E] h-[35px] w-[35px] rounded-full text-2xl font-black text-white flex items-center justify-center cursor-pointer'>-</button>
            <h1 className='text-3xl'>{ReduxData}</h1>
            <button onClick={HandlePlus} className='bg-[#FF1E1E] h-[35px] w-[35px] rounded-full text-2xl font-black text-white flex items-center justify-center cursor-pointer'>+</button>
          </div>
      </div>
    </>
  )
}

export default App

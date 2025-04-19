import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1572013343866-dfdb9b416810?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 w-full bg-red-300 flex justify-between flex-col'>
        <img className='w-16 ml-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get started with Uber.</h2>
          <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5  '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

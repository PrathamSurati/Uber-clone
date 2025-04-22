import React,{useContext} from 'react'
import {CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext);

  return (
    <div>
      <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
            <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
          </div>
          <div className="">
            <h4 className="text-lg font-semibold">Rs. 500.50 </h4>
            <p className="text-xm  text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex bg-gray-100 p-3 rounded-md justify-center items-start w-full mt-5 gap-5">
          <div className="text-center">
            <i className="text-3xl font-thin ri-timer-2-line"></i>
            <h5 className="font-medium text-lg">10.2</h5>
            <p className="text-sm text-gray-400">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl font-thin ri-speed-up-line"></i>
            <h5 className="font-medium text-lg">10.2</h5>
            <p className="text-sm text-gray-400">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl font-thin ri-booklet-line"></i>
            <h5 className="font-medium text-lg">10.2</h5>
            <p className="text-sm text-gray-400">Hours Online</p>
          </div>
        </div>
      
    </div>
  )
}

export default CaptainDetails

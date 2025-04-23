import React from "react";
import { Link, useLocation } from 'react-router-dom' // Added useLocation
 import { useEffect, useContext } from 'react'
 import { SocketContext } from '../context/SocketContext'
 import { useNavigate } from 'react-router-dom'
 import LiveTracking from '../components/LiveTracking'

const Riding = () => {
  const location = useLocation()
  const { ride } = location.state || {} // Retrieve ride data
  const { socket } = useContext(SocketContext)
  const navigate = useNavigate()

  socket.on("ride-ended", () => {
      navigate('/home')
  })

  return (
    <div className="h-screen">
        <Link to={'/home'} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      <div className="h-1/2">
      <LiveTracking />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium  capitalize">{ride?.captain.fullname.firstname}</h2>
            <h4 className="font-semibold text-xl">{ride?.captain.vehicle.plate}</h4>
            <p className="text-gray-700 text-md -mt-1">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400 ">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">403/43</h3>
                <p className="text-sm -mt-1 text-gray-600">
                {ride?.destination}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3  ">
              <i className="ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare} </h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>
    </div>
  );
};

export default Riding;

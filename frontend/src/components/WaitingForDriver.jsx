import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div >
    <h5
      className="p-1 absolute w-[93%] text-center top-0"
      onClick={() => {
        props.setWaitingForDriver(false);
      }}
    >
      <i className="text-2xl text-gray-500 ri-arrow-down-wide-line"></i>
    </h5>
    <div className='flex items-center justify-between'>
    <img
        className="h-14"
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
        alt=""
      />
      <div className='text-right'>
        <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
        <h4 className='font-semibold text-xl'>{props.ride?.captain.vehicle.plate}</h4>
        <p className='text-gray-700 text-md -mt-1'>Maruti Suzuki Alto</p>

        <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
      </div>
    </div>

    <div className="flex flex-col gap-2 justify-between items-center">
     
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400 ">
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">403/43</h3>
            <p className="text-sm -mt-1 text-gray-600">
            {props.ride?.pickup}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400 ">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">403/43</h3>
            <p className="text-sm -mt-1 text-gray-600">
            {props.ride?.destination}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3  ">
        <i className="ri-money-rupee-circle-fill"></i>
          <div>
            <h3 className="text-lg font-medium">₹{props.ride?.fare} </h3>
            <p className="text-sm -mt-1 text-gray-600">
              Cash Cash
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WaitingForDriver

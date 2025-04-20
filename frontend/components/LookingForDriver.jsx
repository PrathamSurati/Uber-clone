import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div >
      <h5
        className="p-1 absolute w-[93%] text-center top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-2xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Lokking For Driver</h3>

      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400 ">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">403/43</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kakriya talav, Ahemdabad.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400 ">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">403/43</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kakriya talav, Ahemdabad.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3  ">
          <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Rs.135.90</h3>
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

export default LookingForDriver

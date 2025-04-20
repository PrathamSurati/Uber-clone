import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 absolute w-[93%] text-center top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-2xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
    </div>
  )
}

export default ConfirmRide

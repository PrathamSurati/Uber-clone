import React from "react";

const VehiclePanel = (props) => {
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
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car')
        }}
        className="w-full p-3 mb-2 flex justify-between items-center rounded-xl bg-gray-100  active:border-2 border-black"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base ">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm ">5 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('auto')
        }}
        className="w-full p-3 mb-2 flex justify-between items-center rounded-xl bg-gray-100  active:border-2 border-black"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base ">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm ">2 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto ride, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('motorcycle')
        }}
        className="w-full p-3 mb-2 flex justify-between items-center rounded-xl bg-gray-100  active:border-2 border-black"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base ">
            MotorCycle{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm ">4 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable MotorCycle ride, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.motorcycle}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;

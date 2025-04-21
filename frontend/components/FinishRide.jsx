import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div className="">
      <h5
        className="p-1 absolute w-[93%] text-center top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Finish This Ride
      </h3>

      <div className="flex items-center justify-between border-2 border-yellow-500 p-3 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h4 className="text-lg font-medium">Pratham Surati</h4>
        </div>
        <h5 className="text-lg font-semibold">4.3 km</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
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
          <div className="flex items-center gap-5 p-3">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Rs. 234.60</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to={"/Captain-home"}
            className="w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="mt-1 text-red-500 p-3 text-sm">*Click on Finish Ride button if you have completed your payment.</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;

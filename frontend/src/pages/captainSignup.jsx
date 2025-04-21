import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CaptainDataContext from '../context/CaptainContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [userData, setUserData] = useState({});

      const [vehicleColor, setVehicleColor] = useState("");
      const [vehiclePlate, setVehiclePlate] = useState("");
      const [vehicleCapacity, setVehicleCapacity] = useState("");
      const [vehicleType, setVehicleType] = useState("");

      const {captain, setCaptain } = useContext(CaptainDataContext)

      const navigate = useNavigate();

    
      const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email,password);
       const captainData = {
          fullname:{
            firstname : firstName,
            lastname : lastName
          },
          email: email,
          password: password,
          vehicle:{
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if(response.status === 201){
          const data = response.data;
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
        // console.log(userData);
        setEmail("");
        setPassword("");
        setfirstName("");
        setlastName("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity("");
        setVehicleType("");

      };
  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <form action="" onSubmit={submitHandler}>
          <img
            className="w-16 mb-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
            alt=""
          />

          <h3 className="text-lg font-medium mb-2">Enter Our captain's name</h3>
          <div className="flex gap-2 mb-2">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-lg placeholder:text-base"
              required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              type="text"
              placeholder="Firstname"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2  w-1/2 text-lg placeholder:text-base"
              required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              type="text"
              placeholder="Lastname"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Enter Email</h3>
          <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email..."
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password..."
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4 mb-2">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate Number"
            />
          </div>
          <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="Vehicle Capacity"
            />
            <select
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">car</option>  
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>

          <button
            className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Create Captain Account
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs leading-tight mt-3">
          By considering, Your consent to get calls, Whatsapp or SMS messages,
          including automated means, from Uber its affiliates to the number
          provided.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup

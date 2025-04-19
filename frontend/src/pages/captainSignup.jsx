import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [userData, setUserData] = useState({});
    
      const submitHandler = (e) => {
        e.preventDefault();
        // console.log(email,password);
        setUserData({
          fullName:{
            firstName : firstName,
            lastName : lastName
          },
          email: email,
          password: password,
        });
        console.log(userData);
        setEmail("");
        setPassword("");
        setfirstName("");
        setlastName("");
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

          <button
            className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Sign Up
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
        <p className="text-xs leading-tight">
          By considering, Your consent to get calls, Whatsapp or SMS messages,
          including automated means, from Uber its affiliates to the number
          provided.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup

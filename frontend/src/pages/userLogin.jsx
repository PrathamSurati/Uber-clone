import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [captainData, setCaptainData] = useState({});

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {

    e.preventDefault();
    // console.log(email,password);
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    )

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    // console.log(captainData);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <form action="" onSubmit={submitHandler} >
          <img
            className="w-16 mb-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
            alt=""
          />

          <h3 className="text-lg font-medium mb-2">Enter Email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e)=>{
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
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password..."
          />

          <button
            className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Login
          </button>

          <p className="text-center">New here? <Link to='/signup' className="text-blue-600">Create an Account</Link></p>
        </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mt-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          type="submit"
        >
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

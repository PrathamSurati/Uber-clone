import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from 'axios'
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

import { useEffect, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ride, setRide] = useState(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    // return () => clearInterval(locationInterval)
  }, []);

  socket.on("new-ride", (data) => {
    console.log(data);
    setRide(data);
    setRidePopupPanel(true);
  });

  // useEffect(() => {
  //   const handleNewRide = (data) => {
  //     console.log(data);
  //     setRide(data);
  //     setRidePopupPanel(true);
  //   };
  
  //   socket.on("new-ride", handleNewRide);
  
  //   return () => {
  //     socket.off("new-ride", handleNewRide);
  //   };
  // }, [socket]);


  async function confirmRide() {
 
    await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

        rideId: ride._id,
        captainId: captain._id,


    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    setRidePopupPanel(false)
    setConfirmRidePopupPanel(true)

}



  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/captain-login"}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-bold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/02zsm5dbhct51.jpg?width=640&crop=smart&auto=webp&s=0c9f361f7fafaf6302f9d0f26da323b27bdd856b"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed bottom-0 z-10 p-3 bg-white w-full px-3 py-10 pt-12 translate-y-full"
      >
        <RidePopup
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed bottom-0 z-10 p-3 bg-white w-full h-screen px-3 py-10 pt-12 translate-y-full"
      >
        <ConfirmRidePopUp
                     ride={ride}
                     setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;

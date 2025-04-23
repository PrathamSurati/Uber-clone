import React, { useRef, useState } from "react";
import { Link} from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  const location = useLocation();
  const rideData = location.state?.ride;

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

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
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/02zsm5dbhct51.jpg?width=640&crop=smart&auto=webp&s=0c9f361f7fafaf6302f9d0f26da323b27bdd856b"
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative"
      >
        <h5
          className="p-1 absolute w-[95%] text-center top-0"
          onClick={() => {
            //   props.setRidePopupPanel(false);
          }}
        >
          <i className="text-3xl text-gray-500 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">
          {rideData ? `Ride ID: ${rideData._id}` : "4 KM away"}
        </h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-14 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed bottom-0 z-10 p-3 bg-white w-full px-3 py-10 pt-12 translate-y-full"
      >
        <FinishRide
          rideData={rideData}
          setFinishRidePanel={setFinishRidePanel}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;

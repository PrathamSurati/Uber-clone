import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="h-10 w-10 flex items-center justify-center bg-[#eee] rounded-full">
            <i className="ri-map-pin-fill text-lg"></i>
          </h2>
          <h4 className="font-medium">{elem.description}</h4>
        </div>
      ))}
    </div>
  );
};


export default LocationSearchPanel;

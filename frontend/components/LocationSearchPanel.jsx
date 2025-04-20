import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {

    const locations = [
        "Alexanderplatz, 10178 Berlin, Germany",
        "Pariser Platz, 10117 Berlin, Germany",
        "Europaplatz 1, 10557 Berlin, Germany",
        "Friedrichstraße 43-45, 10117 Berlin, Germany",
        "Mühlenstraße 3-100, 10243 Berlin, Germany"
      ];
      

  return (
    <div>
        {
            locations.map(function(elem, id){
                return <div key={id} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 border-gray-100 border-2  active:border-black  rounded-xl p-2 justify-start my-2 items-center'>
                <h2 className='h-10 w-10 flex items-center justify-center bg-[#eee] rounded-full'><i className="ri-map-pin-fill text-lg"></i></h2>
                  <h4 className='font-medium'>{elem}</h4>
                </div>
            })
        }
      
      
    </div>
  )
}

export default LocationSearchPanel

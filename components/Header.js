import React, { Fragment } from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import { Slide, Fade } from "react-awesome-reveal"


export default function Header() {
   
    return (
<Fragment>
    <Fade triggerOnce>
            
            <div className="bg-opacity-70 z-300 bg-gray-900 flex item-center p-3 lg:px-5 shadow-md">
                <div className="flex items-center p-4">
                    <h2 className="font-bold text-white text-medium lg:text-lg  ">[Dev-/-folio]</h2>
                </div>
            <div className="hidden md:inline-flex ml-5 items-center rounded-full  bg-gray-100 p pr-6 flex-shrink">
                    <SearchIcon className="text-blue-400 pl-1 h-7"/>
                <input className=" inline-flex bg-transparent rounded-full focus-within:text-blue-600 outline-none placeholder-gray-400 pt-1 pb-1 pl-4 m-2 pr-4"/>
            </div>
                <h2 className="font-medium pl-5 text-gray-400 text-small pt-4 lg:text-lg  ">Projects Take Flight</h2>
        </div>
        </Fade>
      
    </Fragment>
    )
}



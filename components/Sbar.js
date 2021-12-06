import React from 'react'
import ChatStart from './ChatStart'

function Sbar() {
    return (
        <div className="relative bg-white bg-opacity-40 w-screen md:w-1/3 p-3 rounded-xl  mx-0 my-1">
            <div className="relative-lg shadow-md text-center p-4 bg-gradient-to-bl from-yellow-300 via-yellow-400 to-yellow-500">
                <div className="text-2xl text-black ">Recent Projects</div>
            </div>
                <ChatStart/>
                
        </div>
    )
}

export default Sbar

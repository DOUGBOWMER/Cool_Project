import React from 'react'
import { Fade } from "react-awesome-reveal"
import  Image from "next/Image" 
import Link from 'next/link'


export default function ChatStart() {
            
            return (
<div className=""> 
    <Fade cascade>
        <div className=" z-100 relative  p-6 max-w-sm mx-auto mt-5 rounded-xl shadow-md bg-gradient-to-br from-white via-gray-100 to bg-gray-300 flex  items-center space-x-4">
            
                <Link href="/chat" passHref >
            <div className=" flex-shrink-0 cursor-pointer ">
                <Image
                src="/chat.svg"
                alt="Chat Icon"
                height={36}
                width={36}
                />
                </div>
                </Link>
            <div className="">
                <div className=" text-black justify-center text-xl font-medium">Check Out Our Chat App</div>
                <p className="text-gray-500">Get this on your site today!</p> 
            </div>
        </div>
        
        <div className=" z-100 relative  p-6 max-w-sm mx-auto mt-5 rounded-xl shadow-md bg-gradient-to-br from-white via-gray-100 to bg-gray-300 flex  items-center space-x-4">
            <div className=" flex-shrink-0  ">
                <Image
                src="/chat.svg"
                alt="Chat Icon"
                height={36}
                width={36}
                />
            </div>
            <div className="">
                <div className=" text-black justify-center text-xl font-medium">Check Out Realtime Notifications</div>
                <p className="text-gray-500">Learn More </p> 
            </div>
        </div>
    </Fade>
  </div>          
    )
}


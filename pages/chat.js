import React from 'react'
import Header from '../components/Header'
import ChatWindow from '../components/ChatWindow'
import ChatBar from '../components/ChatBar'
function chat() {
    return (
        <div className=" h-screen w-screen bg-gradient-to-br from-gray-600 to-gray-800">
           <Header/>
        
           {/**MessageArea */} 
        <ChatWindow />
        {/**Input Box */}
        <ChatBar />
        
        </div>
    )
}

export default chat

//get current user

//getFriend

// query mesages comparing friend and user

//display message sorting by timstamp 
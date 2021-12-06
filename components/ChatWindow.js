import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, getFirestore } from 'firebase/firestore';
import { app } from '../firebaseConfig'
import Users from './Users'
import ChatBar from './ChatBar'
function ChatWindow() {

        const [userAccount] = useCollection(
            collection(getFirestore(app), "userAccount"),
            
            {
                snapshotListenOptions: {includeMetaDataChanges: true },
            }
        ); 
                    

    
    
    return (
<div>  
<div className="h-full w-0 sm:w-1/4 py-3 flex-col  shadow-lg bg-opacity-90 bg-white">
        {userAccount && (
            <span>
            
            {userAccount.docs.map((user) => (<Users key={user.id} displayName={user.data().displayName} />))}        
        </span>
        )}
    </div>
    
    <div className="flex w-screen h-20 fixed bottom-0 z-300 bg-gradient-to-t from-gray-800 to-gray-600 items-center shadow-md ">
        <div className="flexs shrink h-10 rounded-2xl bg-white ">

        </div>
    </div>
</div>
    

  )
}

export default ChatWindow

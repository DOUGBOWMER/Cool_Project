import React from 'react'

function VideoBg() {
    return (
        
    <div className="absolute z-0"  ><span>
      <video loop muted autoPlay
        src='/bgvideo.mp4'  type="video/mp4" className="absolute z-0 w-auto min-w-full min-h-auto  max-w-none" >
      </video>
      </span>
   </div>
        
    )
}

export default VideoBg

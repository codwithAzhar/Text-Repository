import React from 'react'

export default function Aleart(props) {
    // const captialized = (world)=>{
    //     let lower =world.toLowerCase();
    //     return lower.charAt(0).toUperCase() + lower.slice(1);
    // }

    
    return (
         <div style={{height:"50px"}}>   
            { props.alert &&<div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{props.alert.type}</strong>: {props.alert.msg}
            </div>
}
            </div>
            
  

            
        
    )
}

    

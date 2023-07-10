import React from "react";
import TypewriterComponent from "typewriter-effect";

const TypeWriter =()=>{
    return(
        <TypewriterComponent
            options ={{
                autoStart : true,
                loop : true,
                delay : 300,
                strings :[
                    "frontEnd developer",
                    "backEnd developer",
                    "fullStack web developer."
                ]
            }} 
            />)
}
export default TypeWriter;
import { useEffect } from "react";


function ColorCMP(props){

    useEffect(()=>{

    },[props])
    return(
        <>
        {
            (props.col == "good") ? <div style={{backgroundColor:"green",width:"55%",height:"40px",borderRadius:'60px'}}></div> 
                : (props.col == "average") ? <div style={{backgroundColor:"orange",width:"55%",height:"40px",borderRadius:'60px'}}></div> 
                : (props.col == "poor") ? <div style={{backgroundColor:"yellow",width:"55%",height:"40px",borderRadius:'60px'}}></div> 
                : (props.col == "bad") ? <div style={{backgroundColor:"red",width:"55%",height:"40px",borderRadius:'60px'}}></div> : ""
            
        
        }
        </>
    )
}

export default ColorCMP;
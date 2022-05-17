import { useState } from "react";
import './module.css'
const ContactCard =(props)=>{
    const {name ,email, Phone}=props;
    const [isActive, setIsActive]=useState(false)
    return(
     <div onClick={()=>setIsActive(!isActive)} className="main_div">
         <p>{name}</p>
         <p>{email}</p>
         {isActive && <div>{Phone}</div>}
     </div>
    );
}
export default ContactCard
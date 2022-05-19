import { useState } from "react"



export const Search=({setQuery})=>{
    const[user,setUser]=useState("");

    const handlechange=(e)=>{
        setUser(e.target.value);
    }
    const handleclick=(e)=>{
        e.preventDefault();
        setQuery(user)
    }
    return (
        <div>
           <div>
               <input type="text" placeholder="Enter the user name" value={user} id="name" name="name" onChange={handlechange} /><br></br>
               <button onClick={(e)=>handleclick(e)}>Submit </button>
           </div>
        </div>
    )
}
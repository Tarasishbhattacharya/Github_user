import { useEffect, useState } from "react"
import { Search } from "./Search"
import axios from "axios"
import { Singleuser } from "./Singleuser";


export const Githubrepo=()=>{
    const[query,setQuery]=useState("react");
    // const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);
    const[page,setPage]=useState(1)

    const showdata=(q="masai",page=1)=>{
        return axios("https://api.github.com/search/users",{
            method:"GET",
            params:{
                q,
                per_page:5,
                page,
            }

        })
    }

    useEffect(()=>{
        showdata(query,page).then((res)=>{setData(res.data.items)})
    },[query,page])

    console.log(data)
    return(
        <div>
            <Search setQuery={setQuery}/>
           {data.length==0 ?"No user found":data.map((d)=>{
              return <Singleuser data={d}/>
           })}<br></br>
           <button disabled={page==1} onClick={()=>{setPage(page-1)}}>prev</button>
           <button onClick={()=>{setPage(page+11)}}>Next</button>
        </div>
    )
}
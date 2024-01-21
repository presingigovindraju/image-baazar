import React,{useState} from "react";
import axios from "axios";




const ImageDisplay =()=>{

    const [search,setSearch] = useState('')

    function heandlingSearch(e){
         e.preventDefault()
         axios.get("https://api.unsplash.com/search/photos",
         {
            headers:{
                "Accept-Version" : "v1",
                Authorization:"Client-ID R26xop_HBblEtVVa4OmLioVFzn-qkRJRl2Wj04lGwQA"
            },
            params:{
                query : search
            }
         })
         .then((responce)=>{console.log(responce.data)})
         .catch((error)=>{console.log(error)})
    }


    return (
        <div>
            <form onSubmit={heandlingSearch}>
                <input type="text" placeholder="Enter Search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ImageDisplay
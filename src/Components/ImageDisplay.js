import React,{useState,useEffect} from "react";
import axios from "axios";




const ImageDisplay =({setFullData})=>{

    const [search,setSearch] = useState('')
    useEffect(()=>{
        heandlingSearch()
    },[])

    function heandlingSearch(e){
         if(e){
            e.preventDefault()
        }
         axios.get("https://api.unsplash.com/search/photos",
         {
            headers:{
                "Accept-Version" : "v1",
                "Authorization":`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params:{ 
                query : search || "random",
                per_page :30
            }
         })
         .then((responce)=>{setFullData(responce.data.results)})
         .catch((error)=>{console.log(error)})
    }


    return (
        <div className="formMiddle">
            
            <form onSubmit={heandlingSearch}>
                <h1>Image Bazaar</h1>
                <input type="text" placeholder="Enter Search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <button type="submit">Submit</button>
                {/* <a href="/"><button  type="submit" class="bn30">Button</button></a> */}
            </form>
        </div>
    )
}

export default ImageDisplay
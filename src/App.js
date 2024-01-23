import React,{useState} from "react";
import ImageDisplay from "./Components/ImageDisplay";
import ToDisplay from "./Components/ToDisplay";


const App =()=>{

  const [fullData,setFullData] = useState([])


  return (
    <div>
      <h1>Image Bazaar</h1>
      <ImageDisplay setFullData={setFullData}/>
      <ToDisplay fullData={fullData}/>
    </div>
  )
}


export default App
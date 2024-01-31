import React,{useState} from "react";
import ImageDisplay from "./Components/ImageDisplay";
import ToDisplay from "./Components/ToDisplay";
import "./Style.css"

const App =()=>{

  const [fullData,setFullData] = useState([])


  return (
    <div className="toMakeBackGrounColor">
      <ImageDisplay setFullData={setFullData}/>
      <ToDisplay  className="imageDisplay" fullData={fullData}/>
    </div>
  )
}


export default App
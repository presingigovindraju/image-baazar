import React from "react";



const ToDisplay = ({fullData})=>{




    return(
        <div className="imageGap">
            {
                fullData.map((item)=>(
                    <img className="imageSize" key={item.id} src={item.urls.small_s3} alt={item.alt_description}/>
                ))
            }
        </div>
    )
}

export default ToDisplay
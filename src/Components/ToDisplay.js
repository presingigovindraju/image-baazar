import React from "react";



const ToDisplay = ({fullData})=>{




    return(
        <div>
            {
                fullData.map((item)=>(
                    <img key={item.id} src={item.urls.small_s3} alt={item.alt_description}/>
                ))
            }

        </div>
    )
}

export default ToDisplay
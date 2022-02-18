import React, { ReactNode } from "react";

import './Loading.css'

interface ILoading{
    children:ReactNode
}

export const Loading :React.FC<ILoading>=({children})=>{
    return (
        <div className="Loading">
            <div className="text">
              <h1>{children}</h1>  
            </div>
        </div>
    )
}
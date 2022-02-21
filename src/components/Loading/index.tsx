import React from "react";
import ReactLoading from 'react-loading';

import './Loading.css'

interface ILoading{
    type:string;
    color:string;
}



export const Loading :React.FC<ILoading>=({type,color})=>{
    return (
        <div className="load">
        <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
        </div>
    )
}
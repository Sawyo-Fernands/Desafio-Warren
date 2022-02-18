import React from "react";

import './Modal.css'

import {AiOutlineClose} from 'react-icons/ai'


interface IModal{
    title:string | undefined,
    status:string | undefined,
    to:string | undefined,
    from:string | undefined,
    amount:number | undefined

    closeModal:()=>void
}

export const Modal: React.FC<IModal>=({title,status,closeModal,from,to,amount})=>{
    return (
        <div className="container">
            <div className="modal-container">
                <div className="header">
                    <h1 className="title">{title}</h1>
                    <div>
                    <AiOutlineClose className="close-modal-icon" size={23} onClick={()=>closeModal()}/>
                    </div>
                </div>
                <div className="status">
                <div className="w3-border">
                        <div className={`w3-grey ${status}`} ></div>
                        </div>
                    <div className="status-content" >
                        <div>
                            <p>Solicitado</p>
                        </div>
                        <div>
                            <p>Processando</p>
                        </div>
                        <div>
                            <p>Concluido</p>
                        </div>
                    </div>
                    <div className="from-to">
                        <h1>Tranferido de</h1>
                            <div className="flex-from-to">
                            <h3>{to}</h3>
                            <h3>{amount}R$</h3>
                            </div>
                        <h1>Para</h1>
                            <div className="flex-from-to">
                            <h3>{from}</h3>
                            <h3>{amount}R$</h3>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
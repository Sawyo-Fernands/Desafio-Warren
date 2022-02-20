import { useEffect, useState } from "react"
import { ITransactions } from "../interfaces/util"
import { api } from "../services/api"


export function useGetTransactionByID(id:string){

    const [showModal,setShowModal]=useState(false)
    const [modal,setModal]=useState<ITransactions>()

    useEffect(()=>{
        api.get<ITransactions>(`/transactions/${id}`)
        .then((res=>{
            setModal(res.data)   
            if(modal){
                setShowModal(true)
            }
        }))

    },[id])

    return {showModal,modal,setShowModal}

}
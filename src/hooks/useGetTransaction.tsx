import { useEffect, useState } from "react"
import { ITransactions } from "../interfaces/util"
import { api } from "../services/api"


export function useGetTransaction(){

    const [data,setData]=useState<ITransactions[]>([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

        api.get<ITransactions[]>('/transactions')
        .then((res=>{
            setLoading(false)
            setData(res.data)
        }))

    },[])

    return {data,loading}

}
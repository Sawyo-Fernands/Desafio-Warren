import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import './Home.css'

import {AiOutlineSearch} from 'react-icons/ai'

import { api } from "../../services/api";

import Logo from '../../assets/logo.png'
import { Loading } from "../../components/Loading";
import { Modal } from "../../components/Modal";


interface ITransactions{
    
    title:string,
    description:string,
    status:string,
    amount:number,
    id:string,
    date:string,
    to:string,
    from:string

}


export const Home :React.FC=()=>{

    //data
    const [data,setData]=useState<ITransactions[]>([])
  
    //modal logic
    const [id,setId]=useState('')
    const [modal,setModal]=useState<ITransactions>()
    const [showModal,setShowModal]=useState(false)
    //modal logic

    //Loading State
    const [loading,setLoading]=useState(true)
    //Loading state

    //filters logic
    const [filtro,setFilter]=useState('')
    const [filtroCategorias,setFilterCategory]=useState('')

    let dataFilter=data.filter(item =>item.title.toLocaleLowerCase().includes(filtro))

    if(filtroCategorias){
        dataFilter=data.filter(item =>item.status.toLocaleLowerCase().includes(filtroCategorias))
    }
    //filters logic

    useEffect(()=>{
            api.get<ITransactions>(`/transactions/${id}`)
            .then((res=>{
                setModal(res.data)   
                if(modal){
                    setShowModal(true)
                }
            }))

        },[id])


    useEffect(()=>{

        api.get<ITransactions[]>('/transactions')
        .then((res=>{
            setLoading(false)
            setData(res.data)
        }))

    },[])

    return(
        <>
            {showModal && <Modal 
            title={modal?.title} 
            status={modal?.status}
             closeModal={()=>setShowModal(false)}
             from={modal?.from}
             to={modal?.to}
             amount={modal?.amount}
             />
             }
        <header className="header">
            <div>
                <img src={Logo} alt="Warren Brasil" className="logo"/>
            </div>
        </header>

        <main className="main">
            <section className="section">
                <div className="flex-search">
                <div className="search">
                    <AiOutlineSearch size={20} color="lightgray" />
                    <input type="search"  id="" placeholder="....." value={filtro} onChange={(e)=>{
                        setFilter(e.target.value)}
                        
                        }/>
                </div>
                <select id="values" value={filtroCategorias}
                 onChange={(e)=>{setFilterCategory(e.target.value)}} className="options"
                  >
                    <option value=""></option>
                    <option value="processed">Concluido</option>
                    <option value="processing">Processando</option>
                    <option value="created">Criado</option>
                </select>
                    
                </div>
               
                <div className="table">

                    <table>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Valor</th>
                     </tr>

                     
        {loading && <Loading children="Carregando..."/>}

                     {
                    dataFilter.map((item)=>{
                        return(     
                            <tr onClick={()=>{
                                setId(item.id)
                            }}>
                                <td key={item.id}>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.status}</td>
                                <td>{item.amount}</td>
                            </tr>  
                    )          
                       }        
                    )
                }
                    </table>     
                </div>
            </section>
        </main>
        </> 
        )
}
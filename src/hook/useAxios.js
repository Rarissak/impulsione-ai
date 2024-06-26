import { useEffect, useState, useRef } from "react"

export function useAxiosWithDependecies(configRequest,dependencies) {
    const {axiosInstance, method, url, othersConfig = {},} = configRequest
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const[error,setError] = useState('')
     
     useEffect(()=>{
         const fetchData = async() =>{
             try{
                 const res = await axiosInstance[method.toLowerCase()](url,{
                     ...othersConfig,
                 })
 
                 setData(res.data)
                 
             }
             catch(error)
             {   
                 console.log(error.message)
                 setError(error.message)
             }finally{
                 setLoading(false)
             }
         }
         fetchData();
     },dependencies)
 
 
    
 return[data, loading, error]
 }

export default function useAxios(configRequest,) {
   const {axiosInstance, method, url, othersConfig = {},} = configRequest
   const [data,setData] = useState([])
   const [loading, setLoading] = useState(true)
   const[error,setError] = useState('')
    
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await axiosInstance[method.toLowerCase()](url,{
                    ...othersConfig,
                })

                setData(res.data)
                
            }
            catch(error)
            {   
                console.log(error.message)
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[])


   
return[data, loading, error]
}
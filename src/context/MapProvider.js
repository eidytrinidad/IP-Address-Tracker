import React,{createContext} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const MapContext = createContext()

export const MapProvider = ({children}) => {

    
    
    const [ipInfo, setipInfo] = useState({})
    const [ipAddress, setIpAddress] = useState('')
    const url=`http://ip-api.com/json/${ipAddress}`

    const getIpData= async()=>{
        const resp= await fetch(url)
        const data = await resp.json()
        setipInfo(data)
    }

    useEffect(() => {
        getIpData()
       
    }, [ipAddress])

    return (
        <MapContext.Provider value={{ipInfo,ipAddress,setIpAddress}} >
           
            {
                children
            }
        </MapContext.Provider>
        
    )
}

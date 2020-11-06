import React,{createContext} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const MapContext = createContext()

export const MapProvider = ({children}) => {

    
    const [ipInfo, setipInfo] = useState({})
    const [ipAddress, setIpAddress] = useState(0)
    const url=`https://geo.ipify.org/api/v1?apiKey=at_WnI3OALCmE6ScW9DvyNvZm4cuSckI&ipAddress=${ipAddress}`

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

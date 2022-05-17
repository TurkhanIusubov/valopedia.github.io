import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";

const ValoApi = createContext()

export const ValoApiProvider = ({children}) => {

    const [agents, setAgents] = useState([])
    const [weapons, setWeapons] = useState([])
    const [maps, setMaps] = useState([])

    useEffect(()=>{
        const getAgents = async () =>{
            const agents_data = await axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
            setAgents(agents_data.data.data)

            const weapons_data = await axios.get(`https://valorant-api.com/v1/weapons`)
            setWeapons(weapons_data.data.data)

            const maps_data = await axios.get(`https://valorant-api.com/v1/maps`)
            setMaps(maps_data.data.data)
        }
        getAgents()

        
    },[])

    const values = {
        agents,
        setAgents,
        weapons,
        setWeapons,
        maps,
        setMaps
    }

    return(
        <ValoApi.Provider value={values}>{children}</ValoApi.Provider>
    )
}

export const useValoApi = () => useContext(ValoApi)
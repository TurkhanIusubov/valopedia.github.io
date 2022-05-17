import React, {useState, useEffect} from "react";
import { useValoApi } from "../../Context/ValoApi"

import styles from './Agents.module.css'

import AgentCard from "./AgentCard"

const Agents = () => {
    
    const {agents, weapons, maps} = useValoApi()

    const [filterValo, setFilterValo] = useState({ filterAgents:[], searchAgents:'' })
    
    useEffect(()=>{
        setFilterValo({ filterAgents:agents, searchAgents:'' })
    },[agents])

    const onChange_input = (e) => {
        setFilterValo({ filterAgents:[...agents], searchAgents: e.target.value })
    }

    const filterAgents_function = filterValo.filterAgents.filter(filterAgent=>(
    filterAgent.displayName.toLowerCase().includes(filterValo.searchAgents.toLowerCase()) !== false
    ))


    return(
        agents.length === 0 || weapons.length === 0 || maps.length === 0 || filterValo.filterAgents.length === 0
        ? null
        : (
            <div className={styles.agent_container}>
                
                <div className={styles.form_div}>
                    <form className={styles.form} onSubmit={e=>e.preventDefault()}>
                        <input type="text" value={filterValo.searchAgents} onChange={onChange_input} className={styles.input} placeholder='Search name...' />
                    </form>
                </div>

                {
                    filterAgents_function.map((agent, ix)=>(
                        <AgentCard agent={agent} key={ix} />
                    ))
                }
                
                <footer className={styles.footer}>
                        
                        <div className={styles.a_container}>
                            <div className={styles.a_icons_div}>
                                <a href="https://www.facebook.com/profile.php?id=100074313310707" target='_blank' rel="noreferrer" > <i className={`fa-brands fa-facebook-square ${styles.a_icon}`}></i> </a>
                                <a href="https://www.instagram.com/turkhan_iusubov/" target='_blank' rel="noreferrer" > <i className={`fa-brands fa-instagram-square ${styles.a_icon}`}></i> </a>
                                <a href="https://twitter.com/Turkhan_Iusubov" target='_blank' rel="noreferrer"  > <i className={`fa-brands fa-twitter-square ${styles.a_icon}`}></i> </a>
                                <a href="https://github.com/TurkhanIusubov" target='_blank' rel="noreferrer" > <i className={`fa-brands fa-github-square ${styles.a_icon}`}></i> </a>
                            </div>
                            <a href="mailto:turxanyusubov@gmail.com" target='_blank' rel="noreferrer" > turxanyusubov@gmail.com </a>
                        </div>
                    <div className={styles.coded_by_turkhan_iusubov}>
                        <p>Copyright © 2022</p>
                        <p>Coded by <span>Turkhan Iusubov</span>.</p>
                    </div>
                </footer>
            </div>
        )
    )
}

export default Agents
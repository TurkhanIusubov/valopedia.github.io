import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useValoApi } from "../../Context/ValoApi";
import {FaBars} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

import styles from './Header.module.css'
import logo from '../Images/logo.png'

const Header = () => {

    const {agents, weapons, maps} = useValoApi()
    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

    return(
        agents.length === 0 || weapons.length === 0 || maps.length === 0
        ? (
            <div className={styles.loading_page}>
                <h1>Loading <span></span> <span></span> <span></span></h1>
            </div> 
        )
        : (
            <div className={styles.container}>
            
                <NavLink to='/' className={styles.logo_container}>
                    <img src={logo} alt="Logo" />
                    <h1>Valopedia</h1>
                </NavLink>

                <div className={''}>
                    <FaBars className={styles.bars} onClick={showMenu} />
                    <ul className={menu===false ? styles.ul : styles.show}>
                        <IoClose className={styles.close} onClick={showMenu} />
                        <li>
                            <NavLink to='/' onClick={showMenu} className={({ isActive }) => isActive ? styles.blue : styles.red} >Home</NavLink>
                        </li>
        
                        <li>
                            <NavLink to='/agents' onClick={showMenu} className={({ isActive }) => isActive ? styles.blue : styles.red} >Agents</NavLink>
                        </li>
        
                        <li>
                            <NavLink to='/weapons' onClick={showMenu} className={({ isActive }) => isActive ? styles.blue : styles.red} >Weapons</NavLink>
                        </li>
        
                        <li>
                            <NavLink to='/maps' onClick={showMenu} className={({ isActive }) => isActive ? styles.blue : styles.red} >Maps</NavLink>
                        </li>
                        
                    </ul>
                </div>

            </div>
        )
    )
}

export default Header
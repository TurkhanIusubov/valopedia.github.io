import React from "react";
import {useValoApi} from '../../Context/ValoApi'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

import styles from './Home.module.css'

import shape from '../Images/shape1.png'

const Home = () => {
    
    const {agents, weapons, maps} = useValoApi()
    const sova = agents.filter(item=>item.displayName.includes('Sova')===true)
    const photo = sova.map(item=>item.bustPortrait)
    
    return (
        agents.length === 0 || weapons.length === 0 || maps.length === 0
        ? null
        : (
            <div className={styles.home}>
                <div className={styles.text_container}>
                    <h1>This is <span>VALORANT</span> collection.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime voluptas obcaecati incidunt corporis accusantium, amet voluptatibus a error molestiae.</p>
                    <Link to='/agents' className={styles.link}><button>Get Start</button></Link>
                    <div className={styles.home_icons}>
                        <a href='https://twitter.com/Turkhan_Iusubov' target='_blank' rel="noreferrer" ><FaIcons.FaTwitterSquare className={styles.first_icon} /></a>
                        <a href='https://github.com/TurkhanIusubov' target='_blank' rel="noreferrer" ><FaIcons.FaGithubSquare className={styles.last_icon} /></a>
                    </div>
                </div>
                <div className={styles.images}>
                    <img src={photo} alt="Sova" loading='lazy' className={styles.sova} />
                    <img src={shape} alt="..." loading='lazy' className={styles.shape} />
                </div>
            </div>
        )
    )
}

export default Home
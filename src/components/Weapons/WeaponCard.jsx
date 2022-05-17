import React from 'react'
import {FiChevronDown} from 'react-icons/fi'

import styles from './Weapons.module.css'


function WeaponCard({weapon}) {

    const playVideo = (e) => {
        const videos = document.querySelectorAll('video#videos')

        videos.forEach(item=>{
            item.volume = 0.5
            if(e.target!==item){
                item.pause()
            }
        })
    }

    const text_function = (text, maxLength) => {
        if(!text) return null
        if(text.length <= maxLength) return text
        return `${text.substring(0, maxLength)} ...`
    }

    const toggle_function = (e) => {
        // console.log(e.target.nextSibling.nextSibling.nextSibling.nextSibling);
        const toggle_element = e.target.parentNode.childNodes[5]
        toggle_element.classList.toggle(styles.weapon_toggle_className)
        e.target.classList.toggle(styles.weapon_e_paragraph)
    }

    return (
        <div className={styles.weapon_cards}>

            <h2>{weapon.displayName}</h2>

            {
                !weapon.shopData ? <p onClick={toggle_function} >Null <FiChevronDown className={styles.weapon_downIcon} /></p> : (
                    <p onClick={toggle_function} >{weapon.shopData.categoryText} <FiChevronDown className={styles.downIcon} /></p>
                )
            }

            <div className={styles.weapon_img1}>
                <img src={weapon.displayIcon} alt="" loading='lazy' />
            </div>

            <h3>Fullversion</h3>

            <h2>{text_function((weapon.skins[weapon.skins.length-1].levels[weapon.skins[weapon.skins.length-1].levels.length-1].streamedVideo !== null 
                    ? weapon.skins[weapon.skins.length-1].displayName
                    : weapon.skins[weapon.skins.length-2].levels[weapon.skins[weapon.skins.length-2].levels.length-1].streamedVideo !== null
                    ? weapon.skins[weapon.skins.length-2].displayName
                    : weapon.skins[weapon.skins.length-6].levels[weapon.skins[weapon.skins.length-6].levels.length-1].streamedVideo !== null 
                    ? weapon.skins[weapon.skins.length-6].levels[0].displayName
                    : weapon.skins[weapon.skins.length-8].levels[weapon.skins[weapon.skins.length-8].levels.length-1].streamedVideo !== null
                    ? weapon.skins[weapon.skins.length-8].displayName
                    : weapon.skins[weapon.skins.length-10].levels[weapon.skins[weapon.skins.length-10].levels.length-1].streamedVideo !== null
                    ? weapon.skins[weapon.skins.length-10].displayName
                    : weapon.skins[2].displayName),23)}</h2>
        
            {
                !weapon.weaponStats ? <ul className={styles.weapon_ul}><li>Null</li></ul> : (
                    <ul className={styles.weapon_ul}>
                        <li>
                            Fire Rate: <span>{weapon.weaponStats.fireRate}</span>
                        </li>
                        <li>
                            Magazine Size: <span>{weapon.weaponStats.magazineSize}</span>
                        </li>
                        <li>
                            Run Speed Multiplier: <span>{weapon.weaponStats.runSpeedMultiplier}</span>
                        </li>
                        <li>
                            Equip Time Seconds: <span>{weapon.weaponStats.equipTimeSeconds}</span>
                        </li>
                        <li>
                            Reload Time Seconds: <span>{weapon.weaponStats.reloadTimeSeconds}</span>
                        </li>
                        <li>
                            First Bullet Accuracy: <span>{weapon.weaponStats.firstBulletAccuracy}</span>
                        </li>
                        <li>
                            Shotgun Pellet Count: <span>{weapon.weaponStats.shotgunPelletCount}</span>
                        </li>
                    </ul>
                )
            }
        
            <div className={styles.weapon_img2}>
                <img src={
                    weapon.skins[weapon.skins.length-1].levels[weapon.skins[weapon.skins.length-1].levels.length-1].streamedVideo !== null 
                    ? weapon.skins[weapon.skins.length-1].displayIcon
                    : weapon.skins[weapon.skins.length-2].levels[weapon.skins[weapon.skins.length-2].levels.length-1].streamedVideo !== null
                    ? weapon.skins[weapon.skins.length-2].displayIcon
                    : weapon.skins[weapon.skins.length-6].levels[weapon.skins[weapon.skins.length-6].levels.length-1].streamedVideo !== null 
                    ? weapon.skins[weapon.skins.length-6].levels[0].displayIcon
                    : weapon.skins[weapon.skins.length-8].levels[weapon.skins[weapon.skins.length-8].levels.length-1].streamedVideo !== null
                    ? weapon.skins[weapon.skins.length-8].displayIcon
                    : weapon.skins[weapon.skins.length-10].levels[weapon.skins[weapon.skins.length-10].levels.length-1].streamedVideo !== null
                    ? weapon.skins[weapon.skins.length-10].displayIcon
                    : weapon.skins[2].displayIcon
                } alt="" />
            </div>

            <video controls className={styles.weapon_video} id='videos' onPlay={playVideo} >
                <source src={
                    weapon.skins[weapon.skins.length-1].levels[weapon.skins[weapon.skins.length-1].levels.length-1].streamedVideo !== null 
                    ? weapon.skins[weapon.skins.length-1].levels[weapon.skins[weapon.skins.length-1].levels.length-1].streamedVideo 
                    : weapon.skins[weapon.skins.length-2].levels[weapon.skins[weapon.skins.length-2].levels.length-1].streamedVideo 
                    || weapon.skins[weapon.skins.length-6].levels[weapon.skins[weapon.skins.length-6].levels.length-1].streamedVideo 
                    || weapon.skins[weapon.skins.length-8].levels[weapon.skins[weapon.skins.length-8].levels.length-1].streamedVideo 
                    || weapon.skins[weapon.skins.length-10].levels[weapon.skins[weapon.skins.length-10].levels.length-1].streamedVideo 
                    || weapon.skins[2].levels[weapon.skins[2].levels.length-1].streamedVideo 
                } 
                type='video/mp4' />
            </video>

        </div>
    )
}

export default WeaponCard
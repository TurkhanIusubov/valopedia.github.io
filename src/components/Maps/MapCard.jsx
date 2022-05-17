import React from 'react'
import * as MdIcons from 'react-icons/md'

import styles from './Maps.module.css'

function MapCard({map}) {

    function little_to_big_img(e) {

        const big_img_container = e.target.parentNode.parentNode.childNodes[5]
        big_img_container.classList.add(styles.big_img_container)
        big_img_container.classList.remove(styles.big_img_container_copy)

        const map_cards = document.querySelectorAll('#map_cards')
        map_cards.forEach(card=>{
            card.classList.add(styles.map_cards_copy)
            card.classList.remove(styles.map_cards)
        })

        const map_container = e.target.parentNode.parentNode.parentNode
        map_container.classList.add(styles.map_container_copy)
        map_container.classList.remove(styles.map_container)

        const map_footer = e.target.parentNode.parentNode.parentNode.lastChild
        map_footer.classList.add(styles.footer_copy)
        map_footer.classList.remove(styles.footer)

        const map_form_div = e.target.parentNode.parentNode.parentNode.firstChild
        map_form_div.classList.add(styles.form_div_copy)
        map_form_div.classList.remove(styles.form_div)

    }

    function close_big_img(e) {

        const big_img_container = e.target.parentNode.parentNode
        big_img_container.classList.add(styles.big_img_container_copy)
        big_img_container.classList.remove(styles.big_img_container)

        const map_cards = document.querySelectorAll('#map_cards')
        map_cards.forEach(card=>{
            card.classList.add(styles.map_cards)
            card.classList.remove(styles.map_cards_copy)
        })

        const map_container = e.target.parentNode.parentNode.parentNode.parentNode
        map_container.classList.add(styles.map_container)
        map_container.classList.remove(styles.map_container_copy)

        const map_footer = e.target.parentNode.parentNode.parentNode.parentNode.lastChild
        map_footer.classList.add(styles.footer)
        map_footer.classList.remove(styles.footer_copy)

        const map_form_div = e.target.parentNode.parentNode.parentNode.parentNode.firstChild
        map_form_div.classList.add(styles.form_div)
        map_form_div.classList.remove(styles.form_div_copy)

        e.target.parentNode.parentNode.parentNode.scrollIntoView({block: 'nearest'})
        
    }

    // DRAWING IMAGE FUNCTIONS

    function drawing_img_fullscreen(e) {

        const drawing_img_container = e.target.parentNode.parentNode.childNodes[6]
        drawing_img_container.classList.add(styles.drawing_img_container)
        drawing_img_container.classList.remove(styles.drawing_img_container_copy)

        const map_cards = document.querySelectorAll('#map_cards')
        map_cards.forEach(card=>{
            card.classList.add(styles.map_cards_copy)
            card.classList.remove(styles.map_cards)
        })

        const map_container = e.target.parentNode.parentNode.parentNode
        map_container.classList.add(styles.map_container_copy)
        map_container.classList.remove(styles.map_container)

        const map_footer = e.target.parentNode.parentNode.parentNode.lastChild
        map_footer.classList.add(styles.footer_copy)
        map_footer.classList.remove(styles.footer)

        const map_form_div = e.target.parentNode.parentNode.parentNode.firstChild
        map_form_div.classList.add(styles.form_div_copy)
        map_form_div.classList.remove(styles.form_div)

    }

    function close_drawing_img(e) {

        const drawing_img_container = e.target.parentNode.parentNode
        drawing_img_container.classList.add(styles.drawing_img_container_copy)
        drawing_img_container.classList.remove(styles.drawing_img_container)

        const map_cards = document.querySelectorAll('#map_cards')
        map_cards.forEach(card=>{
            card.classList.add(styles.map_cards)
            card.classList.remove(styles.map_cards_copy)
        })

        const map_container = e.target.parentNode.parentNode.parentNode.parentNode
        map_container.classList.add(styles.map_container)
        map_container.classList.remove(styles.map_container_copy)

        const map_footer = e.target.parentNode.parentNode.parentNode.parentNode.lastChild
        map_footer.classList.add(styles.footer)
        map_footer.classList.remove(styles.footer_copy)

        const map_form_div = e.target.parentNode.parentNode.parentNode.parentNode.firstChild
        map_form_div.classList.add(styles.form_div)
        map_form_div.classList.remove(styles.form_div_copy)

        e.target.parentNode.parentNode.parentNode.scrollIntoView({block: 'nearest'})
        
    }

    return (
        <div className={styles.map_cards} id='map_cards' >
            <h1>{map.displayName}</h1>

            <div className={styles.map_little_img} onClick={little_to_big_img} >
                <img src={map.splash} alt='' loading='lazy' />
            </div>

            <h2>Coordinates:</h2>
            <h3>{map.coordinates}</h3>

            <div className={styles.map_drawing_img}>
                {
                    map.displayIcon === null 
                    ? <div className={styles.map_drawing_child_div}><h1>Null</h1></div> 
                    : <img src={map.displayIcon} alt="" loading='lazy' onClick={drawing_img_fullscreen} />
                }
            </div>


            <div className={styles.big_img_container_copy}>
                <div className={styles.big_img_child_container}>
                    <div className={styles.big_img_div}>
                        <img src={map.splash} alt="" loading='lazy' />
                    </div>
    
                    <MdIcons.MdClose className={styles.big_img_close_icon} onClick={close_big_img} />
                </div>
            </div>

            
            <div className={styles.drawing_img_container_copy}>
                <div className={styles.drawing_img_child_container}>
                    <div className={styles.drawing_img_div}>
                        <img src={map.displayIcon} alt="" loading='lazy' />
                    </div>
    
                    <MdIcons.MdClose className={styles.drawing_img_close_icon} onClick={close_drawing_img} />
                </div>
            </div>

        </div>
    )
}

export default MapCard
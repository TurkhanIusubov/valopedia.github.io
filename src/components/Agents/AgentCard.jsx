import React from 'react'
import * as MdIcons from 'react-icons/md'

import styles from './Agents.module.css'

function AgentCard({agent}) {

    function onPlay_audio(e) {
        const input_range = e.target.nextSibling.firstChild.lastChild.firstChild
        const volume_up_icon = e.target.nextSibling.firstChild.firstChild.firstChild
        const volume_down_icon = e.target.nextSibling.firstChild.firstChild.childNodes[1]
        const volume_off_icon = e.target.nextSibling.firstChild.firstChild.lastChild
        
        input_range.addEventListener('input', ()=>{
            e.target.volume= input_range.value / 100
            if(input_range.value<=0){

                volume_up_icon.classList.add(styles.agent_volume_icon_up)
                volume_up_icon.classList.remove(styles.agent_up_volume)

                volume_off_icon.classList.add(styles.agent_off_volume)
                volume_off_icon.classList.remove(styles.agent_volume_icon_off)
                
                volume_down_icon.classList.remove(styles.agent_down_volume)
                volume_up_icon.classList.add(styles.agent_volume_icon_down)

            } else if(input_range.value <= 50 && input_range.value !== 0 ){
                e.target.muted = false

                volume_down_icon.classList.add(styles.agent_down_volume)
                volume_up_icon.classList.remove(styles.agent_volume_icon_down)

                volume_up_icon.classList.add(styles.agent_volume_icon_up)
                volume_up_icon.classList.remove(styles.agent_up_volume)

                volume_off_icon.classList.remove(styles.agent_off_volume)
                volume_off_icon.classList.add(styles.agent_volume_icon_off)

            } else if(input_range.value > 50) {
                e.target.muted = false

                volume_off_icon.classList.remove(styles.agent_off_volume)
                volume_off_icon.classList.add(styles.agent_volume_icon_off)

                volume_up_icon.classList.remove(styles.agent_volume_icon_up)
                volume_up_icon.classList.add(styles.agent_up_volume)
                
                volume_down_icon.classList.remove(styles.agent_down_volume)
                volume_up_icon.classList.add(styles.agent_volume_icon_down)
            }
        })
        const audio_wav = document.querySelectorAll('audio#audio_wav')
        audio_wav.forEach(audio=>{
            if(e.target !== audio){
                audio.pause()
            }
        })
    }

    function volume_off_onClick(e) {
        const e_audio = e.target.parentNode.parentNode.parentNode.previousSibling
        const input_range = e.target.parentNode.nextSibling.firstChild
        const volume_up_icon = e.target.parentNode.firstChild
        const volume_down_icon = e.target.parentNode.childNodes[1]
        const volume_off_icon = e.target.parentNode.lastChild

        if(e_audio.volume !== 0){
            e_audio.muted = !e_audio.muted
        }

        if(e_audio.muted){
            volume_up_icon.classList.add(styles.agent_volume_icon_up)
            volume_up_icon.classList.remove(styles.agent_up_volume)

            volume_off_icon.classList.add(styles.agent_off_volume)
            volume_off_icon.classList.remove(styles.agent_volume_icon_off)
            
            volume_down_icon.classList.remove(styles.agent_down_volume)
            volume_up_icon.classList.add(styles.agent_volume_icon_down)

            input_range.value = 0
        } else {
            input_range.value = e_audio.volume * 100

            if(e_audio.volume <= 0.5 && e_audio.volume !== 0 ){
                volume_down_icon.classList.add(styles.agent_down_volume)
                volume_up_icon.classList.remove(styles.agent_volume_icon_down)

                volume_up_icon.classList.add(styles.agent_volume_icon_up)
                volume_up_icon.classList.remove(styles.agent_up_volume)

                volume_off_icon.classList.remove(styles.agent_off_volume)
                volume_off_icon.classList.add(styles.agent_volume_icon_off)

            } else if(e_audio.volume > 0.5) {
                volume_off_icon.classList.remove(styles.agent_off_volume)
                volume_off_icon.classList.add(styles.agent_volume_icon_off)

                volume_up_icon.classList.remove(styles.agent_volume_icon_up)
                volume_up_icon.classList.add(styles.agent_up_volume)
                
                volume_down_icon.classList.remove(styles.agent_down_volume)
                volume_up_icon.classList.add(styles.agent_volume_icon_down)
            }
        
        }
    }

    function h2_onClick_for_play_audio(e) {
        const e_audio = e.target.nextSibling
        const e_i = e.target.lastChild.firstChild
        
        if(e_audio.paused){
            e_audio.play()
            e_i.classList.add('fa-pause')
            e_i.classList.remove('fa-play')
        } else {
            e_audio.pause()
            e_i.classList.add('fa-play')
            e_i.classList.remove('fa-pause')
        }

        const volume_control_parent_div = e.target.nextSibling.nextSibling.firstChild
        volume_control_parent_div.classList.add(styles.agent_volume_control_parent_div_toggle)
        volume_control_parent_div.classList.remove(styles.agent_volume_control_parent_div)
        
    }

    function stop_audio(e) {
        const h2_child_i = e.target.previousSibling.lastChild.firstChild
        h2_child_i.classList.add('fa-play')
        h2_child_i.classList.remove('fa-pause')

        const volume_control_parent_div = e.target.nextSibling.firstChild
        volume_control_parent_div.classList.add(styles.agent_volume_control_parent_div)
        volume_control_parent_div.classList.remove(styles.agent_volume_control_parent_div_toggle)
        
    }

    return (
        <div className={styles.agent_cards}>
            <h1>{agent.displayName}</h1>
            <p>{agent.description}</p>
            <div className={styles.agent_img}>
                <img src={agent.displayIcon} alt="Icon" loading='lazy' />
            </div>
            <h2 onClick={h2_onClick_for_play_audio}>{agent.role.displayName} <span className={styles.agent_audio_icon_parent}><i className={`fa-solid fa-play ${styles.agent_audio_icon}`} ></i></span></h2>

            <audio id='audio_wav' onPlay={onPlay_audio} onEnded={stop_audio} onPause={stop_audio} >
                <source src={
                    agent.voiceLine.mediaList[agent.voiceLine.mediaList.length-1].wave
                } 
                type='audio/wav'
                />
            </audio>

            <div className={styles.agent_volume_control_container}>
                <div className={styles.agent_volume_control_parent_div}>
                    <div className={styles.agent_volume_icons}>
                        <MdIcons.MdVolumeUp onClick={volume_off_onClick} className={styles.agent_up_volume} />
                        <MdIcons.MdVolumeDown onClick={volume_off_onClick} className={styles.agent_volume_icon_down} />
                        <MdIcons.MdVolumeOff onClick={volume_off_onClick} className={styles.agent_volume_icon_off} />
                    </div>
                    <div className={styles.agent_volume_input_div}>
                        <input type="range" defaultValue='100' step='5' className={styles.agent_inputRange} />
                    </div>
                </div>
            </div>

            <div className={styles.agent_abilities}>
                {agent.abilities.map((item, ix)=><p key={ix}>{item.displayName}</p>).slice(0,3)}
            </div>
        </div>
    )
}

export default AgentCard
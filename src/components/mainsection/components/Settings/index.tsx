import SessionCards from '../SessionCards'
import Basic from './components/Basic'
import Notification from './components/Notification'
import Privacy from './components/Privacy'
import SecuriyComponent from './components/Security'
import styles from './style.module.scss'

import { useState } from 'react'

const SettingsSection = () => {

    const [selected, setSelected] = useState('Basic')

    const style= {
        text:{
            color : selected==='Basic' ? '#000' : '#8E8E8E'
        }
    }
    
  return (
    <div className={styles.settings_main_container}>
        <p className={styles.settings_header}>Settings</p>

        <div className={styles.settings_base_section}>
            <ul className={styles.settings_list}>
                <li onClick={() => setSelected('Basic')} style={selected === 'Basic'? {color : 'red'} : {color:'black'}}>Basic</li>
                <li onClick={() => setSelected('Security')} style={selected === 'Security'? {color : 'red'} : {color:'black'}}>Security</li>
                <li onClick={() => setSelected('Notification')} style={selected === 'Notification'? {color : 'red'} : {color:'black'}}>Notification</li>
                <li onClick={() => setSelected('Privacy')} style={selected === 'Privacy'? {color : 'red'} : {color:'black'}}>Privacy</li>
            </ul>

            {selected==='Basic' && <Basic/>}
            {selected==='Security' && <SecuriyComponent />}
            {selected==='Notification' && <Notification />}
            {selected==='Privacy' && <Privacy />}

        </div>

        <div className={styles.settings_session_section}>
            <SessionCards />
        </div>
    </div>
  )
}

export default SettingsSection
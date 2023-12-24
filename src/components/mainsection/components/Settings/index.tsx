import SessionCards from '../SessionCards'
import Basic from './components/Basic'
import Notification from './components/Notification'
import Privacy from './components/Privacy'
import SecuriyComponent from './components/Security'
import styles from './style.module.scss'
import colors from '../../../../styles/_colors.scss'

import { useState } from 'react'

const SettingsSection = () => {

    const [selected, setSelected] = useState('Basic')
    
  return (
    <div className={styles.settings_main_container}>
        <p className={styles.settings_header}>Settings</p>

        <div className={styles.settings_base_section}>
            <ul className={styles.settings_list}>
                <li onClick={() => setSelected('Basic')} style={selected === 'Basic'? {color : '#444BB6'} : {color:'black'}}>Basic</li>
                <li onClick={() => setSelected('Security')} style={selected === 'Security'? {color : '#444BB6'} : {color:'black'}}>Security</li>
                <li onClick={() => setSelected('Notification')} style={selected === 'Notification'? {color : '#444BB6'} : {color:'black'}}>Notification</li>
                <li onClick={() => setSelected('Privacy')} style={selected === 'Privacy'? {color : '#444BB6'} : {color:'black'}}>Privacy</li>
            </ul>

            {selected==='Basic' && <Basic/>}
            {selected==='Security' && <SecuriyComponent />}
            {selected==='Notification' && <Notification />}
            {selected==='Privacy' && <Privacy />}

        </div>

        <div className={styles.settings_session_section}>
            <SessionCards />
            <SessionCards />
            <SessionCards />
        </div>
    </div>
  )
}

export default SettingsSection

import { useState } from 'react'

import SessionCards from '../SessionCards'
import Basic from './components/Basic'
import Notification from './components/Notification'
import Privacy from './components/Privacy'
import SecuriyComponent from './components/Security'

import styles from './style.module.scss'
import style1 from '../SessionCards/style.module.scss'

import { FaApple } from "react-icons/fa";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaSafari } from "react-icons/fa6";
// import safariIcon from '@assets/safari.png'
// import stackoverflowIcon from '@assets/stackoverflow.png'

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
            <SessionCards>
                <div>
                    <FaApple />
                </div>

                <div className={style1.content_container}>
                    <div>
                    <div>
                        <p>IOS</p>
                        <p>Top platform</p>
                    </div>
                    </div>

                    <div>
                    <p>Active sessions</p>
                    <p>14</p>
                    </div>
                </div>
            </SessionCards>

            <SessionCards>
                <div>
                    <FaSafari />
                </div>

                <div className={style1.content_container}>
                    <div>
                    <div>
                        <p>Safari</p>
                        <p>Top platform</p>
                    </div>
                    </div>

                    <div>
                    <p>Active sessions</p>
                    <p>14</p>
                    </div>
                </div>
            </SessionCards>

            <SessionCards>
                <div>
                    <IoLogoStackoverflow />
                </div>

                <div className={style1.content_container}>
                    <div>
                    <div>
                        <p>Stackoverflow</p>
                        <p>Top platform</p>
                    </div>
                    </div>

                    <div>
                    <p>Active sessions</p>
                    <p>14</p>
                    </div>
                </div>
            </SessionCards>
        </div>
    </div>
  )
}

export default SettingsSection
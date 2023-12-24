import SessionCards from '../SessionCards'
import SecuriyComponent from './components/Security'
import styles from './style.module.scss'

const SettingsSection = () => {
  return (
    <div className={styles.settings_main_container}>
        <p className={styles.settings_header}>Settings</p>

        <div className={styles.settings_base_section}>
            <ul className={styles.settings_list}>
                <li>Basic</li>
                <li>Security</li>
                <li>Notification</li>
                <li>Privacy</li>
            </ul>

            <SecuriyComponent />
        </div>

        <div className={styles.settings_session_section}>
            <SessionCards />
        </div>
    </div>
  )
}

export default SettingsSection
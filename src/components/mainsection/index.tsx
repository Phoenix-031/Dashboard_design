import SettingsSection from './components/Settings'
import TopBar from './components/Topbar'
import styles from './style.module.scss'

const Mainsection = () => {
  return (
    <div className={styles.main_section_container}>
      <TopBar />
      <SettingsSection/>
    </div>
  )
}

export default Mainsection
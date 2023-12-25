//components
import MainSection from '@/components/mainsection'
import SideSection from '@/components/sidesection'

//styelesheet
import styles from './style.module.scss'

//context provider
import ToggleContextProvider from '@/context/ToggleContext'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <ToggleContextProvider>
          <SideSection />
          <MainSection />
      </ToggleContextProvider>
    </div>
  )
}

export default Dashboard
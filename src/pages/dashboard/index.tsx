import styles from './style.module.scss'
import Mainsection from '@/components/mainsection'
import Sidesection from '@/components/sidesection'

//context provider
import ToggleContextProvider from '@/context/ToggleContext'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <ToggleContextProvider>
          <Sidesection />
          <Mainsection />
      </ToggleContextProvider>
    </div>
  )
}

export default Dashboard
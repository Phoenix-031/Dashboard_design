import styles from './style.module.scss'
import Mainsection from '@/components/mainsection'
import Sidesection from '@/components/sidesection'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
        <Sidesection />
        <Mainsection />
    </div>
  )
}

export default Dashboard
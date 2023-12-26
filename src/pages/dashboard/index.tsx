import { useContext } from 'react'

//components
import MainSection from '@/components/mainsection'
import SideSection from '@/components/sidesection'

//styelesheet
import styles from './style.module.scss'
import backdropstyle from './backdrop.module.scss'

import { AppContext, AppContextType } from '@/context/AppContext'

//context provider
import AppContextProvider from '@/context/AppContext'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <AppContextProvider>
          <SideSection />
          <MainSection />
          <Backdrop />
      </AppContextProvider>
    </div>
  )
}

const Backdrop = () => {
  const { toggle, setToggle } = useContext(AppContext) as AppContextType;

  const handleBackdropClick = () => {
    if (toggle) {
      setToggle(false);
    }
  };

  return <div className={`${backdropstyle.backdrop} ${toggle ? backdropstyle['open'] : ''}`} onClick={handleBackdropClick}></div>;
};



export default Dashboard
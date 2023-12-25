import { useContext } from 'react'

//components
import MainSection from '@/components/mainsection'
import SideSection from '@/components/sidesection'

//styelesheet
import styles from './style.module.scss'
import backdropstyle from './backdrop.module.scss'

import { ToggleContext, ToggleContextType } from '@/context/ToggleContext'

//context provider
import ToggleContextProvider from '@/context/ToggleContext'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <ToggleContextProvider>
          <SideSection />
          <MainSection />
          <Backdrop />
      </ToggleContextProvider>
    </div>
  )
}

const Backdrop = () => {
  const { toggle, setToggle } = useContext(ToggleContext) as ToggleContextType;

  const handleBackdropClick = () => {
    if (toggle) {
      setToggle(false);
    }
  };

  return toggle ? <div className={backdropstyle.backdrop} onClick={handleBackdropClick}></div> : null;
};



export default Dashboard
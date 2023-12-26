import { useContext } from 'react';

import ChatComponent from './components/Chat';
import ProfileComponent from './components/Profile';
import SettingsSection from './components/Settings'
import TopBar from './components/Topbar'
import styles from './style.module.scss'
import CalendarComponent from './components/Calendar';
import OffersComponent from './components/Offers';
import { AppContext, AppContextType } from '@/context/AppContext';

const MainSection = () => {

  const {selected} = useContext(AppContext) as AppContextType;

  const componentMap: { [key: string]: React.ReactNode } = {
    profile: <ProfileComponent />,
    chat: <ChatComponent />,
    calendar: <CalendarComponent />,
    offers: <OffersComponent />,
    settings : <SettingsSection/>
};

const selectedComponent = componentMap[selected.toLowerCase()];
  
  return (
    <div className={styles.main_section_container}>
      <TopBar />
      {selectedComponent}
    </div>
  )
}

export default MainSection
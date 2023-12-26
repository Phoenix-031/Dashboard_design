import { useState } from 'react';

//interface
interface SessionCardProps {
    icon: React.ReactNode;
    title: string;
    platform: string;
    sessions: number;
}

//components
import Basic from './components/Basic';
import Notification from './components/Notification';
import Privacy from './components/Privacy';
import SecurityComponent from './components/Security';


import SessionCards from '../SessionCards';

//style modules
import styles from './style.module.scss';
import style1 from '../SessionCards/style.module.scss';

//icons
import { FaApple } from "react-icons/fa";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaSafari } from "react-icons/fa6";

const SettingsSection = () => {
  const [selected, setSelected] = useState('Basic');

  const menuItems = ['Basic', 'Security', 'Notification', 'Privacy'];

  //creating a component map for conditional rendering
  const componentMap: { [key: string]: React.ReactNode } = {
    Basic: <Basic />,
    Security: <SecurityComponent />,
    Notification: <Notification />,
    Privacy: <Privacy />,
  };


  return (
    <div className={styles.settings_main_container}>
      <p className={styles.settings_header}>Settings</p>

      <div className={styles.settings_base_section}>
        <ul className={styles.settings_list}>
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setSelected(item)}
              style={{
                color: selected === item ? '#444BB6' : 'inherit',
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {componentMap[selected] !== undefined && componentMap[selected]}
      </div>

      <div className={styles.settings_session_section}>
        <SessionCard icon={<FaApple />} title="IOS" platform="Top platform" sessions={14} />
        <SessionCard icon={<FaSafari />} title="Safari" platform="Top platform" sessions={35} />
        <SessionCard
          icon={<IoLogoStackoverflow />}
          title="Stackoverflow"
          platform="Top platform"
          sessions={16}
        />
      </div>
    </div>
  );
};

const SessionCard = ({ icon, title, platform, sessions } : SessionCardProps) => (
  <SessionCards>
    <div>{icon}</div>
    <div className={style1.content_container}>
      <div>
        <div>
          <p>{title}</p>
          <p>{platform}</p>
        </div>
      </div>
      <div>
        <p>Active sessions</p>
        <p>{sessions}</p>
      </div>
    </div>
  </SessionCards>
);

export default SettingsSection;

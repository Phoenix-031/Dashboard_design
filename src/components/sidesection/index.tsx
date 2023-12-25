
import styles from './style.module.scss'

//icons
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbCardsFilled } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { FaStar } from "react-icons/fa";



//library imports
import { useContext } from 'react';


// assets
import userIcon from '@assets/profile.jpeg'
import profile1 from '@assets/profile1.png'
import profile2 from '@assets/profile2.png'
import profile3 from '@assets/profile3.png'
import profile5 from '@assets/profile5.png'

import { ToggleContext, ToggleContextType } from '@/context/ToggleContext';

//interface

interface SidebarMenuItemProps {
    icon: React.ReactNode;
    label: string;
    selected?: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarHeadingProps {
    onLogout: () => void;
}

interface UserInfoProps {
    userName: string;
    role: string;
    userIcon: string;
}

const SideSection = () => {

    const {toggle,setToggle,selected,setSelected}= useContext(ToggleContext) as ToggleContextType

  return (

        <div className={`${styles.sidebar_container} 
                         ${toggle ? styles['toggle']: ''}`
                        }>
            {/* <Backdrop /> */}

            <SidebarHeading onLogout={() => setToggle(false)} />
            <UserInfo userName="Catherine Reed" role="Admin" userIcon={userIcon} />

            <ul className={styles.sidebar_menu}>
                <SidebarMenuItem icon={<FaRegUser />} label="Profile" selected={selected} setSelected={setSelected}  toggle={toggle} setToggle={setToggle}/>
                <SidebarMenuItem icon={<IoChatbubbleEllipses />} label="Chat" selected={selected} setSelected={setSelected} toggle={toggle} setToggle={setToggle}/>
                <SidebarMenuItem icon={<SlCalender />} label="Calendar" selected={selected} setSelected={setSelected} toggle={toggle} setToggle={setToggle}/>
                <SidebarMenuItem icon={<TbCardsFilled />} label="Offers" selected={selected} setSelected={setSelected} toggle={toggle} setToggle={setToggle}/>
                <SidebarMenuItem icon={<IoSettings />} label="Settings" selected={selected} setSelected={setSelected} toggle={toggle} setToggle={setToggle}/>
            </ul>


      <SidebarCommunitySection />

        </div>
  )
}

const SidebarHeading = ({ onLogout } : SidebarHeadingProps) => (
  <div className={styles.sidebar_heading}>
    <div>
    <div>
      <GrTechnology />
    </div>
    <span>TechHazel</span>
    </div>
    <p onClick={onLogout}>
      <CiLogout />
    </p>
  </div>
);

const UserInfo = ({ userName, role, userIcon } : UserInfoProps) => (
  <div className={styles.sidebar_userinfo}>
    <div className={styles.sidebar_userinfo_imgcontainer}>
      <img src={userIcon} alt="User image" />
    </div>
    <span>{userName}</span>
    <span>
      <span><FaStar /></span>
      {role}
    </span>
  </div>
);

const SidebarMenuItem = ({ icon, label, setSelected,selected, toggle,setToggle }:SidebarMenuItemProps) => (
  <li onClick={() => {
    setSelected(label)
    if(toggle){
        setToggle(false)
    }
  }}>
    {icon}
    <span 
    style={{
        color: selected === label ? '#444BB6' : 'black',
      }}>
        {label}
    </span>
  </li>
);

const SidebarCommunitySection = () => {
  const images = [profile1, profile2, profile3, profile5];
  return(
  <div className={styles.sidebar_community_section_container}>
    <div className={styles.sidebar_community_members}>
      {
      images.map((image,index) => (
        <img key={index} src={image} alt={`User ${index + 1}`} />
      ))
      }
      <div>
        <IoAddCircle />
      </div>
    </div>
    <p className={styles.sidebar_community_section_text}>Find new members in our community</p>
  </div>
)};

// export const Backdrop: React.FC = () => {
//   const { toggle, setToggle } = useContext(ToggleContext) as ToggleContextType;

//   const handleBackdropClick = () => {
//     if (toggle) {
//       setToggle(false);
//     }
//   };

//   return toggle ? <div className={backdropstyle.backdrop} onClick={handleBackdropClick}></div> : null;
// };


export default SideSection
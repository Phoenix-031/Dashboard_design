
import styles from './style.module.scss'

//icons
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbCardsFilled } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
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

import { AppContext, AppContextType } from '@/context/AppContext';

//interface
interface SidebarMenuItemProps {
    icon: React.ReactNode;
    label: string;
    selected?: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserInfoProps {
    userName: string;
    role: string;
    userIcon: string;
}

const SideSection = () => {

    const {toggle,setToggle,selected,setSelected}= useContext(AppContext) as AppContextType

  return (

        <div className={`${styles.sidebar_container} 
                         ${toggle ? styles['toggle']: ''}`
                        }>
            <SidebarHeading />
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

const SidebarHeading = () => (
  <div className={styles.sidebar_heading}>
    <div>
      <div>
        <GrTechnology />
      </div>
      <span>TechHazel</span>
    </div>
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
        color: selected === label ? '#444BB6' : 'inherit',
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

export default SideSection
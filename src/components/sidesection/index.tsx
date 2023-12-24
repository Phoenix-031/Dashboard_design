
import styles from './style.module.scss'

//icons
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbCardsFilled } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";

// assets
import userIcon from '@assets/profile.jpeg'

const Sidesection = () => {
  return (
    <div className={styles.sidebar_container}>
        <div className={styles.sidebar_heading}>
            <img src="" alt="" />
            <span>TechHazel</span>
        </div>

        <div className={styles.sidebar_userinfo}>
            <div className={styles.sidebar_userinfo_imgcontainer}>
                <img src={userIcon} alt="User image" />
            </div>
            <span>Catherine Reed</span>
            <span>Admin</span>
        </div>

        <ul className={styles.sidebar_menu}>
            <li>
                <FaRegUser />
                <span>Profile</span>
            </li>
            <li>
                <IoChatbubbleEllipses />
                <span>Chat</span>
            </li>
            <li>
                <SlCalender />
                <span>Calendar</span>
            </li>
            <li>
                <TbCardsFilled />
                <span>Offers</span>
            </li>
            <li>
                <IoSettings />
                <span>Settings</span>
            </li>
        </ul>

        <div className={styles.sidebar_community_section_container}>
            <div className={styles.sidebar_community_members}>
                {/* <ul> */}
                <img src={userIcon} alt="User image" />
                <img src={userIcon} alt="User image" />
                <img src={userIcon} alt="User image" />
                <img src={userIcon} alt="User image" />
                <img src={userIcon} alt="User image" />
                {/* </ul> */}
            </div>
            <p className={styles.sidebar_community_section_text}>Find new members in our community</p>
        </div>
    </div>
  )
}

export default Sidesection
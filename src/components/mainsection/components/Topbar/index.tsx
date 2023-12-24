import { useContext } from 'react';

import { IoSearch } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { LuArrowRightSquare } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

import { ToggleContext, ToggleContextType } from "@/context/ToggleContext";

import styles from './style.module.scss'

const TopBar = () => {

  const {toggle,setToggle} = useContext(ToggleContext) as ToggleContextType
  
  const handleToggle = () => {
    if(!toggle){
      setToggle(true)
    }
    console.log(toggle)
  }
  
  return (
    <div className={styles.topbar_main_container}>
        <div className={styles.topbar_searchicon_container}>
            <p onClick={handleToggle}><GiHamburgerMenu /></p>
            <p><IoSearch /></p>
        </div>
        <input className={styles.topbar_search_field}
        type="text"
         placeholder="Search something..."
         />
        <div className={styles.topbar_icons_container}>
            <LuBellRing />
            <LuArrowRightSquare />
        </div>

    </div>
  )
}

export default TopBar
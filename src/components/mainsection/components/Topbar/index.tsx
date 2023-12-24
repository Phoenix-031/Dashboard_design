import { IoSearch } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { LuArrowRightSquare } from "react-icons/lu";

import styles from './style.module.scss'

const TopBar = () => {
  return (
    <div className={styles.topbar_main_container}>
        <div className={styles.topbar_searchicon}>
            <IoSearch />
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
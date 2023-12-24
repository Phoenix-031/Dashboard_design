
import { BsThreeDotsVertical } from "react-icons/bs";

import styles from './style.module.scss'


import { ReactNode } from "react";

const SessionCards = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.main_container}>

      {children}
      <div>
        <BsThreeDotsVertical />
      </div>
      
    </div>
  )
}

export default SessionCards
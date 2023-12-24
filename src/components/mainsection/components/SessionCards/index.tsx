
import { FaApple } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import styles from './style.module.scss'


const SessionCards = () => {
  return (
    <div className={styles.main_container}>
      <div>
        <FaApple />
      </div>

      <div className={styles.content_container}>
        <div>
          <div>
            <p>IOS</p>
            <p>Top platform</p>
          </div>
        </div>

        <div>
          <p>Active sessions</p>
          <p>14</p>
        </div>
      </div>

      <div>
        <BsThreeDotsVertical />
      </div>
      
    </div>
  )
}

export default SessionCards
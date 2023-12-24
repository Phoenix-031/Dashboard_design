import styles from './style.module.scss'

//icons
import { FaLock } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";


import { Switch } from 'antd';

const SecuriyComponent = () => {

    // const [checked, setChecked] = useState(false);

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      }
    
  return (
    <div className={styles.security_maincontainer}>
        <div className={styles.security_sectionone}>
            <div className={styles.security_card_typeone}>
                <div>
                    <FaLock />
                </div>
                <div>
                    <p>Require to change password</p>
                    <p>Require a password change for new accounts</p>
                </div>
                <div>
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>

            <div className={styles.security_card_typeone}>
                <div>
                    <AiOutlineStop />
                </div>
                <div>
                    <p>Require to change password</p>
                    <p>Require a password change for new accounts</p>
                </div>
                <div>
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>

            <div className={styles.security_card_typeone}>
                <div>
                    <IoLocation />
                </div>
                <div>
                    <p>Require to change password</p>
                    <p>Require a password change for new accounts</p>
                </div>
                <div>
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>

            <div className={styles.security_card_typeone}>
                <div>
                    <FaUserFriends />
                </div>
                <div>
                    <p>Require to change password</p>
                    <p>Require a password change for new accounts</p>
                </div>
                <div>
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecuriyComponent
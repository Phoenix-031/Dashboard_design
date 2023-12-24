import styles from './style.module.scss'

//icons
import { FaLock } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

import { RiChatPrivateFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";

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

        <div className={styles.security_sectiontwo}>
            <div className={styles.passwordlength_card}>
                <div>
                    <FaLock />
                </div>
                <div className={styles.passwordlength_section}>
                    <p>Password length</p>
                    <p>Password length not less than...</p>
                </div>
                <div>
                    8
                </div>
            </div>

            <div className={styles.privatemessage_card}> 
                <div>
                    <RiChatPrivateFill />
                </div>

                <div className={styles.privatemessage_card_section}>
                    <p>Private messages</p>
                    <p>Who can send private message</p>

                    <div>
                        <p>Team</p>
                        <p>Nobody</p>
                        <p>Choose</p>
                    </div>

                </div>

            </div>

            <div className={styles.visibility_card}>
                <div>
                    <MdOutlineRemoveRedEye />
                </div>
                <div className={styles.visibility_card_section}>
                    <p>Visibility</p>
                    <p>See all profiles except..</p>

                <div>
                    <p>Emma bron</p>
                    <p>David jhonson</p>
                </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default SecuriyComponent
import React from 'react';

// styling and ui components
import { Switch } from 'antd';
import styles from './style.module.scss';

//icons
import { FaLock } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { RiChatPrivateFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



interface SecurityCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    switchChecked: boolean;
    onSwitchChange: (checked: boolean) => void;
    }

const SecurityCard = ({ icon, title, description, switchChecked, onSwitchChange }:SecurityCardProps) => (
  <div className={styles.security_card_typeone}>
    <div>{icon}</div>
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
    <div>
      <Switch defaultChecked={switchChecked} onChange={onSwitchChange} />
    </div>
  </div>
);

const SettingsSection = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className={styles.security_maincontainer}>
      <div className={styles.security_sectionone}>
        {securityCardData.map((data) => (
          <SecurityCard key={data.title} {...data} onSwitchChange={onChange} />
        ))}
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
                        <p>Choose<FaGreaterThan /></p>
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
                      <p>Emma bron <RxCross2 /></p>
                      <p>David jhonson  <RxCross2 /></p>
                  </div>
                </div>
            </div>

        </div>
    </div>
  );
};

const securityCardData = [
  {
    icon: <FaLock />,
    title: 'Require to change password',
    description: 'Require a password change for new accounts',
    switchChecked: false,
  },
  {
    icon: <AiOutlineStop />,
    title: 'Re-passworrds ban',
    description: 'Ban on the use of re-passwords',
    switchChecked: false,
  },
  {
    icon: <IoLocation />,
    title: 'Allow use location',
    description: 'Allow application to use your location',
    switchChecked: false,
  },
  {
    icon: <FaUserFriends />,
    title: 'Allow pubic profile',
    description: 'Allow everyone to see your profile',
    switchChecked: false,
  },
];

export default SettingsSection;

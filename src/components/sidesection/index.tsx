import React from 'react'

import styles from './style.module.scss'

const Sidesection = () => {
  return (
    <div>
        <div className='sidebar_heading'>
            <img src="" alt="" />
            <span>TechHazel</span>
        </div>

        <div className="sidebar_userinfo">
            <img src="" alt="" />
            <span></span>
            <span></span>
        </div>

        <ul className="sidebar_menu">
            <li>
                <img src="" alt="" />
                <span>Profile</span>
            </li>
            <li>
                <img src="" alt="" />
                <span>Profile</span>
            </li>
            <li>
                <img src="" alt="" />
                <span>Profile</span>
            </li>
            <li>
                <img src="" alt="" />
                <span>Profile</span>
            </li>
            <li>
                <img src="" alt="" />
                <span>Profile</span>
            </li>
        </ul>

        <div className="sidebar_community_section_container">
            <div className="sidebar_community_members">
                <img src="" alt="" />
            </div>
            <p className="sidebar_community_section_text">Find new members in our community</p>
        </div>
    </div>
  )
}

export default Sidesection
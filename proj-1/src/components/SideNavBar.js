import React from "react";
import classes from './SideNavBar.module.css'
import {AiFillHome} from 'react-icons/ai'

const SideNavBar = () => {
  return <div className={classes['side-bar']}>
<AiFillHome className={classes.AiFillHome} />
  </div>
};

export default SideNavBar;


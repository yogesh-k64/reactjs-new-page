import React, { useState } from "react";
import classes from "./Tabs.module.css";

const Tabs = () => {
  const [showTab1, setShowTab1] = useState(true);
  const [showTab2,setShowTab2] =useState(false);

  const tab1SelectHandler = () => {
     return (setShowTab1(true),
      setShowTab2(false))
  };
 const tab2SelectHandler = () => {
     return (setShowTab2(true),
      setShowTab1(false))
  };
  return (
    <React.Fragment>
      <button
        className={`${classes["tab-button"]} `}
        onClick={tab1SelectHandler}
      >
        metrics
      </button>
      <button className={classes["tab-button"]} onClick={tab2SelectHandler}>
        users
      </button>
      <div
        className={` ${classes["tab-content"]}  ${
          showTab1 ? classes.select : ""
        } `}
      >
        tab 1
      </div>
      <div
        className={`${classes["tab-content"]} ${
          showTab2 ? classes.select : ""
        } `}
      >
        tab 2
      </div>
    </React.Fragment>
  );
};

export default Tabs;

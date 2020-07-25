import React from "react";
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>
        Welcome to the <br /> MERN Stack blog!
      </h1>
    </div>
  );
};

export default Header;


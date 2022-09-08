import React from "react";
import Styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={Styles.container}>
      <span className={Styles.logo}>yanawa</span>
      <img src={"/images/ic-myprofile.png"} />
    </div>
  );
}

export default Header;

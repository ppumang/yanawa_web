import React from "react";
import Styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.main_banner}>
        <span className={Styles.font1}>
          서울대입구 98년생 자취생 다모여!!!!!
        </span>
        <span className={Styles.font2}>사상 최초 자취생 동갑내기 플랫폼</span>
      </div>
    </div>
  );
}

export default Banner;

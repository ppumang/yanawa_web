import React from "react";
import Styles from "./Trend.module.css";

function Trend(props) {
  return (
    <div className={Styles.container}>
      <span>이시각 98년생 트렌드</span>
      <div></div>
    </div>
  );
}

export default Trend;

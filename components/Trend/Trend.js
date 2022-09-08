import React from "react";
import Styles from "./Trend.module.css";

let trends = [
  {
    name: "중간고사",
  },
  {
    name: "사상최초",
  },
  {
    name: "동갑내기 플랫폼",
  },
  {
    name: "야나와",
  },
  {
    name: "맥주 땡기노",
  },
  {
    name: "냠냠",
  },
];

function Trend(props) {
  return (
    <div className={Styles.container}>
      <span>이시각 98년생 트렌드</span>
      <div className={Styles.trend_container}>
        {trends.map((x, idx) => (
          <div className={Styles.trend_box} key={idx}>
            <span>#{x.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trend;

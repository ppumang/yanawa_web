import React from "react";
import Styles from "./GroupBuying.module.css";

let items = [
  {
    name: "생선구이 100개",
    image_url: "/images/buying-fish.png",
  },
  {
    name: "페브리즈 100개",
    image_url: "/images/buying-febreeze.png",
  },
  {
    name: "프로바이오틱스 100개",
    image_url: "/images/buying-probio.png",
  },
  {
    name: "칼슘캡슐 100개",
    image_url: "/images/buying-calcium.png",
  },
];

function GroupBuying(props) {
  return (
    <div className={Styles.container}>
      <span>공동구매</span>
      <div className={Styles.container2}>
        {items.map((x, idx) => (
          <div key={idx}>
            <img
              src={x.image_url}
              style={{
                width: 300,
                height: 200,
                borderRadius: 10,
              }}
            />
            <span>{x.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupBuying;

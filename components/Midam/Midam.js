import React from "react";
import Styles from "./Midam.module.css";

let midams = [
  {
    name: "최의현",
    comment: "야나와 앱에 칭찬합니다 칸 아이디어를 제공해줬어요",
    hint: "하남자임",
  },
  {
    name: "한우현",
    comment: "술을 잘마셔요",
    hint: "거짓말쟁이임",
  },
  {
    name: "장준혁",
    comment: "농구를 잘해요",
    hint: "법조인임",
  },
];

function Midam(props) {
  return (
    <div className={Styles.container}>
      <span>실시간 98년생 미담</span>
      <span>#칭찬합니다</span>
      <div className={Styles.container2}>
        {midams.map((x, idx) => (
          <div key={idx} className={Styles.midam_box}>
            <span>이름: {x.name}</span>
            <span>내용: {x.comment}</span>
            <span>힌트: {x.hint}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Midam;

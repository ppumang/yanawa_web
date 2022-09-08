import React from "react";
import Styles from "./Hot.module.css";

let articles = [
  {
    profile: {
      name: "김민재",
      image_url: "/images/default_profile_image.jpeg",
    },
    title: "같이 탁구칠 사람 구함",
    text: "실력은 오픈 5부고 서울대입구 최은권탁구장에서 운동함~ 선착순 10명 받음",
  },
  {
    profile: {
      name: "최의현",
      image_url: "/images/default_profile_image.jpeg",
    },
    title: "맥주 공동구매 할사람 선착순 10명",
    text: "1000개 시킬거임 관심있으면 채팅 ㄱ",
  },
  {
    profile: {
      name: "장준혁",
      image_url: "/images/default_profile_image.jpeg",
    },
    title: "농구할 사람",
    text: "농구가 제일조아~",
  },
];

function Hot(props) {
  return (
    <div className={Styles.container}>
      <span>핫 게시물</span>

      <div className={Styles.container2}>
        {articles.map((x, idx) => (
          <div key={idx}>
            <div className={Styles.profile_box}>
              <img
                src={x.profile?.image_url}
                className={Styles.profile_image}
              />
              <span>{x.profile?.name}</span>
            </div>
            <span> {x.title} </span>
            <span>{x.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hot;

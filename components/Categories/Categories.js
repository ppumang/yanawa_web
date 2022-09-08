import React from "react";
import Styles from "./Categories.module.css";

let categories = [
  {
    name: "밥먹을사람",
    image_url: "/images/category-meal.jpeg",
    comment: "혼밥 시러... 같이 맛집 갈 사람!",
  },
  {
    name: "공유 배달",
    image_url: "/images/category-delivery.jpeg",
    comment: "같이 마라탕 시켜먹을 사람?",
  },
  {
    name: "공동구매",
    image_url: "/images/category-shopping.png",
    comment:
      "우유 10팩 사면 할인해주는데 혼자서는 다 못먹을 것 같고... 같이 공구할사람?",
  },
  {
    name: "운동 친구",
    image_url: "/images/category-sports.png",
    comment: "같이 배드민턴 칠 사람~",
  },
  {
    name: "스터디",
    image_url: "/images/category-study.png",
    comment: "시험공부 혼자 하니까 힘이 안난다... 친구야 같이하자!",
  },
  {
    name: "반려견 산책",
    image_url: "/images/category-dogs.jpeg",
    comment: "우리 버터 산책시켜줘야 하는데 같이 할 친구 있어?",
  },
];

function Categories(props) {
  return (
    <div className={Styles.container}>
      {categories.map((x) => (
        <div>
          <div
            style={{
              backgroundImage: `url(${x.image_url})`,
              width: 300,
              height: 200,
              flex: "0 0 auto",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <span className={Styles.font1}>{x.name}</span>
          </div>
          <div className={Styles.container2}>
            <span className={Styles.category_comment}>{x.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

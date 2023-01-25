import React from "react";
import styles from "./styles.module.css";
import Slider from "./Slider";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Index() {
  const imgs = [
    "https://tut.az/files/images/items/386/386050v9a95628d.jpg",
    "https://tut.az/files/images/items/386/386050v704a2cc0.jpg",
    "https://tut.az/files/images/items/386/386050v861d2687.jpg",
    "https://tut.az/files/images/items/386/386050v38cfd1e9.jpg",
    "https://tut.az/files/images/items/386/386050v8227d58b.jpg",
    "https://tut.az/files/images/items/386/386050vd9d3b1d9.jpg",
    "https://tut.az/files/images/items/386/386050ve356869c.jpg",
    "https://tut.az/files/images/items/386/386050v4bc2e143.jpg",
  ];
  return (
    <div className={styles.container}>
      <Slider imgs={imgs} />
      <Link
        style={{ textDecoration: "none", color: "#fff" }}
        to={"/details"}
        target="_blank"
      >
        <div className={styles.dahaCox}>
          <p>Daha ətraflı</p> <AiOutlineArrowRight />
        </div>
      </Link>
      <button className={styles.like}>
        <AiOutlineHeart />
      </button>
      <div className={styles.info}>
        <div className={styles.price}>4 500 AZN</div>
        <div className={styles.time}>Bakı, bugün, 16:06</div>
      </div>
    </div>
  );
}

export default Index;

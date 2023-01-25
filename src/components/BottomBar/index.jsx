import React from "react";
import styles from "./style.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className={styles.container}>
      <Link to={"/"} className={styles.item}>
        <AiOutlineHome fontSize={25} />
        Əsas
      </Link>
      <Link to={"new"} className={styles.new}>
        <BsPlusCircleFill fontSize={40} />
      </Link>
      <div className={styles.item}>
        <AiOutlineHeart fontSize={25} />
        Seçilmişlər
      </div>
    </div>
  );
}

export default Index;

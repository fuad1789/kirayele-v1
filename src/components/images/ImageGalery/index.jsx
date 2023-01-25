import React from "react";
import styles from "../style.module.css";
import { GrClose } from "react-icons/gr";
function Index({ imgs, top, setGalery }) {
  const handleClick = () => {
    setGalery(100);
  };

  return (
    <div style={{ top: `${top}%` }} className={styles.butunSekliller}>
      <div
        className={styles.close}
        style={{ top: `${top}%` }}
        onClick={handleClick}
      >
        <GrClose />
      </div>
      {imgs.map((img) => (
        <img src={img} />
      ))}
    </div>
  );
}

export default Index;

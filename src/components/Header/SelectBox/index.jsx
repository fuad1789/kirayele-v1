import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import seherler from "../../../api/seherler.json";
import styles from "./style.module.css";

function Index({
  setIsSelectBox,
  setCity,
  screenWidth,
  selectPosition,
  setSelectPosition,
}) {
  const handleClick = (e) => {
    setCity(e);
    setIsSelectBox(false);
    if (screenWidth < 800) {
      setSelectPosition(150);
    }
  };

  return (
    <div className={styles.selectBox} style={{ right: screenWidth < 800 ? `${selectPosition}%` : "50%" }}>
      {screenWidth < 800 && (
        <>
          <div className={styles.mobileSelectBoxNavBar}>
            <div
              className={styles.back}
              onClick={() => {
                setSelectPosition(150);
                document.body.style.overflowY = "scroll";
              }}
            >
              <IoIosArrowBack color="black" fontSize={35} />
            </div>
            <h1 className={styles.title}>Şəhər seçiminiz edin</h1>
          </div>
          <div style={{ width: "100%", height: "50px" }} />
        </>
      )}
      {seherler.map((item, index) => {
        return (
          <div
            className={styles.selectItem}
            key={index}
            onClick={() => handleClick(item)}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Index;

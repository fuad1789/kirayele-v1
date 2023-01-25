import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import SelectBox from "./SelectBox";
import Menu from "./Menu";
import Register from "./Register";
import {
  AiFillHeart,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineFilter,
} from "react-icons/ai";
import { BsFillPlusCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Index() {
  const [isSelectBox, setIsSelectBox] = useState(false);
  const [city, setCity] = useState("Şəhərlər");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(100);
  const [IsRegister, setIsRegister] = useState(false);
  const [selectPosition, setSelectPosition] = useState(150);

  const handleSelectBox = () => {
    if (screenWidth < 800) {
      document.body.style.overflow = "hidden";
      setSelectPosition(selectPosition == 150 ? 50 : 150);
    } else {
      document.body.style.overflow = "auto";
      setIsSelectBox(!isSelectBox);
    }
  };
  const handleRegister = () => {
    setIsRegister(!IsRegister);
    console.log(document.body);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    if (IsRegister) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [IsRegister]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.logo}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to={"/"}>
              Kirayələmeyebilersen.az
            </Link>
          </h1>
          {screenWidth > 800 && (
            <div className={styles.filter}>
              <div className={styles.select} onClick={handleSelectBox}>
                <p>
                  <MdPlace />
                  <span>{city}</span>
                </p>
                <IoIosArrowDown />
              </div>
              <div className={styles.tap}>
                <AiOutlineSearch />
              </div>
            </div>
          )}

          {isSelectBox && screenWidth > 800 && (
            <SelectBox
              screenWidth={screenWidth}
              setIsSelectBox={setIsSelectBox}
              setCity={setCity}
              selectPosition={selectPosition}
            />
          )}
          {screenWidth < 800 && (
            <SelectBox
              screenWidth={screenWidth}
              setIsSelectBox={setIsSelectBox}
              setCity={setCity}
              selectPosition={selectPosition}
              setSelectPosition={setSelectPosition}
            />
          )}
          <div className={styles.containerR}>
            <div className={styles.giris} onClick={handleRegister}>
              Giriş · Qeydiyyat
            </div>

            {screenWidth > 800 && (
              <button className={styles.hearth}>
                <AiFillHeart />
              </button>
            )}
            <div>
              {screenWidth > 800 ? (
                <Link to={"new"} className={styles.new}>
                  <BsFillPlusCircleFill />
                  <p>Yeni elan</p>
                </Link>
              ) : (
                <GiHamburgerMenu fontSize={22} onClick={() => setMenu(0)} />
              )}
            </div>
          </div>
        </div>
        {screenWidth < 800 && (
          <div className={styles.filter}>
            <div className={styles.select} onClick={handleSelectBox}>
              <p>
                <MdPlace />
                <span>{city}</span>
              </p>
              <IoIosArrowDown />
            </div>
            <div className={styles.tap}>
              <AiOutlineSearch />
            </div>
          </div>
        )}
      </div>
      {screenWidth < 800 && (
        <Menu setMenu={setMenu} menu={menu} handleRegister={handleRegister} />
      )}

      {IsRegister && (
        <Register IsRegister={IsRegister} handleRegister={handleRegister} />
      )}
    </>
  );
}

export default Index;

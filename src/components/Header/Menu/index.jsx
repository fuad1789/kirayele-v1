import React, { useState } from "react";
import styles from "./style.module.css";
import { GrClose } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
function Index({ menu, setMenu, handleRegister }) {
  const [bottomMenu, setBottomMenu] = useState(100);
  const closeBottomMenu = () => {
    setBottomMenu(100);
  };
  const openBottomMenu = () => {
    setBottomMenu(0);
  };
  return (
    <>
      <div className={styles.container} style={{ left: `-${menu}%` }}>
        <div className={styles.header}>
          <h1 className={styles.logo}>
            <Link style={{ textDecoration: "none", color: "#3BACB6" }} to={"/"}>
              Kirayələ.az
            </Link>
          </h1>
          <div className={styles.cixis} onClick={() => setMenu(100)}>
            <GrClose />
          </div>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.menuItem} onClick={handleRegister}>
            <CgProfile fontSize={20} />
            Giriş · Qeydiyyat
          </div>
          <div className={styles.menuItem}>
            <AiOutlineHeart fontSize={20} />
            Seçilmişlər
          </div>
          <div className={styles.menuItem}>
            <BiLogOut fontSize={20} />
            Çıxış
          </div>
          <div className={styles.menuItem} onClick={openBottomMenu}>
            <BsInfoCircle fontSize={20} fontWeight={900} /> Bizimlə Əlaqə
          </div>
        </div>
      </div>
      <div className={styles.bottomMenu} style={{ bottom: `-${bottomMenu}vh` }}>
        <div className={styles.bottomMenuItems}>
          <div className={styles.bottomMenuItem}>
            <BsTelephone fontSize={20} />
            <p>Bizə zəng edin</p>
          </div>
          <div className={styles.bottomMenuItem}>
            <BsInstagram fontSize={20} />
            <p>Instagram</p>
          </div>
          <div className={styles.bottomMenuItem}>
            <FiMail fontSize={20} />
            <p>E-poçt</p>
          </div>
        </div>
        <div className={styles.bagla} onClick={closeBottomMenu}>
          Bağla
        </div>
      </div>
    </>
  );
}

export default Index;

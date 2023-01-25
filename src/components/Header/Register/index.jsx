import React, { useState } from "react";
import styles from "./style.module.css";
import { GrClose } from "react-icons/gr";

function Index({ handleRegister }) {
  const [mode, setMode] = useState("giris");

  return (
    <div className={styles.registerContainer}>
      <div className={styles.container}>
        <div className={styles.close} onClick={handleRegister}>
          <GrClose />
        </div>
        <div className={styles.select}>
          <div
            style={{ color: mode == "giris" && "#3bacb6" }}
            onClick={() => setMode("giris")}
            className={styles.title}
          >
            Giriş
          </div>
          <div
            style={{ color: mode == "qeydiyat" && "#3bacb6" }}
            onClick={() => setMode("qeydiyat")}
            className={styles.title}
          >
            Qeydiyyat
          </div>
        </div>
        <div className={styles.giris}>
          <div className={styles.emailPassword}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button className={styles.submit}>
              {mode == "giris" ? "Giriş" : "Qeydiyyat"}
            </button>
          </div>

          <div className={styles.google}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt="Google"
            />
            <p>
              Google ilə {mode == "giris" ? "giriş edin" : "qeydiyatdan keçin"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

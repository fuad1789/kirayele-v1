import React from "react";
import styles from "./style.module.css";
import { AiOutlineCamera } from "react-icons/ai";
import seherler from "../../api/seherler.json";

function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Asanlıqla pulsuz elan yerləşdirin</h1>
      <h2>
        Şəkilləri yükləyin <small>(ən az 5 Şəkil)</small>
      </h2>
      <label htmlFor="actual-btn" className={styles.file}>
        <div className={styles.upload}>
          <AiOutlineCamera fontSize={50} />
          <p style={{ fontSize: "13px", marginBottom: "5px" }}>
            Fotoşəkil əlavə edin
          </p>
          <p style={{ fontSize: "10px" }}>
            Əsas şəkil axtarış nəticələrində əks olunacaq
          </p>
        </div>
      </label>
      <input type="file" multiple hidden id="actual-btn" />

      <input type="number" className={styles.input} placeholder="Qiymət" />
      <select className={styles.input}>
        {seherler.map((seher) => (
          <option value={seher}>{seher}</option>
        ))}
      </select>
      <select className={styles.input}>
        <option value="Mənzillər">Mənzillər</option>
        <option value="Villalar , Bağ evləri">Villalar , Bağ evləri</option>
        <option value="Obyektlər">Obyektlər</option>
      </select>
      <input type="number" className={styles.input} placeholder="Sahə, м²" />
      <input type="number" className={styles.input} placeholder="Otaq sayı" />
      <input type="text" className={styles.input} placeholder="Yerləşmə yeri" />
      <button>Elanı yerləşdirin</button>
      <div
        style={{
          width: "100%",
          height: "1px",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
}

export default Index;

import React, { useState } from "react";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import styles from "./style.module.css";

function Index({ scrolX, screenWidth }) {
  const [copyText, setCopyText] = useState(null);
  function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Cayos Cochinos, Bay Islands'taki Luxury Round Cay</p>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileL}>
          <p>Ada · Ev sahibi: Ana</p>
          <span>İsdifadəçinin bütün elanları</span>
        </div>
        <div className={styles.profileR}>
          <img
            src="https://a0.muscache.com/im/users/29587751/profile_pic/1426713197/original.jpg?im_w=240"
            alt="profile"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.ozellikler}>
          <div className={styles.ozelliklerItem}>
            <div className={styles.itemTitle}>Şəhər</div>
            <div className={styles.itemValue}>Bakı</div>
          </div>
          <div className={styles.ozelliklerItem}>
            <div className={styles.itemTitle}>Əmlakın növü</div>
            <div className={styles.itemValue}>Bağ evi</div>
          </div>
          <div className={styles.ozelliklerItem}>
            <div className={styles.itemTitle}>Sahə, м²</div>
            <div className={styles.itemValue}> 200</div>
          </div>
          <div className={styles.ozelliklerItem}>
            <div className={styles.itemTitle}>Otaq sayı </div>
            <div className={styles.itemValue}>6</div>
          </div>
          <div className={styles.ozelliklerItem}>
            <div className={styles.itemTitle}>Yerləşmə yeri </div>
            <div className={styles.itemValue}>Bilgəh qəs</div>
          </div>
        </div>
        <div className={styles.text}>
          ✔ bilgeh qesebesinin yaxsi yerinde ✔ 6 otaqli Bag evi kiraye verilir!
          ✔ 4 yataq 2 zal ✔ Istilik soyutma su qaz isiq var ✔ Basseyn temiz ve
          ✔ bilgeh qesebesinin yaxsi yerinde ✔ 6 otaqli Bag evi kiraye verilir!
          ✔ 4 yataq 2 zal ✔ Istilik soyutma su qaz isiq var ✔ Basseyn temiz ve
          ✔ bilgeh qesebesinin yaxsi yerinde ✔ 6 otaqli Bag evi kiraye verilir!
          ✔ 4 yataq 2 zal ✔ Istilik soyutma su qaz isiq var ✔ Basseyn temiz ve
          ✔ bilgeh qesebesinin yaxsi yerinde ✔ 6 otaqli Bag evi kiraye verilir!
          ✔ 4 yataq 2 zal ✔ Istilik soyutma su qaz isiq var ✔ Basseyn temiz ve
          ✔ bilgeh qesebesinin yaxsi yerinde ✔ 6 otaqli Bag evi kiraye verilir!
          ✔ 4 yataq 2 zal ✔ Istilik soyutma su qaz isiq var ✔ Basseyn temiz ve
          ✔ bilgeh qesebesinin yaxsi yerinde ✔ 6 otaqli Bag evi kiraye verilir!
          ✔ 4 yataq 2 zal ✔ Istilik soyutma su qaz isiq var ✔ Basseyn temiz ve
          tam hazir veziyyete ✔ Elave Melumat ucun zeng ede bilersiniz
        </div>
        {screenWidth < 800 && (
          <div className={styles.elaqe}>
            <div className={styles.tel}>
              <BsFillTelephoneFill />
              0555 555 55 55
            </div>
            <div className={styles.whatsapp}>
              <BsWhatsapp />
              Whatsapp
            </div>
          </div>
        )}
      </div>
      {screenWidth > 800 && (
        <div className={styles.elaqe}>
          <div
            className={styles.tel}
            onClick={() => {
              copyToClipboard("0555 555 55 55");
              setCopyText("Kopyalandı");
              setTimeout(() => {
                setCopyText(null);
              }, 2000);
            }}
          >
            <BsFillTelephoneFill />
            {copyText != null ? copyText : "0555 555 55 55"}
          </div>
          <div className={styles.whatsapp}>
            <BsWhatsapp />
            Whatsapp
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;

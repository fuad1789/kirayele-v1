import React, { useState } from "react";
import styles from "./style.module.css";
import { CgMenuGridO } from "react-icons/cg";
import Slider from "react-slick/lib/slider";
import ImageGalery from "./ImageGalery";

function Index({ screenWidth }) {
  const [galery, setGalery] = useState(100);
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
  const handleClick = () => {
    setGalery(0);
  };
  const settings = {
    dots: false,
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.butunSekillerBtn} onClick={handleClick}>
          <CgMenuGridO />
          {screenWidth > 720 && <p>Bütün şəkilləri göstər</p>}
        </div>
        {screenWidth > 720 ? (
          <>
            <div
              className={styles.BigImage}
              style={{ backgroundImage: `url(${imgs[0]})` }}
            />
            <div className={styles.images}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${imgs[1]})` }}
              />
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${imgs[2]})` }}
              />
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${imgs[3]})` }}
              />
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${imgs[4]})` }}
              />
            </div>
          </>
        ) : (
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${imgs[0]})` }}
          ></div>
        )}
      </div>

      <ImageGalery top={galery} imgs={imgs} setGalery={setGalery} />
    </>
  );
}

export default Index;

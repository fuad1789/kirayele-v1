import React from "react";
import styles from "../styles.module.css";
import Slider from "react-slick/lib/slider";

function Index({ imgs, hieght }) {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slider} style={{ hieght: `${hieght}%` }}>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div className={styles.image}>
            <img src={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Index;

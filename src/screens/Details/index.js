import React, { useEffect, useState } from "react";
import Images from "../../components/images";
import Info from "../../components/Info";
import Cards from "../../components/Cards";

function Index() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrolX, setScrolX] = useState(window.scrollX);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    window.addEventListener("scroll", () => {
      setScrolX(window.scrollX);
    });
  }, []);
  return (
    <div>
      <Images screenWidth={screenWidth} />
      <Info scrolX={scrolX} screenWidth={screenWidth} />
      <Cards title={"Bənzər elanlar"} />
    </div>
  );
}

export default Index;

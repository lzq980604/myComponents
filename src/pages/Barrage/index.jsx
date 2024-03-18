import { useEffect, useState, useRef } from "react";
import barrageList from "./mock";
import styles from "./index.less";

function Barrage() {
  const barrageElm = useRef();

  const barrageAnimate = () => {
    if (
      barrageElm.current &&
      barrageElm.current?.style &&
      barrageElm.current?.clientWidth > 0
    ) {
      const longBarrage = barrageElm.current;
      barrageElm.current.style.transition = `all ${
        (longBarrage.clientWidth + window.innerWidth) * 20
      }ms linear`;
      barrageElm.current.style.transform = `translate3d(-${longBarrage.clientWidth}px, 0px, 1px)`;

      setTimeout(() => {
        if (barrageElm.current?.style) {
          barrageElm.current.style.transition = "all 0ms linear";
          barrageElm.current.style.transform = "translate3d(100vw, 0px, 1px)";
          barrageAnimate();
        }
      }, (longBarrage.clientWidth + window.innerWidth) * 20);
    }
  };

  useEffect(() => {
    barrageAnimate();
  }, [barrageList]);

  return (
    <div className={styles.barrageBox}>
      <div className={styles.barrageScrollView} ref={barrageElm}>
        {barrageList?.map((item, index) => {
          if (!item?.benefitTitle) {
            return null;
          }
          return (
            <div key={`barrage_${index}`} className={styles.barrageItemView}>
              {item?.userAvatar && (
                <img className={styles.barrageItemImg} src={item?.userAvatar} />
              )}
              <div className={styles.barrageItemText}>{`${
                item?.userNick || ""
              } 刚刚获得${item?.benefitTitle || ""}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Barrage;

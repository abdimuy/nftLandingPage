import React from "react";

import styles from "../../../styles/Global";
import { FeactureCard } from "../../molecules";
import assets from "../../../assets";

const Feactures = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.h1Text} ${styles.whiteText}`}>
            ProNef has been developer using a cross-platform technology, React
            Native.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeactureCard iconUrl={assets.react} iconText="React Native" />
          <FeactureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </div>
  );
};

export default Feactures;

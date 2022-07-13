import React from "react";
import styles from "../../../styles/Global";
import { FeacturesCardProps } from "./types";

const FeactureCard = ({ iconText, iconUrl }: FeacturesCardProps) => {
  return (
    <div className={styles.featureCard}>
      <img src={iconUrl} alt="icon" className={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  );
};

export default FeactureCard;

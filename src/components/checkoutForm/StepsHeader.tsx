import React from "react";
import styles from "../../assets/CheckoutForm.module.css";

import { FaCheckCircle } from "react-icons/fa";

interface Props {
  currentStep: number;
  handleShow: () => void;
}

const StepsHeader = ({ currentStep, handleShow }: Props) => {
  return (
    <>
      <div className={styles.steps}>
        <div className={currentStep <= 3 ? styles.thisStep : undefined}>
          <FaCheckCircle className={styles.checkIcon} />
          <span className={styles.checkSpan}> Your Details</span>
        </div>
        <div className={currentStep > 1 ? styles.thisStep : undefined}>
          <FaCheckCircle className={styles.checkIcon} />{" "}
          <span className={styles.checkSpan}> Delivery details</span>
        </div>
        <div className={currentStep === 3 ? styles.thisStep : undefined}>
          <FaCheckCircle className={styles.checkIcon} />{" "}
          <span className={styles.checkSpan}> Summary</span>
        </div>
      </div>
      <button className={styles.closeBtn} onClick={handleShow}>
        Back to your cart
      </button>
    </>
  );
};

export default StepsHeader;

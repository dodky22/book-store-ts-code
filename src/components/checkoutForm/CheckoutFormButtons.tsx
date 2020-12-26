import React from "react";
import styles from "../../assets/CheckoutForm.module.css";

interface Props {
  currentStep: number;
  _prev: () => void;
  _next: () => void;
  errors: {
    fisrtStep: {
      firstname: string | null;
      lastname: string | null;
      adress: string | null;
      city: string | null;
      state: string | null;
      email: string | null;
      phone: string | null;
    };
    secondStep: {
      delivery: string | null;
    };
  };
}

const CheckoutFormButtons = ({ currentStep, _prev, _next, errors }: Props) => {
  const prevButton = () => {
    if (currentStep !== 1) {
      return (
        <button className={styles.myButton} type="button" onClick={_prev}>
          Previous
        </button>
      );
    }
  };
  const nextButton = () => {
    //if every item in errors has null then i can click and advance step
    if (
      currentStep === 1 &&
      Object.values(errors.fisrtStep).every((val) => val === null)
    ) {
      return (
        <>
          <button
            className={styles.myButton}
            type="button"
            onClick={_next}
            style={{ float: "right" }}
          >
            Next
          </button>
          <p className={styles.clearfix}></p>
        </>
      );
    } else if (
      currentStep === 2 &&
      Object.values(errors.secondStep).every((val) => val === null)
    ) {
      return (
        <>
          <button
            className={styles.myButton}
            type="button"
            onClick={_next}
            style={{ float: "right" }}
          >
            Next
          </button>
          <p className={styles.clearfix}></p>
        </>
      );
    } else if (currentStep < 3) {
      return (
        <>
          <button
            className={styles.myButton}
            type="button"
            onClick={_next}
            style={{ float: "right" }}
            disabled
          >
            Next
          </button>
          <p className={styles.clearfix}></p>
        </>
      );
    }
  };
  const submitButton = () => {
    if (currentStep === 3) {
      return (
        <>
          <button
            className={styles.myButton}
            type="submit"
            style={{ float: "right" }}
          >
            Confirm
          </button>
          <p className={styles.clearfix}></p>
        </>
      );
    }
  };
  return (
    <>
      {prevButton()}
      {nextButton()}
      {submitButton()}
    </>
  );
};

export default CheckoutFormButtons;

import React from "react";
import styles from "../../assets/CheckoutForm.module.css";

interface Props {
  currentStep: number;
  firstname: string;
  lastname: string;
  adress: string;
  city: string;
  state: string;
  phone: number;
  email: string;
  errors: {
    firstname: string | null;
    lastname: string | null;
    adress: string | null;
    city: string | null;
    state: string | null;
    email: string | null;
    phone: string | null;
  };
  handleChange: (e: any) => void;
}

const FormUserDetails = ({
  currentStep,
  handleChange,
  firstname,
  lastname,
  adress,
  city,
  state,
  phone,
  email,
  errors,
}: Props) => {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <>
      {/* <h3>ur details</h3> */}
      <div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.firstname !== null
                ? styles.myInputRed
                : styles.myInputGreen
            }
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            value={firstname}
            onChange={handleChange}
          />
          {errors.firstname !== null ? (
            <div className={styles.userdetailsError}>{errors.firstname}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.lastname !== null ? styles.myInputRed : styles.myInputGreen
            }
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            value={lastname}
            onChange={handleChange}
          />
          {errors.lastname !== null ? (
            <div className={styles.userdetailsError}>{errors.lastname}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.adress !== null ? styles.myInputRed : styles.myInputGreen
            }
            type="text"
            name="adress"
            id="adress"
            placeholder="Adress"
            value={adress}
            onChange={handleChange}
          />
          {errors.adress !== null ? (
            <div className={styles.userdetailsError}>{errors.adress}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.city !== null ? styles.myInputRed : styles.myInputGreen
            }
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={city}
            onChange={handleChange}
          />
          {errors.city !== null ? (
            <div className={styles.userdetailsError}>{errors.city}</div>
          ) : null}
        </div>
      </div>
      <div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.state !== null ? styles.myInputRed : styles.myInputGreen
            }
            type="text"
            name="state"
            id="state"
            placeholder="State"
            value={state}
            onChange={handleChange}
          />
          {errors.state !== null ? (
            <div className={styles.userdetailsError}>{errors.state}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.email !== null ? styles.myInputRed : styles.myInputGreen
            }
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          {errors.email !== null ? (
            <div className={styles.userdetailsError}>{errors.email}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <input
            className={
              errors.phone !== null ? styles.myInputRed : styles.myInputGreen
            }
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={phone === 0 ? "" : phone}
            onChange={handleChange}
          />
          {errors.phone !== null ? (
            <div className={styles.userdetailsError}>{errors.phone}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FormUserDetails;

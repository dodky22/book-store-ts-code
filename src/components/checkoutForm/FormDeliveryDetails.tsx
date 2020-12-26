import React from "react";
import styles from "../../assets/CheckoutForm.module.css";

interface Props {
  currentStep: number;
  handleChange: (e: any) => void;
  delivery: string;
  errors: {
    delivery: string | null;
  };
}

const DELIVERYOPTIONS = [
  {
    name: "Option 1",
    value: { delivery: "option1", price: "5 €", id: "1" },
  },
  {
    name: "Option 2",
    value: { delivery: "option2", price: "10 €", id: "2" },
  },
  {
    name: "Option 3",
    value: { delivery: "option3", price: "free", id: "3" },
  },
];

const FormDeliveryDetails = ({
  currentStep,
  handleChange,
  delivery,
  errors,
}: Props) => {
  const onlyOneInputChecked = (id: string) => {
    let thisCheckbox = document.getElementById(id) as HTMLInputElement;
    if (thisCheckbox !== null) {
      for (let i = 0; i <= 3; i++) {
        let checkbox = document.getElementById(`${i}`) as HTMLInputElement;

        if (checkbox !== null) {
          checkbox.checked = false;
        }
      }
      thisCheckbox.checked = true;
    }
  };
  // console.log(delivery);

  const createCheckboxes = DELIVERYOPTIONS.map((option: any, id: number) => {
    return (
      <div className={styles.formGroup} key={id}>
        <div className={styles.deliveryOption}>
          <label htmlFor={option.value.delivery}>{option.name}</label>
          <div>
            <span>{option.value.price}</span>
            <input
              className={styles.deliveryCheckbox}
              type="checkbox"
              name="delivery"
              id={option.value.id}
              value={[option.name, option.value.price]}
              onChange={handleChange}
              onClick={() => onlyOneInputChecked(option.value.id)}
            />
          </div>
        </div>
      </div>
    );
  });

  if (currentStep !== 2) {
    return null;
  }
  return (
    <div className={styles.deliveryStep}>
      {createCheckboxes}
      {errors.delivery !== null ? (
        <div className={styles.deliveryError}>{errors.delivery}</div>
      ) : null}
    </div>
  );
};

export default FormDeliveryDetails;

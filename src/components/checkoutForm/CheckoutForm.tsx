import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import { BookContext } from "../../context/context";

import {
  nameValidation,
  lastNameValidation,
  adressValidation,
  cityValidation,
  stateValidation,
  emailValidation,
  phoneValidation,
  deliveryValidation,
} from "./CheckoutFormValidation";

import styles from "../../assets/CheckoutForm.module.css";

import StepsHeader from "./StepsHeader";
import Step1 from "./FormUserDetails";
import Step2 from "./FormDeliveryDetails";
import Step3 from "./FormSummaryDetails";

import CheckoutFormButtons from "./CheckoutFormButtons";

interface Props {
  sum: number;
  handle: () => void;
}

const CheckoutForm = ({ sum, handle }: Props) => {
  const context = useContext(BookContext);
  const { removeItemsFromCart } = context;

  const [currentStep, setcurrentStep] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [adress, setadress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [phone, setphone] = useState(0);
  const [email, setemail] = useState("");
  const [delivery, setdelivery] = useState("");

  let history = useHistory();

  const values = {
    firstname,
    lastname,
    adress,
    city,
    state,
    email,
    phone,
    delivery,
    sum,
  };

  const errors = {
    fisrtStep: {
      firstname: nameValidation("firstname", firstname),
      lastname: lastNameValidation("lastname", lastname),
      adress: adressValidation("adress", adress),
      city: cityValidation("city", city),
      state: stateValidation("state", state),
      email: emailValidation(email),
      phone: phoneValidation(phone),
    },
    secondStep: {
      delivery: deliveryValidation(delivery),
    },
  };

  const _next = () => {
    let currStep = currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currStep = currStep >= 2 ? 3 : currStep + 1;
    setcurrentStep(currStep);
  };

  const _prev = () => {
    let currStep = currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currStep = currStep <= 1 ? 1 : currStep - 1;
    setcurrentStep(currStep);
  };

  const handleChange = (e: any) => {
    let val = e.target.value;
    let input = e.target.name;

    if (input === "firstname") {
      setFirstname(val);
    } else if (input === "lastname") {
      setlastname(val);
    } else if (input === "adress") {
      setadress(val);
    } else if (input === "city") {
      setcity(val);
    } else if (input === "state") {
      setstate(val);
    } else if (input === "email") {
      setemail(val);
    } else if (input === "phone") {
      setphone(val);
    } else if (input === "delivery") {
      setdelivery(val);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push("/book-store-ts/cart/success");
    removeItemsFromCart();
    console.log(JSON.stringify(values));
  };

  return (
    <div className={styles.container}>
      <StepsHeader currentStep={currentStep} handleShow={handle}></StepsHeader>

      <form onSubmit={handleSubmit}>
        <div className={styles.checkoutForm}>
          <Step1
            currentStep={currentStep}
            handleChange={handleChange}
            firstname={firstname}
            lastname={lastname}
            adress={adress}
            city={city}
            state={state}
            phone={phone}
            email={email}
            errors={errors.fisrtStep}
          />
          <Step2
            currentStep={currentStep}
            handleChange={handleChange}
            delivery={delivery}
            errors={errors.secondStep}
          />
          <Step3
            currentStep={currentStep}
            handleChange={handleChange}
            values={values}
            sum={sum}
          />
        </div>
        <CheckoutFormButtons
          currentStep={currentStep}
          _prev={_prev}
          _next={_next}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default CheckoutForm;

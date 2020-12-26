export const nameValidation = (fieldName: string, fieldValue: string) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

export const lastNameValidation = (fieldName: string, fieldValue: string) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

export const adressValidation = (fieldName: string, fieldValue: string) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  //   if (/[^a-zA-Z -]/.test(fieldValue)) {
  //     return "Invalid characters";
  //   }
  if (fieldValue.trim().length < 5) {
    return `${fieldName} needs to be at least five characters`;
  }
  return null;
};

export const cityValidation = (fieldName: string, fieldValue: string) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 5) {
    return `${fieldName} needs to be at least five characters`;
  }
  return null;
};

export const stateValidation = (fieldName: string, fieldValue: string) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 5) {
    return `${fieldName} needs to be at least five characters`;
  }
  return null;
};

export const emailValidation = (email: string) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

export const phoneValidation = (phone: number) => {
  let ph = phone.toString();
  if (ph.trim().length === 10) {
    return null;
  }
  if (ph.trim() === "") {
    return "Phone is required";
  }
  return "Please enter a valid phone number";
};

export const deliveryValidation = (delivery: string) => {
  if (delivery === "") {
    return "Please choose delivery option to proceed";
  } else return null;
};

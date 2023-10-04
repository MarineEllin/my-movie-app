import * as yup from "yup";
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*()0123456789]).{8,}$"
);

export 

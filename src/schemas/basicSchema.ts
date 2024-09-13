import * as yup from "yup";

const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Incorrect e-mail!")
    .required("This field is required!"),
  password: yup
    .string()
    .test("is-correct", "Password is not valid", (val) => {
      if (val != undefined) {
        return passwordRegEx.test(val);
      }
      return true;
    })
    .required("This field is required!"),
});

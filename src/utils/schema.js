import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter correct email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
export const signUpSchema = Yup.object({
  email: Yup.string()
    .email("Please enter correct email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter correct email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

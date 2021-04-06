import * as yup from "yup";

export const initialFields = {
  email: '',
  password: '',
  name: '',
  lastName: ''
}

export const Schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .label("Password")
    .required("Campo obrigatório")
    .min(4, "Mínimo 4 dígitos")
    .max(20, "Máximo 20 dígitos"),
  name: yup.string().required("Campo obrigatório"),
  lastName: yup.string().required("Campo obrigatório")
});
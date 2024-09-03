import * as Yup from 'yup';

export const ContactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .max(30, 'máximo 30 caracteres')
    .min(2, 'mínimo 2 caracteres')
    .required('Nombre Requerido'),
  email: Yup.string()
    .trim()
      .email('Debe ser un correo válido')
    // .matches(/^0[689]{1}\d{8}$/, 'Número de teléfono no válido')
    .required('Email requerido'),
  message: Yup.string()
    .trim()
    .max(70, 'máximo 70 caracteres')
    .min(2, 'mínimo 2 caracteres')
    .required('Mensaje Requerido'),
});

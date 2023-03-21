import React from 'react';
import {Container} from "@dathaplus/storybook";
import {
  buttonForm,
  containerForm, containerFormFieldDos, containerFormFieldUno,
  containerMain,
} from "@components/form/style";
import {Formik, Form } from "formik";
import {FieldCustom} from "@components/form/field";
import {ContactSchema} from "../../validation/validations";

interface IForm {
  name: string;
  phone: string;
  message: string;
}

const FormTribologyc = () => {
  const init: IForm = {name: '', phone: '', message: ''};

  const test = (xvalue: any) => {
    console.log(xvalue);
  }

  return (
    <Formik initialValues={init} onSubmit={test} validationSchema={ContactSchema}>
      <Container {...containerMain}>

        <Form>

          <Container {...containerForm}>

            <Container {...containerFormFieldUno}>
              <FieldCustom name='name' placeholder='Nombre y Apellido' nameIcon='user'/>
              <FieldCustom name='phone' placeholder='Número de teléfono' nameIcon='smartphone'/>
            </Container>

            <Container {...containerFormFieldDos}>
              <FieldCustom name='message' placeholder='Déjanos un mensaje' nameIcon='message-circle' type='textarea'/>

              <button {...buttonForm}
                      type='submit'
              >Enviar
              </button>
            </Container>

          </Container>

        </Form>

      </Container>

    </Formik>

  );
};

export default FormTribologyc;

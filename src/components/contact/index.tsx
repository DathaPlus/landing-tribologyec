import { initialValuesContact } from '@data/contact';
import { Button, useLayoutWidth } from '@dathaplus/storybook';
import { ContactSchema } from '@validation/index';
import { Form, Formik } from 'formik';
import React from 'react';

import Field from './field';

/* eslint-disable no-console */

export const Contacts = () => {
  const width = useLayoutWidth();

  return (
    <section
      className="contact"
      style={{
        backgroundImage: `url('/img/${width < 500 ? 'contact_bg-mobile.png' : 'contact_bg.png'}')`,
      }}
    >
      <div className="contact__title">
        <p>
          {' '}
          Habla con un <b>experto</b>{' '}
        </p>
        <p>
          ¿Tienes un proyecto en mente? <b>Nosotros</b> te asesoramos
        </p>
      </div>

      <Formik
        initialValues={initialValuesContact}
        validationSchema={ContactSchema}
        onSubmit={console.log}
      >
        <Form className="contact__form">
          <Field name="name" />
          <Field name="phone" />
          <div className="contact__wrapper-message">
            <Field name="message" type="textarea" />
            <Button type="submit" size="normal">
              Enviar
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

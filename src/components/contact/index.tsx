'use client';
import { Button, useLayoutWidth } from '@dathaplus/storybook';
import { ContactSchema } from '@validation/index';
import { Form, Formik } from 'formik';
import React from 'react';

import Field from './field';

export const Contacts = () => {
  const width = useLayoutWidth();

  return (
    <section
      className="contact"
      style={{
        backgroundImage: `url('/img/${width < 500 ? 'contact_bg-mobile.png' : 'contact_bg.png'}')`,
      }}
    >
      <div className="contact__wrapper">
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
          initialValues={{
            name: '',
            message: '',
            phone: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={() => {}}
        >
          <Form className="contact__form">
            <div className="contact__wrapper-input">
              <Field name="name" icon="user" placeholder="Nombre y Apellido" />
              <Field name="phone" icon="smartphone" placeholder="Número de teléfono" />
            </div>
            <div className="contact__wrapper-message">
              <Field
                name="message"
                type="textarea"
                icon="message-circle"
                placeholder="Déjanos sun mensaje"
              />
              <Button type="submit" size="normal" style="primary">
                Enviar
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

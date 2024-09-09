'use client';
import { Button, useLayoutWidth } from '@dathaplus/storybook';
import { ContactSchema } from '@validation/index';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';

import Field from './field';
// import { sendEmail } from '@server/common/sendEmail';

export const Contacts = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const width = useLayoutWidth();

  return (
    <section
      id="form-contact-us-section"
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
            email: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={async () => {
            setIsSuccess(true);
          }}
        >
          <Form className="contact__form">
            {isSuccess ? (
              <div className="contact__success">Formulario enviado, en breve un asesor se comunicará contigo</div>
            ) : (
              <>
                <div className="contact__wrapper-input">
                  <Field name="name" icon="user" placeholder="Nombre y Apellido" />
                  <Field
                    inputType="email"
                    name="email"
                    icon="smartphone"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="contact__wrapper-message">
                  <Field
                    name="message"
                    type="textarea"
                    icon="message-circle"
                    placeholder="Déjanos un mensaje"
                  />
                  <Button type="submit" size="normal" style="primary">
                    Enviar
                  </Button>
                </div>
              </>
            )}
          </Form>
        </Formik>
      </div>
    </section>
  );
};

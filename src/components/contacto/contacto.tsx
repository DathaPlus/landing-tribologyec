import {Container, Text} from '@dathaplus/storybook';
import React from 'react';
import Form from "@components/form";
import {
  containerMain,
  containerMainUno,
  containerMainDos,
  textContactUno,
  textContactDos,
  textContactTres, textContactCuatro
} from "@components/contacto/style";

export default function ContactoComponent() {
  return (
    <>
      <Container {...containerMain}>

        <Container {...containerMainUno}>
          <div style={{ margin: '0 auto' }}>
            <Text {...textContactUno}>HABLA CON UN<Text {...textContactDos}>EXPERTO</Text></Text>
          </div>

          <div>
            <Text {...textContactTres}>
              ¿Tienes un proyecto en mente?
              <Text {...textContactCuatro}>
                <b style={{ margin: '5px' }}>Nosotros</b></Text> te asesoraremos
            </Text>
          </div>
        </Container>

        <Container {...containerMainDos}>
          <Form/>
        </Container>

      </Container>
    </>
  );
}

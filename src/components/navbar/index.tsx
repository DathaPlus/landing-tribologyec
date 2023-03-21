import React from 'react';
import {Container, Navbar, Image, ContainerWrapper, Text} from "@dathaplus/storybook";
import FeatherIcon from 'feather-icons-react';
import {
  containerDos,
  containerMain,
  containerTres,
  containerUno,
  styleImage,
  textStyle, textStyleDos
} from "@components/navbar/style";

export const NavbarMenu = ({}) => (
  <>
    <Container styles={{
      backgroundColor: '#D7DAE1',
    }}>
      <ContainerWrapper>
        <Container {...containerMain}>

          <Container styles={{padding: '0 10px 10px'}}>
            <Image {...styleImage} src="/img/logo1.webp"/>
          </Container>

          <Container {...containerUno}>
            <Container {...containerDos}>
              <div style={{marginRight: '8px'}}>
                <FeatherIcon icon='mail' size='14' fill='transparent'/>
              </div>

              <Text {...textStyle}>
                INFO@MAIL.COM
              </Text>
            </Container>

            <Container {...containerTres}>
              <div style={{marginRight: '8px'}}>
                <FeatherIcon icon='phone' size='14' fill='black'/>
              </div>
              <Text {...textStyleDos}>
                000.000.0000
              </Text>
            </Container>

          </Container>
        </Container>
      </ContainerWrapper>
    </Container>
  </>
);


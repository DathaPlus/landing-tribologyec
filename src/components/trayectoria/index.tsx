import { Container, Text } from '@dathaplus/storybook';
import React from 'react';
import {
  contentContainer,
  descriptionContainer,
  grayContainer, logoContainer,
  mainContainer,
  titleContainerStyle,
  yearsContainer
} from "@components/trayectoria/styles";
export default function TrayectoriaComponent() {
  return (
    <Container {...mainContainer}>
      <Container {...grayContainer}>
        <div style={titleContainerStyle}>
          <Text color={'#fff'} fontSize="40px" letterSpacing="10px" >
            TRAYECTORIA
          </Text>
        </div>
        <Container {...descriptionContainer}>
          <Container {...yearsContainer}>
            <Text color={'#fff'} textAlign="center" lineHeight="1rem" fontSize={290}>
              12
            </Text>
            <Text color={'#b78f5f'} textAlign="center" fontSize={40} letterSpacing="10px" marginTop={'60px'}>
              AÑOS
            </Text>
          </Container>
          <Container {...contentContainer}>
              <Text color={'#fff'} textAlign='justify' fontSize="16px" fontWeight={400}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam rerum
                commodi officiis, minus distinctio pariatur nostrum mollitia sint iure voluptate saepe
                laudantium, autem quod aspernatur illo praesentium numquam hic.
              </Text>
          </Container>
        </Container>

        <Container {...logoContainer}>
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'80px'}  />
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'120px'}  />
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'120px'} />
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'120px'} />
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'120px'} />
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'120px'} />
        </Container>
      </Container>
    </Container>
  );
}

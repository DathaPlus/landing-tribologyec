import { Container, Text } from '@dathaplus/storybook';
import React from 'react';
export default function TrayectoriaComponent() {    
  return (
    <Container styles={{background: '#363641', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container styles={{ background: '#72727c', width: '35%', padding: '20px', height: '35vh' }}>
        <div style={{ position: 'relative', zIndex: 1, left: '73%', marginBottom: '50px' }}>
          <Text color={'#fff'} fontSize="30px" letterSpacing="10px">
            TRAYECTORIA
          </Text>
        </div>
        <Container styles={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ background: '#FF0000', height: '15vh', position: 'relative', right: '9%' }}>
            <Text color={'#fff'} textAlign="center" letterSpacing="7px" fontSize={120}>
              12
            </Text>
            <Text color={'#b78f5f'} textAlign="center" letterSpacing="10px" marginTop={'60px'}>
              AÑOS
            </Text>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <Text color={'#fff'} textAlign='justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam rerum
              commodi officiis, minus distinctio pariatur nostrum mollitia sint iure voluptate saepe
              laudantium, autem quod aspernatur illo praesentium numquam hic.
            </Text>
          </div>
        </Container>
        <Container styles={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
          <img src='https://cdn.freebiesupply.com/logos/large/2x/gedore-logo-png-transparent.png' width={'90px'} height={'120px'}  />
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

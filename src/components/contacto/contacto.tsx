import { Container, Text } from '@dathaplus/storybook';
import React from 'react';
export default function ContactoComponent() {
    return (
        <Container>
            <div className='d-none d-md-block'>
                <Container styles={{ background: 'url("/background-contacto-desktop.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '492px', overflow: 'hidden', color: '#FFFFFF', width: '100%', display: 'flex' }}>
                    <Container styles={{ background: 'rgba(75, 79, 88, 1)', width: '100%', height: '492px', overflow: 'hidden', mixBlendMode: 'multiply', position: 'absolute' }}>
                    </Container>
                    <Container styles={{ zIndex: 1, width: '50%', float: 'left', marginTop: '13%', paddingLeft: '160px', position: 'relative' }}>
                        <Text color={'#fff'} fontSize="40px" letterSpacing="25px" textTransform="uppercase" lineHeight={'52px'} paddingLeft="20px">
                            habla con
                            un <span style={{ color: 'rgba(130, 112, 86, 1)' }}>experto</span>
                        </Text>
                        <Text color={'#fff'} fontSize="16px" textAlign='justify' lineHeight={'20px'} marginTop="10px">
                            ¿Tienes un proyecto en mente? <span style={{ fontWeight: '700' }} >Nosotros</span> te asesoramos
                        </Text>
                    </Container>
                    <Container styles={{ width: '50%' }}></Container>
                </Container>
            </div>
            <div className='d-block d-md-none'>
                <Container styles={{ background: 'url("/background-contacto-mobile.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '510px', overflow: 'hidden', color: '#FFFFFF', mixBlendMode: 'multiply' }}>
                    <Container styles={{ background: 'rgba(75, 79, 88, 1)', overflow: 'hidden', mixBlendMode: 'multiply', width: '100%', height: '510px', position: 'absolute' }}>
                    </Container>
                    <Container styles={{ zIndex: 1, marginTop: '8%', position: 'relative', marginLeft: '44px', marginRight: '44px' }}>
                        <Text color={'#fff'} fontSize="28px" letterSpacing="19px" textTransform="uppercase" lineHeight={'36px'}>
                            habla con
                            un <span style={{ color: 'rgba(130, 112, 86, 1)' }}>experto</span>
                        </Text>
                        <Text color={'#fff'} fontSize="16px" textAlign='center' lineHeight={'29px'} marginTop="10px">
                            ¿Tienes un proyecto en mente? <span style={{ fontWeight: '700' }} >Nosotros</span> te asesoramos
                        </Text>
                    </Container>
                </Container>
            </div>
        </Container>
    );
}

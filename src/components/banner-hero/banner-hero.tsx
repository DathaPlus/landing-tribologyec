import { Container, Text } from '@dathaplus/storybook';
import React from 'react';
export default function BannerHeroComponent() {
    return (
        <Container>
            <div className='d-none d-md-block'>
                <Container styles={{ background: 'url("/banner-hero-desktop.png")', height: '646px', overflow: 'hidden', color: '#FFFFFF' }}>
                    <Container styles={{ background: 'rgba(75, 79, 88, 1)', overflow: 'hidden', mixBlendMode: 'multiply', width: '100%', height: '646px', position: 'absolute' }}>
                    </Container>
                    <div style={{ zIndex: 1, width: '50%', float: 'right', top: '45%', paddingRight: '91px', position: 'relative' }}>
                        <Text color={'#fff'} fontSize="50px" letterSpacing="30px" textAlign="right" textTransform="uppercase">
                            tribologyec
                        </Text>

                        <div style={{ width: '80%', float: 'right', marginTop: '40px' }}>
                            <Text color={'#fff'} fontSize="20px" textAlign="justify" >
                                Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio
                            </Text>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='d-block d-md-none'>
                <Container styles={{ background: 'url("/banner-hero-mobile.png")', height: '266px', overflow: 'hidden', color: '#FFFFFF' }}>
                    <Container styles={{ background: 'rgba(75, 79, 88, 1)', overflow: 'hidden', mixBlendMode: 'multiply', width: '100%', height: '266px', position: 'absolute' }}>
                    </Container>
                    <div style={{ zIndex: 1, width: '100%', float: 'right', top: '44%', position: 'relative' }}>
                        <Text color={'#fff'} fontSize="30px" letterSpacing="12px" textAlign="center" lineHeight={'39px'} textTransform="uppercase">
                            tribologyec
                        </Text>
                        <Text color={'#fff'} fontSize="14px" textAlign="center" marginTop={'10px'} >
                            Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio
                        </Text>
                    </div>
                </Container>
            </div>
        </Container>
    );
}

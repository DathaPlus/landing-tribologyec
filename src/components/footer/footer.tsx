import { Text } from '@dathaplus/storybook';
import React from 'react';
export default function FooterComponent() {
    return (
        <div className='footer' style={{ background: '#1F2024', paddingTop: '22px' }}>
            <div className='footer-section-1'>
                <img src={'/logo.png'}></img>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="20px">Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio</Text>
                <div className='icons' style={{ display: 'flex', marginTop: '20px' }}>
                    <img src={'/Twitter.png'} style={{ marginRight: '20px' }} />
                    <img src={'/Facebook.png'} style={{ marginRight: '20px' }} />
                    <img src={'/instagram.png'} />
                </div>
                <Text fontSize='14px' lineHeight="21px" color="#505D68" marginTop="40px">Terms and conditions</Text>
            </div>
            <div className='footer-section-2'>
                <Text fontSize='14px' lineHeight="16px" color="#505D68" textTransform='uppercase'>Servicios</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="30px">Servicios</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="8px">Proyectos</Text>
            </div>
            <div className='footer-section-3'>
                <Text fontSize='14px' lineHeight="16px" color="#505D68" textTransform='uppercase'>productos</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="30px">Productos</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="8px">Herramientas</Text>
            </div>
            <div className='footer-section-4'>
                <Text fontSize='14px' lineHeight="16px" color="#505D68" textTransform='uppercase'>Contacto</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="30px">ventas@tribologyec.com</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="8px">+593 238 238 94</Text>
                <Text fontSize='14px' lineHeight="21px" color="#A1AEB7" marginTop="8px">Av. De los Shirys N32-218
                    y Av. Eloy Alfaro Edificio
                    Parque Central</Text>
                <Text fontSize='14px' lineHeight="21px" color="#505D68" marginTop="40px">©2018 - Form  |   All right reserved</Text>
            </div>
        </div>
    );
}

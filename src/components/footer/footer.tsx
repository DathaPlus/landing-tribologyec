import { Text } from '@dathaplus/storybook';
import React from 'react';
import {
  divMain, imgSocial,
  textFooter, textFooterInfo,
  textFooterSubTitleDos,
  textFooterSubTitleUno,
  textFooterTitle
} from "@components/footer/style";
export default function FooterComponent() {
    return (
        <div className='footer' {...divMain}>
            <div className='footer-section-1'>
                <img src={'/logo.png'}></img>
                <Text {...textFooterInfo}>Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio</Text>
                <div className='icons' style={{ display: 'flex', marginTop: '20px' }}>
                    <img src={'/Twitter.png'} {...imgSocial} />
                    <img src={'/Facebook.png'} {...imgSocial} />
                    <img src={'/instagram.png'} />
                </div>
                <Text {...textFooter}>Terms and conditions</Text>
            </div>
            <div className='footer-section-2'>
                <Text {...textFooterTitle}>Servicios</Text>
                <Text {...textFooterSubTitleUno}>Servicios</Text>
                <Text {...textFooterSubTitleDos}>Proyectos</Text>
            </div>
            <div className='footer-section-3'>
                <Text {...textFooterTitle}>productos</Text>
                <Text {...textFooterSubTitleUno}>Productos</Text>
                <Text {...textFooterSubTitleDos}>Herramientas</Text>
            </div>
            <div className='footer-section-4'>
                <Text {...textFooterTitle}>Contacto</Text>
                <Text {...textFooterSubTitleUno}>ventas@tribologyec.com</Text>
                <Text {...textFooterSubTitleDos}>+593 238 238 94</Text>
                <Text {...textFooterSubTitleDos}>Av. De los Shirys N32-218
                    y Av. Eloy Alfaro Edificio
                    Parque Central</Text>
                <Text {...textFooter}>©2018 - Form  |   All right reserved</Text>
            </div>
        </div>
    );
}

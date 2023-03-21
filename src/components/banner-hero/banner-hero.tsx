import { Container, Text } from '@dathaplus/storybook';
import React from 'react';
import {
  containerDesktop,
  containerMainDesktop, containerMainMobile, containerMobile,
  divDesktopDos,
  divDesktopUno, divMobileUno, textDesktopDos,
  textDesktopUno, textMobileDos, textMobileUno
} from "@components/banner-hero/style";
export default function BannerHeroComponent() {
    return (
        <Container>
            <div className='d-none d-md-block'>
                <Container {...containerMainDesktop}>
                    <Container {...containerDesktop}>
                    </Container>
                    <div {...divDesktopUno}>
                        <Text {...textDesktopUno}>
                            tribologyec
                        </Text>

                        <div {...divDesktopDos}>
                            <Text {...textDesktopDos}>
                                Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio
                            </Text>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='d-block d-md-none'>
                <Container {...containerMainMobile}>
                    <Container {...containerMobile}>
                    </Container>
                    <div {...divMobileUno}>
                        <Text {...textMobileUno}>
                            tribologyec
                        </Text>
                        <Text {...textMobileDos}>
                            Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio
                        </Text>
                    </div>
                </Container>
            </div>
        </Container>
    );
}

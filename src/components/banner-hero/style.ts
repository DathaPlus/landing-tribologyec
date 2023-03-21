import { IContainerInterfaces as IC, ITypogragpyInterfaces as IT } from '@dathaplus/storybook';

export const containerMainDesktop: IC.IContainer = {
  styles: {
    background: 'url("/banner-hero-desktop.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '646px',
    overflow: 'hidden',
    color: '#FFFFFF',
  },
};

export const containerDesktop: IC.IContainer = {
  styles: {
    background: 'rgba(75, 79, 88, 1)',
    overflow: 'hidden',
    mixBlendMode: 'multiply',
    width: '100%',
    height: '646px',
    position: 'absolute',
  },
};

export const divDesktopUno = {
  style: {
    zIndex: 1,
    width: '50%',
    float: 'right',
    top: '45%',
    paddingRight: '91px',
    position: 'relative',
  },
};

export const textDesktopUno: IT.ITypography = {
  color: '#fff',
  fontSize: '50px',
  letterSpacing: '30px',
  textAlign: 'right',
  textTransform: 'uppercase',
};

export const divDesktopDos = {
  style: { width: '80%', float: 'right', marginTop: '40px' },
};

export const textDesktopDos: IT.ITypography = {
  color: '#fff',
  fontSize: '20px',
  textAlign: 'justify',
};

export const containerMainMobile: IC.IContainer = {
  styles: {
    background: 'url("/banner-hero-mobile.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '266px',
    overflow: 'hidden',
    color: '#FFFFFF',
  },
};

export const containerMobile: IC.IContainer = {
  styles: {
    background: 'rgba(75, 79, 88, 1)',
    overflow: 'hidden',
    mixBlendMode: 'multiply',
    width: '100%',
    height: '266px',
    position: 'absolute',
  },
};

export const divMobileUno = {
  style: {
    zIndex: 1,
    width: '100%',
    float: 'right',
    top: '44%',
    position: 'relative',
  },
};

export const textMobileUno: IT.ITypography = {
  color: '#fff',
  fontSize: '30px',
  letterSpacing: '12px',
  textAlign: 'center',
  lineHeight: '39px',
  textTransform: 'uppercase',
};

export const textMobileDos: IT.ITypography = {
  color: '#fff',
  fontSize: '14px',
  textAlign: 'center',
  marginTop: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
};

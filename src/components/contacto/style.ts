import { ITypogragpyInterfaces as IT } from '@dathaplus/storybook';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const containerMain: IContainer = {
  styles: {
    background:
      'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.77) 100%), url(/background-contacto-mobile.png)',
    width: '100%',
    height: '510px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mediaQueryBreakPoints: {
      920: {
        background:
          'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.77) 100%), url("/background-contacto-desktop.png")',
        backgroundRepeat: 'no-repeat',
        height: '700px',
        width: '100%',
        overflow: 'hidden',
        backgroundSize: 'cover',
        flexDirection: 'row',
      },
    },
  },
};

export const containerMainUno: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
};

export const containerMainDos: IContainer = {
  styles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export const textContactUno: IT.ITypography = {
  tag: 'p',
  fontFamily: 'Antonio',
  width: '300px',
  color: '#FFFFFF',
  lineHeight: '36px',
  fontSize: '28px',
  letterSpacing: '19.1063px',
  margin: '0 auto',
  padding: '30px 0',
  textTransform: 'uppercase',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '40px',
      lineHeight: '52px',
      letterSpacing: '25.3623px',
      width: '415px',
      paddingBottom: '20px',
      paddingTop: '40px',
    },
    920: {
      paddingTop: '0',
    },
  },
};

export const textContactDos: IT.ITypography = {
  tag: 'strong',
  fontFamily: 'Antonio',
  display: 'inline-block',
  color: '#827056',
  fontSize: '28px',
  letterSpacing: '19.1063px',
  paddingLeft: '23px',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '40px',
      lineHeight: '52px',
      letterSpacing: '25.3623px',
      paddingLeft: '35px',
    },
  },
};

export const textContactTres: IT.ITypography = {
  tag: 'p',
  textAlign: 'center',
  color: '#FFFFFF',
  fontFamily: 'Montserrat',
  width: '300px',
  fontSize: '16px',
  lineHeight: '29px',
  margin: '0 auto',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '16px',
      lineHeight: '20px',
      width: '600px',
    },
  },
};

export const textContactCuatro: IT.ITypography = {
  tag: 'strong',
  display: 'inline-block',
  color: '#FFFFFF',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
};

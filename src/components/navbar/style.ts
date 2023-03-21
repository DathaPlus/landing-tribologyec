import { ITypogragpyInterfaces as IT } from '@dathaplus/storybook';
import { IImage } from '@dathaplus/storybook/dist/interfaces/base/img';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const containerMain: IContainer = {
  styles: {
    display: 'flex',
    height: '69px',
    alignItems: 'end',
    justifyContent: 'space-between',
    mediaQueryBreakPoints: {
      500: {
        height: '60px',
      },
    },
  },
};

export const styleImage: IImage = {
  styles: {
    width: '118.04px',
    mediaQueryBreakPoints: {
      500: {
        width: '207px',
      },
    },
  },
};

export const containerUno: IContainer = {
  styles: {
    display: 'flex',
    padding: '0 10px 10px 0',
    mediaQueryBreakPoints: {
      500: {
        paddingBottom: '20px',
      },
    },
  },
};

export const containerDos: IContainer = {
  styles: {
    display: 'flex',
    mediaQueryBreakPoints: {
      500: {
        paddingRight: '50px',
      },
    },
  },
};

export const textStyle: IT.ITypography = {
  fontFamily: 'Ubuntu',
  display: 'inline-block',
  fontSize: '9.75319px',
  width: '79px',
  lineHeight: '11px',
  color: '#424B5A',
  mediaQueryBreakPoints: {
    500: {
      fontSize: '12px',
      lineHeight: '14px',
    },
  },
};

export const containerTres: IContainer = {
  styles: {
    display: 'flex',
    mediaQueryBreakPoints: {
      500: {
        paddingRight: '100px',
      },
    },
  },
};

export const textStyleDos: IT.ITypography = {
  fontFamily: 'Ubuntu',
  fontSize: '9.75319px',
  width: '60px',
  display: 'inline-block',
  lineHeight: '11px',
  color: '#424B5A',
  mediaQueryBreakPoints: {
    500: {
      fontSize: '12px',
      lineHeight: '14px',
    },
  },
};

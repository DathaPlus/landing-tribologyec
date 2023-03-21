import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const containerMain: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: '287px',
    mediaQueryBreakPoints: {
      920: {
        //flexDirection: 'row',
      },
      1200: {
        //paddingRight: '10px',
      },
    },
  },
};

export const inputForm = {
  style: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    width: '100%',
    height: '42px',
    padding: '10px',
    background: 'transparent',
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
    borderRadius: '5px',
    margin: '5px',
    mediaQueryBreakPoints: {
      920: {
        width: '0',
      },
    },
  },
  type: 'text',
};

export const textAreaForm = {
  style: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    width: '100%',
    height: '94px',
    background: 'transparent',
    color: '#FFFFFF',
    padding: '10px',
    border: '1px solid #FFFFFF',
    borderRadius: '5px',
    margin: '5px',
  },
  type: 'text',
};

export const buttonForm = {
  style: {
    width: '185.16px',
    height: '35.78px',
    background: '#80110C',
    borderRadius: '77.8082px',
    color: 'white',
  },
};

export const inputStyle = {
  style: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
};

export const textAreaStyle = {
  style: {
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
};

export const inputIcon = {
  style: {
    height: 'fit-content',
    position: 'absolute',
    top: '15px',
    right: '10px',
    color: ' white',
  },
};

export const containerForm: IContainer = {
  styles: {
    mediaQueryBreakPoints: {
      1200: {
        display: 'flex',
        flexDirection: 'row',
        width: '1000px',
      },
    },
  },
};

export const containerFormFieldUno: IContainer = {
  styles: {
    mediaQueryBreakPoints: {
      920: {
        width: '280px',
      },
    },
  },
};

export const containerFormFieldDos: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '30px',
    alignItems: 'center',
    mediaQueryBreakPoints: {
      920: {
        paddingBottom: '0',
        width: '280px',
        alignItems: 'center',
      },
      1200: {
        alignItems: 'flex-end',
      },
    },
  },
};

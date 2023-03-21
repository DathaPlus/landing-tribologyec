import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';
import { CSSProperties } from 'react';

export const mainContainer: IContainer = {
  styles: {
    background: '#363641',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export const grayContainer: IContainer = {
  styles: {
    background: '#4B4F58',
    maxWidth: '900px',
    width: '100%',
    padding: '20px',
  },
};
export const yearsContainer: IContainer = {
  styles: {
    background: '#80110C',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 3em',
    transform: 'translate(-30%, 0%)',
  },
};
export const titleContainerStyle: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  textAlign: 'right',
  transform: 'translate(15%, 0%)',
  paddingTop: '1.5em',
};

export const descriptionContainer: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
};
export const contentContainer: IContainer = {
  styles: {
    display: 'flex',
    alignItems: 'center',
    padding: '5em',
    paddingLeft: '1em',
  },
};
export const logoContainer: IContainer = {
  styles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

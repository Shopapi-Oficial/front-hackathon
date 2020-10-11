import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#3D9426',
    secondary: '#F7FCF5',
    gray1: '#212829',
    gray2: '#2D3536',
    gray3: '#3D4747',
    gray4: '#546061',
    gray5: '#687475',
    gray6: '#A9B6B8',
    gray7: '#CBD5D6',
    gray8: '#E4EAEB',
    gray9: '#F0F4F5',
    gray10: '#F7FAFA',
    sucess1: '#2FBF77',
    sucess2: '#F2FCF7',
    info1: '#0C92F2',
    info2: '#F5FBFF',
    warning1: '#FCBD3F',
    warning2: '#FFFCF5',
    danger1: '#FC4C4C',
    danger2: '#FFF5F5',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

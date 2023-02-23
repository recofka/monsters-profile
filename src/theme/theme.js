import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // fontFamily: 'body',
        bg: mode('lightviolet', 'spacecadet')(props)
      }
    })
  },
  colors: {
    violet: '#9c77d7',
    lightviolet: '#845EC2',
    sunglow: '#ffc857',
    darkcyan: '#119da4',
    verylightcyan: '#ADC5CF',
    paynesgray: '#19647eff',

    spacecadet: '#1f2041',
    primary100: '#1f2041',
    primary200: '#353554',
    primary300: '#4c4b68',
    primary400: '#64627c',
    primary500: '#7c7a90',
    primary600: '#9593a6'
  }
});
export default Theme;

// CSS DARK THEME PRIMARY COLORS

// CSS DARK THEME SURFACE COLORS

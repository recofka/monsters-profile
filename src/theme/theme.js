import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('lightviolet', 'spacecadet')(props)
      }
    })
  },
  colors: {
    violet: '#9c77d7',
    lightviolet: '#845EC2',
    lightcyan: '#ADC5CF',
    turquoise: '#119DA4',
    yellow: '#FFC857',
    spacecadet: '#1f2041',
    primary100: '#1f2041',
    primary300: '#4c4b68',
    primary400: '#64627c',
    primary500: '#7c7a90',
    primary600: '#9593a6'
  },
  fonts: {
    heading: `'Kanit', sans-serif`,
    body: `'Rubik', sans-serif`
  }
});
export default Theme;

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Theme = extendTheme({
  colors: {
    lightcyan: '#ADC5CF',
    lightviolet: '#845EC2',
    primary100: '#1f2041',
    primary300: '#4c4b68',
    primary400: '#64627c',
    primary500: '#7c7a90',
    primary600: '#9593a6',
    spacecadet: '#1f2041',
    turquoise: '#119DA4',
    violet: '#9c77d7',
    yellow: '#FFC857'
  },
  fonts: {
    body: `'Rubik', sans-serif`,
    heading: `'Kanit', sans-serif`
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('lightviolet', 'spacecadet')(props)
      }
    })
  }
});
export default Theme;

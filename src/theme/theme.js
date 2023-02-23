import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // fontFamily: 'body',
        // color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.100', 'gray.800')(props)
      }
    })
  },
  colors: {
    brand: {
      primary: '#00DDFF',
      greyPrimary: '#38383d',
      greySecondary: '#42414d'
    }
  }
});
export default Theme;

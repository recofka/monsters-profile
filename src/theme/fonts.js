import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Julee';
        src: url('Julee-Regular.woff2') format('woff2'),
            url('Julee-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Kanit';
        src: url('Kanit-Regular.woff2') format('woff2'),
            url('Kanit-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Kanit';
        src: url('Kanit-Thin.woff2') format('woff2'),
            url('Kanit-Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }`}
  />
);

export default Fonts;

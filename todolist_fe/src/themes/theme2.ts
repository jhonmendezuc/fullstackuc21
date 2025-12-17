import { createTheme } from '@mui/material/styles';

const temaPersonalizadoAzul = createTheme({
  palette: {
    primary: {
      main: '#ff8e3c',
    },
    secondary: {
      main: '#0d0d0d',
      light: '#0d0d0d',
      dark: '#0d0d0d',
      contrastText: '#d5f909ff',
    },
    error: {
      main: '#d9376e',
    }
  },
})

export default temaPersonalizadoAzul

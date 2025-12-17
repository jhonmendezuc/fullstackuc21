import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import temaPersonalizadoAzul from './themes/theme2';
import { Provider } from 'react-redux';
import { store } from './store/store';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={temaPersonalizadoAzul}>
      <App />
    </ThemeProvider>
  </Provider>
)

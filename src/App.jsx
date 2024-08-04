import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStype } from './styles/global';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <UserProvider>
                    <Router />
                </UserProvider>
            </BrowserRouter>
            <GlobalStype />
        </ThemeProvider>
    );
}

export default App;

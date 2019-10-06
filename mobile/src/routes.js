// Switch Natigator: ao navegar entre telas, a tela anterior deixa de existir
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

// Define as rotas da aplicação
const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

// Exporta as rotas
export default Routes;
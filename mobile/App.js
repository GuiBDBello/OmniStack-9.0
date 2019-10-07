import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes />
}
    // Por padrão, a estilização de todas as tags no React Native possuem os atributos:
    // display: 'flex';
    // flexDirection: 'column';
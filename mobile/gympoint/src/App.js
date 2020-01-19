import React from 'react';
import { YellowBox } from 'react-native';
import { useSelector } from 'react-redux';
import createRoutes from './routes';

YellowBox.ignoreWarnings(['Encountered']);

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRoutes(signed);

  return <Routes />;
}

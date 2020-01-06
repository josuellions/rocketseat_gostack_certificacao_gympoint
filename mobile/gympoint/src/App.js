import React from 'react';
import { useSelector } from 'react-redux';
import createRoutes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRoutes(signed);

  return <Routes />;
}

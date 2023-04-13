import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useSelector} from 'react-redux';
import {RootState} from '../app/store';

const Routes: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

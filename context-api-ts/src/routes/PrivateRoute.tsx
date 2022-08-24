import { ElementType, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = null
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute as ElementType;

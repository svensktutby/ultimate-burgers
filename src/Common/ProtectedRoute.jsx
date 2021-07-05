import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({
  element,
  authenticated,
  redirectTo,
  ...rest
}) => {
  if (!authenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <Route {...rest} element={element} />;
};

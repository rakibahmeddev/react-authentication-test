import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return (
    <div>
      <p className='text-center'>You must be logged in to view this page</p>
    </div>
  );
};

export default PrivateRoutes;

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [addedItem, setAddedItem] = useState('');
  const navigate = useNavigate();


  const item = addedItem;
  

  const login = (userData) => {
    setUser(userData);
    navigate('/'); // Navigate to home page after login
  };

  const logout = () => {
    setUser(null);
    navigate('/'); // Navigate to home page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,setUser, addedItem, setAddedItem, item }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
import { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export const ApiProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const API_BASE_URL = 'http://localhost:3000';

  const handleError = (err) => {
    const message = err.message || 'An error occurred';
    setError(message);
    console.error('API Error:', message);
  };

  const clearError = () => setError(null);

  const apiCall = async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const value = {
    API_BASE_URL,
    error,
    clearError,
    apiCall,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

import React, { useReducer } from 'react';
import MkdSDK from './utils/MkdSDK';
import { getNonNullValue } from './utils/utils';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const token = action.payload.token,
        role = action.payload.role;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.user_id,
        },
        token,
        role,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};

const sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem('role');
  if (errorMessage === 'TOKEN_EXPIRED') {
    dispatch({
      type: 'Logout',
    });
    // window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkAuth = async () => {
    sdk
      .check(getNonNullValue(state.role))
      .then((data) => {
        if (data.error) {
          tokenExpireError(dispatch, data.message);
        }
      })
      .catch((error) => {
        tokenExpireError(dispatch, error.message);
      });
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

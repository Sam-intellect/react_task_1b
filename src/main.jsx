import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './authContext';
import SnackBar from './components/SnackBar';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import NotFoundPage from './pages/NotFoundPage';

function renderRoutes(role) {
  switch (role) {
    case 'admin':
      return (
        <Routes>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          ></Route>
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          ></Route>
          <Route path="/admin/login" element={<AdminLoginPage />}></Route>
        </Routes>
      );
    // return (
    //   <Routes>
    //     <Route path="/admin/login" element={<AdminLoginPage />}></Route>
    //     <Route path="*" element={<NotFoundPage />}></Route>
    //   </Routes>
    // );
  }
}

function Main() {
  const { state } = React.useContext(AuthContext);

  return (
    <div className="h-full" id="main">
      <div className="flex w-full">
        <div className="w-full">
          <div className="w-full page-wrapper">
            {!state.isAuthenticated
              ? renderRoutes('none')
              : renderRoutes(state.role)}
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
}

export default Main;

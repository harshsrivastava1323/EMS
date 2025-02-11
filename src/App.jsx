import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authdata = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = getLocalStorage('loggedInUser'); // Get stored user

    if (loggedInUser) {
      console.log("User found in localStorage:", loggedInUser); // Debugging
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    console.log('Auth data:', authdata); // Debugging
    
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      setLocalStorage('loggedInUser', { role: 'admin' });
      console.log('Admin logged in successfully'); // Debugging
    } else if (Array.isArray(authdata?.employees) && authdata.employees.length > 0) {
      const employee = authdata.employees.find((e) => {
        console.log('Checking employee:', e);
        return e.email === email && e.password === password;
      });

      console.log('Found employee:', employee);

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        setLocalStorage('loggedInUser', { role: 'employee', data: employee });
        console.log('Employee logged in successfully'); // Debugging
      } else {
        alert('Invalid Credentials');
      }
    } else {
      console.log('Employees data not loaded yet.');
      alert('Invalid Credentials');
    }
  };

  const handleLogout = () => {
    console.log("Logging out user..."); // Debugging
    localStorage.removeItem('loggedInUser'); // Clear user from storage
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {user ? (
        user === 'admin' ? (
          <AdminDashboard changeUser={setUser} /> // ✅ Pass changeUser to AdminDashboard
        ) : (
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        )
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;

import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Navigate } from 'react-router-dom';
import './styles/style.css';

function App() {
const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const isAllowed = !!user;

  return ( 
    <Routes>
      <Route
        path="/login"
        element={
          user
          ?user.rol === 'admin'
          ? <Navigate to="/dashboard" replace/>
          : <Navigate to="/profile" replace/>
        : <Login setUser={setUser} user={user} />
      }
      />

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
      <Route element={<ProtectedRoutes isAllowed={isAllowed} />}>
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
<Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
      </Route>
    </Routes>
  )
}

export default App;

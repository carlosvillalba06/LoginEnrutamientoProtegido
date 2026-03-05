import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Navigate } from 'react-router-dom';
function App() {

const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });  const isAllowed = !!user;

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
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}replace />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser} replace />} />
      </Route>
    </Routes>
  )
}

export default App;

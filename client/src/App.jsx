import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import CustomForm from './CustomForm'
import Submissions from './Submissions';
import Schedule from './Components/Schedule';
import Home from './pages/Home';

function AppRouter() {
  const role = localStorage.getItem('role');

  return (
    
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<Schedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<CustomForm />} />
        {/* Protected Routes */}
        <Route path="/admin" element={role === 'admin' ? <Submissions /> : <Navigate to="/login" />} />
      </Routes>
    
  );
}

export default AppRouter;

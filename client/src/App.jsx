import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import CustomForm from './CustomForm'
import Submissions from './Submissions';
import Schedule from './Components/Schedule';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppRouter() {
  const role = localStorage.getItem('role');

  return (
    
      <>
      {/* ✅ ToastContainer should be outside Routes */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<CustomForm />} />

        {/* Protected Route */}
        <Route
          path="/admin"
          element={role === 'admin' ? <Submissions /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default AppRouter;

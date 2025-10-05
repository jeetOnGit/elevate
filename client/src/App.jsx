import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import CustomForm from './CustomForm'
import Submissions from './Submissions';
import Schedule from './Components/Schedule';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence, motion } from "framer-motion";

function AppRouter() {
  const role = localStorage.getItem('role');
   const location = useLocation();

  return (
    
      <>
      {/* ✅ ToastContainer should be outside Routes */}
      <ToastContainer
        position="bottom-center"
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
      <AnimatePresence mode="wait">
          <Routes  location={location} key={location.pathname}>
            <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/" element={<PageWrapper><Schedule /></PageWrapper>} />
            <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/form" element={<PageWrapper><CustomForm /></PageWrapper>} />

            {/* Protected Route */}
            <Route
              path="/admin"
              element={role === 'admin' ?  <PageWrapper><Submissions /></PageWrapper> : <Navigate to="/login" />}
            />
          </Routes>
      </AnimatePresence> 
    </>
  );
}

export default AppRouter;

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

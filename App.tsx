import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Layout from './components/Layout';
import AdminLayout from './pages/admin/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import FacultyPage from './pages/Faculty';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import FacultyManager from './pages/admin/FacultyManager';

// Placeholder components for routes we haven't fully fleshed out to prevent 404s
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-serif text-primary mb-4">{title}</h1>
      <p className="text-gray-500">This page is under construction for the demo.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <StoreProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="faculty" element={<FacultyPage />} />
            <Route path="research" element={<Research />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Auth */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="faculty" element={<FacultyManager />} />
            <Route path="cms" element={<Placeholder title="Content CMS" />} />
            <Route path="media" element={<Placeholder title="Media Library" />} />
            <Route path="profile" element={<Placeholder title="User Profile" />} />
          </Route>
        </Routes>
      </HashRouter>
    </StoreProvider>
  );
};

export default App;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { Lock, User, AlertCircle } from 'lucide-react';
import { Role } from '../../types';

const Login: React.FC = () => {
  const [email, setEmail] = useState('admin@dli.edu');
  const [role, setRole] = useState<Role>('SUPER_ADMIN');
  const { login } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, role);
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-warmGray flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-primary p-8 text-center">
           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
             <Lock className="text-white" size={32} />
           </div>
           <h2 className="text-2xl font-serif font-bold text-white">Admin Portal</h2>
           <p className="text-indigo-200 text-sm mt-2">Department of Language Dynamics</p>
        </div>
        
        <form onSubmit={handleLogin} className="p-8 space-y-6">
           <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3 items-start">
              <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={18} />
              <div className="text-xs text-blue-700">
                  <p className="font-bold mb-1">Demo Credentials:</p>
                  <p>Super Admin: admin@dli.edu</p>
                  <p>Faculty: ian@dli.edu</p>
              </div>
           </div>

           <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                 <User className="absolute left-3 top-3 text-gray-400" size={18} />
                 <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    required
                 />
              </div>
           </div>

           <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Role (Demo Mode)</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              >
                 <option value="SUPER_ADMIN">Super Admin</option>
                 <option value="DEPT_ADMIN">Department Admin</option>
                 <option value="FACULTY">Faculty</option>
              </select>
           </div>

           <button type="submit" className="w-full bg-primary hover:bg-indigo-800 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-primary/30">
              Sign In Securely
           </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
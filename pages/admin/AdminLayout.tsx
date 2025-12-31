import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, UserCircle, LogOut, Menu, X, Image as ImageIcon } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const AdminLayout: React.FC = () => {
  const { currentUser, logout } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  if (!currentUser) {
    navigate('/admin/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard, roles: ['SUPER_ADMIN', 'DEPT_ADMIN', 'FACULTY'] },
    { label: 'Content CMS', path: '/admin/cms', icon: FileText, roles: ['SUPER_ADMIN', 'DEPT_ADMIN'] },
    { label: 'Faculty Mgmt', path: '/admin/faculty', icon: Users, roles: ['SUPER_ADMIN', 'DEPT_ADMIN'] },
    { label: 'Media Library', path: '/admin/media', icon: ImageIcon, roles: ['SUPER_ADMIN', 'DEPT_ADMIN'] },
    { label: 'My Profile', path: '/admin/profile', icon: UserCircle, roles: ['SUPER_ADMIN', 'DEPT_ADMIN', 'FACULTY'] },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-primary text-white transform transition-transform duration-300 ease-in-out shadow-xl
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:relative lg:translate-x-0
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-indigo-800 flex items-center justify-between">
            <div>
                <h1 className="font-serif font-bold text-xl tracking-wide">DLD Admin</h1>
                <p className="text-xs text-indigo-300 uppercase mt-1">{currentUser.role.replace('_', ' ')}</p>
            </div>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X size={20}/></button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.filter(item => item.roles.includes(currentUser.role)).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-white/10 text-white font-medium shadow-sm' 
                    : 'text-indigo-200 hover:bg-white/5 hover:text-white'}
                `}
              >
                <item.icon size={20} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-indigo-800">
             <div className="flex items-center gap-3 mb-4 px-2">
                 <img src={currentUser.photoUrl} alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-400" />
                 <div className="truncate">
                     <p className="text-sm font-medium">{currentUser.name}</p>
                     <p className="text-xs text-indigo-300 truncate">{currentUser.email}</p>
                 </div>
             </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-2 justify-center bg-indigo-900/50 hover:bg-indigo-900 text-indigo-200 py-2 rounded-lg transition-colors text-sm"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm lg:hidden h-16 flex items-center px-4">
           <button onClick={() => setSidebarOpen(true)} className="text-gray-600"><Menu/></button>
           <span className="ml-4 font-bold text-gray-700">Admin Portal</span>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-8">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
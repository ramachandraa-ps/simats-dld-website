import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Phone, MapPin, Mail, Home as HomeIcon, Info, Users, Microscope } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dockItems = [
    { label: 'Home', path: '/', icon: HomeIcon, color: 'text-primary' },
    { label: 'About', path: '/about', icon: Info, color: 'text-teal' },
    { label: 'Faculty', path: '/faculty', icon: Users, color: 'text-indigo-600' },
    { label: 'Research', path: '/research', icon: Microscope, color: 'text-vermilion' },
    { label: 'Contact', path: '/contact', icon: Phone, color: 'text-emerald-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-paper relative pb-24">
      
      {/* Floating Header - SIMATS Branding */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div 
            className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl px-8 py-3 flex items-center gap-5 cursor-pointer select-none transition-transform hover:scale-105"
            onClick={() => navigate('/')}
        >
             {/* Logo Graphic - 3 Chat Bubbles */}
             <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                <div className="absolute left-0 top-3 w-5 h-5 bg-orange rounded-md rounded-br-none shadow-sm z-10"></div>
                <div className="absolute right-0 top-3 w-5 h-5 bg-vermilion rounded-md rounded-bl-none shadow-sm z-10"></div>
                <div className="absolute top-0 w-6 h-6 bg-teal rounded-lg rounded-b-none shadow-md z-20 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                </div>
             </div>
             
             {/* Text Branding */}
             <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase leading-tight">SIMATS Engineering</span>
                <span className="font-serif font-black text-lg text-gray-800 leading-none tracking-tight">Dept. of <span className="text-teal">Language Dynamics</span></span>
             </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating Dock Navbar */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Dock 
            className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-primary/5 gap-3 px-3" 
            panelHeight={52} 
            magnification={70} 
            distance={80}
          >
            {dockItems.map((item) => (
              <DockItem key={item.label} onClick={() => navigate(item.path)}>
                <DockLabel className="bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-700 shadow-sm text-[10px] py-0.5 px-1.5">{item.label}</DockLabel>
                <DockIcon>
                  <item.icon className={`w-full h-full ${item.color}`} />
                </DockIcon>
                {/* Active Indicator Dot */}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-primary ring-1 ring-white" />
                )}
              </DockItem>
            ))}
          </Dock>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-24 border-t border-indigo-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8 flex items-center justify-center shrink-0 scale-75 origin-left">
                    <div className="absolute left-0 top-3 w-5 h-5 bg-orange rounded-md rounded-br-none shadow-sm z-10"></div>
                    <div className="absolute right-0 top-3 w-5 h-5 bg-vermilion rounded-md rounded-bl-none shadow-sm z-10"></div>
                    <div className="absolute top-0 w-6 h-6 bg-teal rounded-lg rounded-b-none shadow-md z-20"></div>
                </div>
              <div>
                <h2 className="font-serif font-bold text-xl tracking-tight">SIMATS Engineering</h2>
                <p className="text-[10px] uppercase tracking-widest text-teal">Department of Language Dynamics</p>
              </div>
            </div>
            <p className="text-indigo-200 leading-relaxed text-sm max-w-md">
              A premier department dedicated to the intersection of computational linguistics, cognitive science, and engineering. 
              Recognized for excellence in research, patents, and student placement.
            </p>
            <div className="mt-6 flex gap-3">
               <span className="bg-white/10 px-3 py-1 rounded text-xs border border-white/20">NAAC A++ Accredited</span>
               <span className="bg-white/10 px-3 py-1 rounded text-xs border border-white/20">NIRF Ranked #3</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">Academics</h3>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li><a href="#" className="hover:text-white transition-colors">B.Tech Language Dynamics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">M.Tech Computational Linguistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ph.D. Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm text-indigo-200">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-teal mt-1 shrink-0" /> 
                <span>Saveetha Nagar, Thandalam,<br/>Chennai - 602 105.</span>
              </li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-teal" /> 044 - 2680 1999</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-teal" /> languagedynamics@simats.edu.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-indigo-800/50 pt-8 text-center text-xs text-indigo-300">
          © {new Date().getFullYear()} Saveetha Institute of Medical and Technical Sciences (SIMATS). All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
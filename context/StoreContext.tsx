import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Faculty, PageContent, Role } from '../types';
import { INITIAL_USERS, INITIAL_FACULTY, INITIAL_PAGES } from '../constants';

interface StoreContextType {
  // Auth State
  currentUser: User | null;
  login: (email: string, role: Role) => void;
  logout: () => void;
  
  // Data State
  users: User[];
  faculty: Faculty[];
  pages: PageContent[];
  
  // Actions
  updatePageContent: (pageId: string, sectionId: string, newContent: string) => void;
  addFaculty: (newFaculty: Faculty) => void;
  updateFaculty: (id: string, updates: Partial<Faculty>) => void;
  removeFaculty: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [faculty, setFaculty] = useState<Faculty[]>(INITIAL_FACULTY);
  const [pages, setPages] = useState<PageContent[]>(INITIAL_PAGES);

  // Simulate persistent auth
  useEffect(() => {
    const storedUser = localStorage.getItem('dli_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, role: Role) => {
    // In a real app, verify credentials. Here we mock it.
    const mockUser = users.find(u => u.email === email) || {
      id: 'temp_' + Date.now(),
      name: 'Demo User',
      email,
      role,
      photoUrl: 'https://picsum.photos/200'
    };
    setCurrentUser(mockUser);
    localStorage.setItem('dli_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('dli_user');
  };

  const updatePageContent = (pageId: string, sectionId: string, newContent: string) => {
    setPages(prev => prev.map(p => {
      if (p.pageId !== pageId) return p;
      return {
        ...p,
        sections: p.sections.map(s => s.id === sectionId ? { ...s, content: newContent } : s),
        lastUpdated: new Date().toISOString().split('T')[0]
      };
    }));
  };

  const addFaculty = (newFaculty: Faculty) => {
    setFaculty(prev => [...prev, newFaculty]);
  };

  const updateFaculty = (id: string, updates: Partial<Faculty>) => {
    setFaculty(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const removeFaculty = (id: string) => {
    setFaculty(prev => prev.filter(f => f.id !== id));
  };

  return (
    <StoreContext.Provider value={{
      currentUser,
      login,
      logout,
      users,
      faculty,
      pages,
      updatePageContent,
      addFaculty,
      updateFaculty,
      removeFaculty
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};
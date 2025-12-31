import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Plus, Edit, Trash2, Mail, Award } from 'lucide-react';
import { Faculty } from '../../types';

const FacultyManager: React.FC = () => {
  const { faculty, removeFaculty, addFaculty } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simple mock form state
  const [formData, setFormData] = useState<Partial<Faculty>>({
    name: '', designation: '', email: '', bio: '', photo: 'https://picsum.photos/400'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFaculty: Faculty = {
        id: `f${Date.now()}`,
        name: formData.name!,
        designation: formData.designation!,
        email: formData.email!,
        bio: formData.bio || '',
        photo: formData.photo!,
        researchInterests: [],
        publications: [],
        achievements: [],
        specialization: []
    };
    addFaculty(newFaculty);
    setIsModalOpen(false);
    setFormData({ name: '', designation: '', email: '', bio: '', photo: 'https://picsum.photos/400' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 font-serif">Faculty Directory</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-indigo-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={18} /> Add Faculty
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Faculty Member</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {faculty.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={f.photo} alt={f.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-gray-800">{f.name}</p>
                        <p className="text-xs text-gray-500">{f.designation}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                       <Mail size={14} className="text-teal" /> {f.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                       Faculty
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg">
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => removeFaculty(f.id)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mock Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 animate-blur-in">
             <h2 className="text-xl font-bold mb-4">Add New Faculty</h2>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  placeholder="Full Name" 
                  className="w-full p-2 border rounded-lg" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required
                />
                <input 
                  placeholder="Designation" 
                  className="w-full p-2 border rounded-lg"
                  value={formData.designation} onChange={e => setFormData({...formData, designation: e.target.value})} required
                />
                <input 
                  placeholder="Email" 
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required
                />
                <textarea 
                  placeholder="Bio" 
                  className="w-full p-2 border rounded-lg"
                  value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})}
                />
                <div className="flex justify-end gap-3 mt-6">
                   <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                   <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg">Save Faculty</button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyManager;
import React, { useState } from 'react';
import { INITIAL_FACULTY } from '../constants';
import { Mail, BookOpen, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const FacultyPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const roles = ['All', 'Professor', 'Associate Professor', 'Assistant Professor', 'Industry Expert'];
  const filteredFaculty = filter === 'All' 
    ? INITIAL_FACULTY 
    : INITIAL_FACULTY.filter(f => f.designation.includes(filter));

  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-primary mb-6">Our Faculty</h1>
            <p className="text-xl text-gray-600 mb-8">World-Class Experts Shaping Tomorrow's Language Technologists.</p>
            
            <div className="flex flex-wrap justify-center gap-2">
                {roles.map(role => (
                    <button 
                        key={role}
                        onClick={() => setFilter(role)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === role ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary'}`}
                    >
                        {role}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty, i) => (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={faculty.id} 
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group"
                >
                    <div className="relative h-64 overflow-hidden">
                        <img 
                            src={faculty.photo} 
                            alt={faculty.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                             <div className="flex justify-between items-end">
                                <div>
                                    <p className="font-bold text-lg">{faculty.name}</p>
                                    <p className="text-teal-300 text-sm">{faculty.designation}</p>
                                </div>
                                <div className="text-right">
                                     <div className="flex items-center gap-1 text-xs opacity-80">
                                         <BookOpen size={12} /> {faculty.publicationsCount} Pubs
                                     </div>
                                     <div className="flex items-center gap-1 text-xs opacity-80">
                                         <Award size={12} /> h-index: {faculty.hIndex}
                                     </div>
                                </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{faculty.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {faculty.specialization.slice(0, 3).map((spec, idx) => (
                                <span key={idx} className="px-2 py-1 bg-orange/10 text-orange-700 text-[10px] font-bold uppercase rounded">
                                    {spec}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                             <a href={`mailto:${faculty.email}`} className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-primary hover:text-white transition-colors">
                                 <Mail size={16} />
                             </a>
                             <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-primary hover:text-white transition-colors">
                                 <ExternalLink size={16} />
                             </a>
                             <span className="text-xs text-gray-400 ml-auto font-mono">{faculty.qualification}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default FacultyPage;
import React, { useState } from 'react';
import { RESEARCH_CENTRES, FEATURED_PUBLICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Mic, Languages, MessageSquare, ArrowRight, FileText, Download } from 'lucide-react';
import GlareCard from '../components/GlareCard';

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'centres' | 'pubs'>('centres');

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'BookOpen': return BookOpen;
      case 'Brain': return Brain;
      case 'Mic': return Mic;
      case 'Languages': return Languages;
      case 'MessageSquare': return MessageSquare;
      default: return BookOpen;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
           <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-6">Research Ecosystem</h1>
           <p className="text-xl text-gray-600">Advancing the frontiers of language technology through 5 specialized centres and ₹15 Cr+ in active funding.</p>
           
           <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={() => setActiveTab('centres')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'centres' ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
              >
                Centres of Excellence
              </button>
              <button 
                onClick={() => setActiveTab('pubs')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'pubs' ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
              >
                Publications
              </button>
           </div>
        </div>

        {activeTab === 'centres' ? (
            <div className="space-y-12">
                {RESEARCH_CENTRES.map((centre, i) => {
                    const Icon = getIcon(centre.icon);
                    return (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={centre.id} 
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10"
                        >
                            <div className="md:w-1/3 shrink-0">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 ${centre.color} mb-6`}>
                                    <Icon size={32} />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-primary mb-2">{centre.name}</h2>
                                <p className="text-gray-500 font-medium mb-6">Head: {centre.head}</p>
                                <div className="flex gap-4">
                                    <div className="bg-gray-50 px-4 py-2 rounded-xl">
                                        <p className="text-2xl font-bold text-primary">{centre.publicationsCount}</p>
                                        <p className="text-xs text-gray-500 uppercase">Publications</p>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-2 rounded-xl">
                                        <p className="text-2xl font-bold text-primary">{centre.patentsCount}</p>
                                        <p className="text-xs text-gray-500 uppercase">Patents</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 md:pl-10 pt-8 md:pt-0">
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">{centre.description}</p>
                                
                                <div className="mb-8">
                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Focus Areas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {centre.focusAreas.map((area, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-100">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Key Projects</h4>
                                    <div className="space-y-3">
                                        {centre.keyProjects.map((project, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                <div>
                                                    <p className="font-bold text-gray-800 text-sm">{project.name}</p>
                                                    <p className="text-xs text-gray-500">{project.funding}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-teal text-sm">{project.amount}</p>
                                                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-gray-200">{project.status}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        ) : (
            <div className="grid gap-6">
                {FEATURED_PUBLICATIONS.map((pub, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                            <FileText size={24} />
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {pub.tags?.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/5 px-2 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                    {pub.year}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2 hover:text-teal transition-colors cursor-pointer">{pub.title}</h3>
                            <p className="text-sm text-gray-600 mb-1">{pub.authors.join(', ')}</p>
                            <p className="text-xs text-gray-400 italic">{pub.venue}</p>
                        </div>
                        <div className="shrink-0 flex gap-2">
                            <button className="p-2 text-gray-400 hover:text-primary transition-colors border rounded-lg">
                                <Download size={18} />
                            </button>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-indigo-800 transition-colors">
                                View Paper
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}

      </div>
    </div>
  );
};

export default Research;
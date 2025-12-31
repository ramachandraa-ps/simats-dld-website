import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Globe, Server, UserCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-primary font-bold mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Department of Language Dynamics represents a paradigm shift in linguistic education. 
            We are India's first department to synthesize computational linguistics, NLP, and cognitive computing.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-6">
              <Globe size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in bridging human communication with artificial intelligence, creating a future where language barriers dissolve and machines understand the nuances of human expression.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-6">
              <Target size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To nurture computational linguists and NLP engineers who will revolutionize human-machine interaction through cutting-edge research, industry partnerships, and a unified curriculum.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-24">
            <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">Our Journey</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                    { year: '2019', title: 'Department Founded', desc: 'Inaugural batch of 60 students and 8 faculty members.' },
                    { year: '2020', title: 'First Patent Filed', desc: 'Context-Aware Speech Recognition for Indian Languages.' },
                    { year: '2021', title: 'Centre of Excellence', desc: 'Computational Linguistics Research Wing inaugurated.' },
                    { year: '2022', title: 'Industry Recognition', desc: 'MoU signed with Google India for AI research. NAAC A++ Grade.' },
                    { year: '2023', title: 'Research Milestone', desc: '100+ Publications milestone achieved. First PhD scholars graduated.' },
                    { year: '2024', title: 'National Ranking', desc: 'Ranked #3 in Language Technology departments (NIRF).' }
                ].map((item, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-xs text-primary z-10">
                            {item.year}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Leadership Message */}
        <div className="bg-primary text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop" className="w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-white/10" alt="HOD"/>
                <div>
                    <h2 className="font-serif text-3xl font-bold mb-4">From the Desk of the HOD</h2>
                    <p className="text-indigo-100 italic text-lg leading-relaxed mb-6">
                        "At the Department of Language Dynamics, we don't just teach languages or programming—we teach students to think at the intersection of human cognition and machine intelligence. Our graduates are uniquely positioned to solve problems that neither traditional linguists nor pure computer scientists can address alone."
                    </p>
                    <div>
                        <p className="font-bold text-xl">Dr. Priya Venkatesh, Ph.D.</p>
                        <p className="text-teal text-sm uppercase tracking-widest">Professor & Head</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
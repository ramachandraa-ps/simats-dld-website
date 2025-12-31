import React from 'react';
import { ArrowRight, BookOpen, Code, FileText, Award, Lightbulb, GraduationCap, Languages, Brain, Mic, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImagesSlider } from '../components/ui/images-slider';
import { CircularTestimonials } from '../components/ui/circular-testimonials';
import { motion } from 'framer-motion';
import { RESEARCH_CENTRES, INITIAL_FACULTY } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const heroImages = [
    // Tech / Linguistics abstract
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop", 
    // Campus
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
    // Data/AI
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
  ];

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'BookOpen': return BookOpen;
      case 'Brain': return Brain;
      case 'Mic': return Mic;
      case 'Languages': return Languages;
      case 'MessageSquare': return MessageSquare;
      default: return Code;
    }
  };

  // Adapter to convert Faculty data to the format expected by CircularTestimonials
  const facultyAsTestimonials = INITIAL_FACULTY.map(faculty => ({
    quote: faculty.bio,
    name: faculty.name,
    designation: faculty.designation,
    src: faculty.photo
  }));

  return (
    <div className="w-full relative overflow-x-hidden">
      
      {/* Immersive Hero Slider */}
      <section className="relative h-screen min-h-[600px] w-full bg-primary">
        <ImagesSlider className="h-full" images={heroImages} direction="up" autoplay={true}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-50 flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto"
          >
            <motion.h1 
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl"
            >
              Pioneering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-white to-teal">Future</span> of
              <span className="italic relative ml-4">
                Language
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-2xl text-indigo-100 mb-10 max-w-2xl leading-relaxed font-sans font-light drop-shadow-md"
            >
              Where Linguistics Meets Computational Innovation.
              Join India's first department dedicated to Language Dynamics.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button 
                onClick={() => navigate('/contact')}
                className="group relative px-8 py-4 bg-white text-primary font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button 
                onClick={() => navigate('/research')}
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full transition-all hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
              >
                Research Labs
              </button>
            </motion.div>
          </motion.div>
        </ImagesSlider>
      </section>

      {/* Impact & Stats Section */}
      <section className="relative z-30 -mt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Narrative Side */}
            <div className="lg:w-1/3 space-y-6 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal/10 rounded-full blur-2xl"></div>
              <h4 className="relative text-orange font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-8 h-px bg-orange"></span> Impact
              </h4>
              <h2 className="relative font-serif text-4xl md:text-5xl text-primary font-medium leading-[1.1]">
                Excellence in <br/> <span className="italic text-gray-400">Innovation</span>
              </h2>
              <p className="relative text-gray-500 leading-relaxed font-light text-lg">
                Our department is a powerhouse of research and placement. We consistently break records in publications, patents, and industry integration.
              </p>
            </div>

            {/* Data Grid Side */}
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 relative">
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
               <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

               {[
                 { label: "Publications", value: "150+", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
                 { label: "Patents Filed", value: "75+", icon: Lightbulb, color: "text-teal", bg: "bg-teal/10" },
                 { label: "Active Grants", value: "₹15Cr+", icon: Award, color: "text-vermilion", bg: "bg-red-50" },
                 { label: "Placement", value: "98%", icon: GraduationCap, color: "text-orange", bg: "bg-orange/10" },
               ].map((stat, i) => (
                 <div key={i} className="group relative p-4 rounded-2xl transition-colors hover:bg-gray-50/50">
                    <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                       <stat.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2 tracking-tight group-hover:translate-x-1 transition-transform">{stat.value}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{stat.label}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights - Centres of Excellence */}
      <section className="py-12 bg-paper relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">Centres of Excellence</h2>
             <p className="text-gray-600 text-lg">5 specialized research wings bridging theoretical linguistics and modern AI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {RESEARCH_CENTRES.slice(0, 3).map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={i} className={`p-8 rounded-3xl bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default border border-gray-100 group`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 bg-gray-50 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-primary mb-3">{item.shortName}</h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-4">{item.name}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-primary">
                    Explore Centre <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <button 
                onClick={() => navigate('/research')}
                className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors font-medium"
            >
                View All 5 Centres
            </button>
          </div>
        </div>
      </section>

      {/* Faculty Section - Using Circular Component Style */}
      <section className="py-24 bg-white overflow-hidden pb-40">
         <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">Our Faculty</h2>
            <p className="text-gray-600 text-lg">Meet the visionaries and experts leading our department.</p>
         </div>
         
         <div className="flex justify-center">
             <CircularTestimonials 
               testimonials={facultyAsTestimonials} 
               colors={{
                 name: '#0F2C59',
                 designation: '#00A99D',
                 testimony: '#4b5563',
                 arrowBackground: '#F1F5F9',
                 arrowForeground: '#0F2C59',
                 arrowHoverBackground: '#F7941D'
               }}
             />
         </div>
         <div className="mt-12 text-center">
            <button 
                onClick={() => navigate('/faculty')}
                className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-indigo-900 transition-colors shadow-lg shadow-primary/20"
            >
                View All Faculty
            </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
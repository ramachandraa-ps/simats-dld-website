import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
                <h1 className="font-serif text-5xl font-bold text-primary mb-6">Get in Touch</h1>
                <p className="text-xl text-gray-600 mb-10">We're here to answer your questions about admissions, research, and collaboration.</p>
                
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                            <p className="text-gray-600">Saveetha Institute of Medical and Technical Sciences<br/>Saveetha Nagar, Thandalam<br/>Chennai - 602 105, Tamil Nadu.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                            <p className="text-gray-600">Main: +91 44 2680 1999</p>
                            <p className="text-gray-600">Admission: +91 44 2680 2000</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-vermilion/10 text-vermilion rounded-full flex items-center justify-center shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                            <p className="text-gray-600">General: languagedynamics@simats.edu.in</p>
                            <p className="text-gray-600">Admissions: admission.dld@simats.edu.in</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                            <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                            <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Send a Message</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Jane" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="jane@example.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                            <option>Admission Inquiry</option>
                            <option>Research Collaboration</option>
                            <option>Student Project</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32" placeholder="How can we help you?"></textarea>
                    </div>

                    <button type="button" className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-indigo-800 transition-colors shadow-lg shadow-primary/30">
                        Send Message
                    </button>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
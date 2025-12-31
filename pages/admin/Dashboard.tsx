import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Users, FileText, Award, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard: React.FC = () => {
  const { faculty, pages, currentUser } = useStore();

  const stats = [
    { label: 'Total Faculty', value: faculty.length, icon: Users, color: 'bg-blue-500' },
    { label: 'Published Pages', value: pages.length, icon: FileText, color: 'bg-teal-500' },
    { label: 'Pending Approvals', value: 3, icon: AlertCircle, color: 'bg-orange-500' },
    { label: 'Total Achievements', value: faculty.reduce((acc, f) => acc + f.achievements.length, 0), icon: Award, color: 'bg-purple-500' },
  ];

  const chartData = faculty.map(f => ({
    name: f.name.split(' ').pop(),
    publications: f.publications.length + Math.floor(Math.random() * 5) // Mock extra data
  }));

  return (
    <div className="space-y-8">
       <div>
         <h1 className="text-2xl font-bold text-gray-800 font-serif">Welcome back, {currentUser?.name}</h1>
         <p className="text-gray-500">Here's what's happening in the department today.</p>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {stats.map((stat, i) => (
           <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-gray-200`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
           </div>
         ))}
       </div>

       <div className="grid lg:grid-cols-2 gap-8">
          {/* Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-80">
            <h3 className="font-bold text-gray-800 mb-6">Publications by Faculty</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="publications" fill="#2F3A8F" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">Recent Updates</h3>
              <button className="text-sm text-primary font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-4">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-teal mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">New publication added by Dr. Ripley</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                 </div>
               ))}
               <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Content update approval pending: "About Us"</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                 </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;
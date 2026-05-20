import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-white px-5 py-4 border-b border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
      </div>

      <div className="px-5 pt-6 flex gap-4">
        {/* Profile Picture with Camera Icon */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="https://i.pravatar.cc/150?img=32" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-violet-600 p-1.5 rounded-full border-2 border-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        {/* User Info fetched from Context */}
        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{user.name || 'Marry Doe'}</h3>
          <p className="text-gray-500 text-sm">{user.email || 'Marry@Gmail.Com'}</p>
        </div>
      </div>

      <div className="px-5 mt-6">
        <p className="text-gray-500 text-[15px] leading-relaxed border-t border-dashed border-gray-300 pt-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}
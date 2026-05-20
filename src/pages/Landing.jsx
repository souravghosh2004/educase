import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full px-6 pb-8 pt-10 bg-gray-50">
      <div className="flex-1 flex flex-col justify-end mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button variant="primary" onClick={() => navigate('/signup')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
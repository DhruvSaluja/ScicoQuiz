'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import supabase from '../utils/supabase';

export default function Dashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      if (user?.email) {
        const { data, error } = await supabase
          .from('Users')
          .select('name')
          .eq('email', user.email)
          .single();
          
        if (data) setProfile(data);
        setLoading(false);
      }
    }
    fetchProfile();
  }, [user]);

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 mt-20">
        Welcome Back, {profile?.name || user?.email}!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Quick Actions Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold text-coral-500 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link 
              href="/profile" 
              className="block w-full py-3 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Edit Profile
            </Link>
            <Link 
              href="/quiz" 
              className="block w-full py-3 px-4 bg-coral-500 text-white rounded hover:bg-coral-600 transition-colors"
            >
              Start Quiz
            </Link>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold text-coral-500 mb-4">Your Stats</h2>
          <div className="space-y-2 text-white">
            <p>Quizzes Completed: 0</p>
            <p>Score: 0</p>
            <p>Ranking: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
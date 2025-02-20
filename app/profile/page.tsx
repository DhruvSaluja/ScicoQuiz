'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import supabase from '../../utils/supabase';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    schoolName: '',
    phoneNo: '',
  });

  console.log(user);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchUserProfile();
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('Users')
        .select('*')
        .eq('email', user?.email)
        .single();

      if (error) throw error;
      if (data) setUserData(data);
      console.log('User data:', userData);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('Users')
        .update(userData)
        .eq('email', user?.email);

      if (error) throw error;
      alert('Profile updated successfully!');
      router.push('/'); 
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen  text-white min-h-screen bg-[#2e2e30] grid-background relative">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-white mb-6">Profile Settings</h1>
        
        <form onSubmit={handleUpdate} className="space-y-4 font-sans">
          <div>
            <label className="text-white block mb-2">Name</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>
          
          <div>
            <label className="text-white block mb-2">School Name</label>
            <input
              type="text"
              value={userData.schoolName}
              onChange={(e) => setUserData({...userData, schoolName: e.target.value})}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>
          
          <div>
            <label className="text-white block mb-2">Phone Number</label>
            <input
              type="tel"
              value={userData.phoneNo}
              onChange={(e) => setUserData({...userData, phoneNo: e.target.value})}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-coral-500 text-white py-2 rounded hover:bg-coral-600"
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
}
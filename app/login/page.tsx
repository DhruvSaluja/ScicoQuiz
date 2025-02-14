'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const page = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { email, password } = formData;
    let response;

    if (isRegistering) {
      response = await supabase.auth.signUp({ email, password });
    } else {
      response = await supabase.auth.signInWithPassword({ email, password });
    }

    if (response.error) {
      setError(response.error.message);
    } else {
      router.push('/dashboard'); // Redirect after successful login/signup
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isRegistering ? 'Register' : 'Login'}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleAuth} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-2 rounded-md transition-all duration-300"
          >
            {loading ? 'Processing...' : isRegistering ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-coral-500 cursor-pointer hover:underline"
          >
            {isRegistering ? 'Login' : 'Register'}
          </span>
        </p>
      </div>
    </div>
  );
}


export default page

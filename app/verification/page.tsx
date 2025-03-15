'use client';

export default function Verification() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2e2e30] grid-background relative px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Verify Your Email
        </h2>
        <p className="text-gray-300 mb-4">
          Please check your email for a verification link.
          You need to verify your email before logging in.
        </p>
        <a 
          href="/login" 
          className="inline-block bg-coral-500 text-white px-6 py-2 rounded hover:bg-coral-600"
        >
          Return to Login
        </a>
      </div>
    </div>
  );
}
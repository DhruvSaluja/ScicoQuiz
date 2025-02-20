'use client'
import './globals.css'

import React ,{ useState } from 'react';
import { useAuth } from '../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#2e2e30] grid-background relative ">
      {/* Navbar */}
      
      
      {/* Main Content */}
      <main className="relative flex items-center main-bg-img justify-center border-b-2 border-white h-screen px-4 py-16 md:py-24">
        
         {!user ? (<div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-20 mt-20">
            WELCOME TO SCIENCE ARENA....
          </h1>
          <div className="mt-0 animate-fade-in-up">
            <a 
              href="/login" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white 
                        bg-gradient-to-r from-coral-500 to-coral-600 rounded-full overflow-hidden transform 
                        transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-coral-600 
                        before:to-coral-700 before:opacity-0 before:transition-opacity before:duration-300
                        hover:before:opacity-100 "
            >
              <span className="relative z-10 flex font-sans items-center">
                Register Now
                <svg 
                  className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
          </div>
  ) : (<Dashboard/>)
        }

        
      </main>
      <div className="min-h-screen px-4 py-16 md:px-8 mt-11">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="flex mb-12">
          <div className="text-[#FF6B6B] text-9xl font-bold opacity-20">
            <div>A</div>
            <div>B</div>
            <div>O</div>
            <div>U</div>
            <div>T</div>
          </div>
          {/* <div className="text-[#FF6B6B] text-8xl font-bold opacity-20">
            <div>A</div>
            <div>B</div>
            <div>O</div>
            <div>U</div>
            <div>T</div>
          </div> */}
          
          {/* Main Content Section */}
          <div className="flex-1 text-white ml-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About ScicoQuiz</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                Welcome to ScicoQuiz, your premier platform for testing and enhancing your scientific knowledge through engaging and challenging quizzes.
              </p>

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">Our Mission</h2>
              <p>
                We aim to make learning science interactive, fun, and accessible to everyone. Through carefully crafted questions and comprehensive assessments, we help students and enthusiasts master complex scientific concepts.
              </p>

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">What We Offer</h2>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Comprehensive question banks covering Physics, Chemistry, and Biology</li>
                <li>Timed sections to improve your speed and accuracy</li>
                <li>Detailed explanations for each answer</li>
                <li>Progress tracking and performance analytics</li>
                <li>Regular updates with new question sets</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">Why Choose Us</h2>
              <p>
                Our platform is designed by expert educators and scientists to ensure quality and accuracy in every question. We focus on conceptual understanding rather than mere memorization, helping you build a strong foundation in sciences.
              </p>

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">Join Us</h2>
              <p>
                Whether you're preparing for competitive exams or simply want to challenge yourself, ScicoQuiz provides the perfect environment for your scientific journey. Register now to start your learning adventure!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

'use client'
import './globals.css'

import React ,{ useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Home() {
  

  return (
    <div className="min-h-screen bg-[#2e2e30] grid-background relative ">
      {/* Navbar */}
      
      
      {/* Main Content */}
      <main className="relative flex items-center main-bg-img justify-center border-b-2 border-white h-screen px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-48 mt-20">
            REGISTRATIONS STARTING SOON....
          </h1>
        </div>
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

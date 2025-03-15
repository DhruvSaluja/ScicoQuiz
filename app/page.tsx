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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const handleToggle = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};
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
      <div className="About min-h-screen px-4 py-16 md:px-8 mt-11">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                {/* Welcome to ScicoQuiz, your premier platform for testing and enhancing your scientific knowledge through engaging and challenging quizzes. */}
                We're an enthusiastic team of students from <span className="text-[#FF6B6B]"><a href="https://www.iiserb.ac.in/" target='_blank'>IISER Bhopal</a></span>, driven by a simple motto to encourage and empower science, innovation, and scientific inquiry among the young minds of India. We believe that every student deserves the chance to unleash their curiosity, creativity, and revolutionise the world with their ideas; pushing the boundaries of human knowledge. 
              </p>

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">Our Mission</h2>
              <p>
                {/* We aim to make learning science interactive, fun, and accessible to everyone. Through carefully crafted questions and comprehensive assessments, we help students and enthusiasts master complex scientific concepts. */}
                Our mission is to promote scientific and research interests among school students across India, empowering them to become the next generation of thinkers, innovators, and leaders.Through carefully crafted questions and comprehensive assessments, we help students and enthusiasts master complex scientific concepts.
              </p>

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">The Olympiad</h2>
              {/* <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Comprehensive question banks covering Physics, Chemistry, and Biology</li>
                <li>Timed sections to improve your speed and accuracy</li>
                <li>Detailed explanations for each answer</li>
                <li>Progress tracking and performance analytics</li>
                <li>Regular updates with new question sets</li>
              </ul> */}
              Our flagship initiative is the All India Olympiad, a comprehensive online examination that will challenge, inspire, and push your knowledge, skills, and problem-solving abilities to new heights! We're not just looking for students who can memorise formulas and equations - we're on the hunt for curious, creative, and critical thinkers who are obsessed with science and learning.
              Through the Olympiad, we aim to ignite a love for science and learning that will stay with students for the rest of their lives, and provide a platform for them to showcase their talents, learn from each other, and develop a competitive spirit.

              <h2 className="text-2xl font-semibold text-[#FF6B6B]">Olympiad Pattern</h2>
              <p>
                {/* Our platform is designed by expert educators and scientists to ensure quality and accuracy in every question. We focus on conceptual understanding rather than mere memorization, helping you build a strong foundation in sciences. */}
                The Olympiad will span the 5 major branches of science, namely- Physics, Chemistry, Biology, Mathematics and Logical Reasoning/Critical Thinking; with 5 questions from each domain to be solved within 2 hours.
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* FAQ */}
    <div className="py-6 px-4 md:px-8">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-7xl underline underline-offset-8 font-bold text-center text-white mb-12">
    <a href="/faq"> FAQ </a>
    </h2>
    
    <div className="space-y-4">
      {[
        {
          question: "What are the eligibility criteria to participate in the Ingenium Olympiad?",
          answer: "Students from classes 9 to 12, enrolled in any school are eligible to participate. Participants mustbe enrolled in a school registered for the Olympiad or register individually through our website."
        },
        {
          question: "How can I register for the Ingenium Olympiad?",
          answer: "Students can register through their school if it is participating. Alternatively, individual registrations are available online via the official website"
        },
        {
          question: "Are there any fees for participating in the Olympiad?",
          answer: "No, There are no fees for participating. Registrations are free of cost."
        },
        {
          question: "What is the format of the Ingenium Olympiad?",
          answer: "The exam consists of multiple-choice questions as well as subjective questions divided into 5 subjects: Physics, Chemistry, Biology, Math and Logical Reasoning, each with equal weightage.The number of questions and difficulty level vary by grade."
        },
        {
          question: "How many questions are there, and what is the duration of the exam?",
          answer: "Expect around 25 questions, 5 per subject to be solved in 2:30 hours, extra time may be provided for submission of answers."
        }
      ].map((faq, index) => (
        <div key={index} className="bg-gray-700 rounded-lg p-4  transition-all duration-300 border-2 border-transparent  focus-within:border-coral-500 hover:border-coral-500">
          <details 
            className="group"
            open={openIndex === index}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(index);
            }}
          >
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white p-2">
              <span>{faq.question}</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-gray-300 mt-3 group-open:animate-fadeIn p-2">
              {faq.answer}
            </p>
          </details>
        </div>
      ))}
      <div>
        <a href="/faq" className="text-white font-medium text-xl hover:text-coral-500 text-center block mt-4">
          ...Show all FAQs
        </a>
      </div>
    </div>
  </div>

    </div>
    </div>
  );
}

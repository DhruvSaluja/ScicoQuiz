'use client';
import { useState } from 'react';

interface Quiz {
  id: number;
  name: string;
  date: string;
  time: string;
  duration: string;
  participants: number;
  status: 'locked' | 'available';
}

const quizzes: Quiz[] = [
  {
    id: 1,
    name: 'Demo Round ',
    date: '2025-03-28',
    time: '10:00 AM',
    duration: '50 minutes',
    participants: 0,
    status: 'locked'
  },
  {
    id: 2,
    name: 'Final Round',
    date: '2025-03-30',
    time: '10:00 PM',
    duration: '150 minutes',
    participants: 0,
    status: 'locked'
  }
];

export default function QuizList() {
  const handleQuizClick = (quiz: Quiz) => {
    if (quiz.status === 'locked') {
      alert(`This quiz will be unlocked on ${quiz.date} at ${quiz.time}`);
    } else {
      // Navigate to quiz
      window.location.href = `/quiz/${quiz.id}`;
    }
  };

  return (
    <div className="min-h-screen  bg-[#2e2e30] grid-background  pt-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Available Quizzes
        </h1>
        
        <div className="space-y-4">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => handleQuizClick(quiz)}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-700"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-coral-500">
                    {quiz.name}
                  </h2>
                  <div className="mt-2 space-y-1 text-gray-300">
                    <p>Date: {quiz.date}</p>
                    <p>Time: {quiz.time}</p>
                    <p>Duration: {quiz.duration}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    quiz.status === 'locked' 
                      ? 'bg-gray-600 text-gray-300' 
                      : 'bg-coral-500 text-white'
                  }`}>
                    {quiz.status === 'locked' ? 'Locked' : 'Available'}
                  </span>
                  <span className="mt-2 text-sm text-gray-400">
                    {quiz.participants} Participants
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
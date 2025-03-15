'use client'
import React from 'react'
import { useState } from 'react';
const page = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    }
  return (
    <div className="min-h-screen px-4 py-16 md:px-8 mt-11">
       <div className="py-6 px-4 md:px-8">
  <div className="max-w-4xl mx-auto">
    <h2  className="text-7xl underline underline-offset-8 font-bold text-center text-white mb-12">
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
        },
        {
          question: "What are the prizes for top performers?",
          answer: "Top-performing students will receive exciting prizes such as telescopes, smart watches, backpacks,books, headphones and more from a price pool of INR 30,000. Top 100 rankers would also get a chance to visit IISER Bhopal for the final round. Specific details will be announced closer to the event."
        },
        {
          question: "When and where will the Olympiad take place?",
          answer: "The preliminary round will be held online on our website at 6:00 P.M, 30th March, and qualified participants will advance to the final round held in IISER Bhopal, in May."
        },
        {
          question: "What is the syllabus for the Olympiad?",
          answer: "The syllabus is based on CBSE, ICSE, and NCERT curricula. It includes topics in Physics, Chemistry, Biology, Math, and Logical Reasoning according to grade levels."
        },
        {
          question: "Can I participate if my school is not registered?",
          answer: "Yes, individual participation is allowed through online registration on our website. Please check the registration guidelines for more details."
        },
        {
          question: "Will I receive a certificate even if I don’t win?",
          answer: "Yes, all participants will receive a Certificate of Participation. Top performers will also receive Certificates of Excellence"
        },
        {
          question: "How can I prepare for the Olympiad?",
          answer: "You can prepare by reviewing your school curriculum, and solving problems from other similar olympiads, previous year questions of competitive exams would also be helpful."
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
    </div>
  </div>

    </div>
    </div>
  )
}

export default page

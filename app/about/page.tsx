import React from 'react'

const page = () => {
  return (
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
  )
}

export default page

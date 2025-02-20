import React from 'react'

const page = () => {

    const teamMembers = [
      { name: "Dhruv Dua", role: "Founder & CEO", imgUrl: "/images/dhruv_dua.jpg"},
      { name: "Dhruv Saluja", role: "Technical Lead" , imgUrl: "/images/dhruv_saluja.jpg"},
      { name: "Dev Raj", role: "Content Director", imgUrl: "/images/dev_raj.jpg" },
      { name: "Het Jani", role: "Product Manager" , imgUrl: "/images/het_jani_resized2.jpg"},
      { name: "Ankita", role: "Design Lead" , imgUrl: "/images/ankita_hegde.jpg"},
      { name: "Rishiraj Ghosh", role: "Development Lead" , imgUrl: "/images/rishiraj.jpg"},
      { name: "Pratham Shah", role: "Content Strategist", imgUrl: "/images/pratham.jpg"},
      { name: "Mayank Wangikar", role: "Operations Head", imgUrl: "/images/mayank_wangikar.jpg" },
     
    ];
  
    return (
      <div className="min-h-screen px-4 py-16 md:px-8 bg-[#2e2e30] grid-background relative">
        <div className="max-w-6xl mt-7 mx-auto">
          {/* Team Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-[#FF6B6B] text-xl">Meet the minds behind ScicoQuiz</p>
          </div>
  
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Team Member Image Container */}
                <div className="w-48 h-48 rounded-full  border-4 border-[#FF6B6B] bg-[#FF6B6B] overflow-hidden mb-4">
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-full h-full team-member-image object-cover"
                  />
                </div>
                
                {/* Team Member Details */}
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#FF6B6B]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Team Description */}
          <div className="mt-20 text-center">
            <p className="text-white text-lg max-w-3xl mx-auto">
              Our team of dedicated professionals brings together expertise in education, 
              technology, and scientific research to create the most comprehensive and 
              engaging quiz platform for science enthusiasts.
            </p>
          </div>
        </div>
      </div>
  )
}

export default page

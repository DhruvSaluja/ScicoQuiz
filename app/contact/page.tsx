import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#2e2e30] text-white flex  justify-center">
      <div className="container mx-auto py-20 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 gap-8 ">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl text-center font-semibold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#444446]" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#444446]" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#444446]" placeholder="Your Message"></textarea>
              </div>
              <button className="bg-[#FF6B6B] hover:bg-[#e65252] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
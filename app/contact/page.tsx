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
// 'use client'
// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       await emailjs.send(
//         'service_33d8ndq', // Replace with your EmailJS service ID
//         'template_59gp4jt', // Replace with your EmailJS template ID
//         {
//           name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//           email: 'fake10444444@gmail.com', // Replace with company email
//         },
//         'NNjO7c14ZdXS5969U' // Replace with your EmailJS public key
//       );

//       setStatus({
//         type: 'success',
//         message: 'Message sent successfully!'
//       });
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       setStatus({
//         type: 'error',
//         message: 'Failed to send message. Please try again.'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#2e2e30] text-white flex justify-center">
//       <div className="container mx-auto py-20 px-4 md:px-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>

//         <div className="grid grid-cols-1 gap-8">
//           <div>
//             <h2 className="text-2xl text-center font-semibold mb-4">Send us a message</h2>
//             {status && (
//               <div className={`p-4 rounded mb-4 ${
//                 status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
//               }`}>
//                 {status.message}
//               </div>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#444446]"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#444446]"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#444446] h-32"
//                   placeholder="Your Message"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors ${
//                   loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {loading ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// 'use client';

// import { useState } from 'react';
// import supabase from '../../utils/supabase'
// import { useRouter } from 'next/navigation';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// const page = () => {
  
//   const router = useRouter();

//   const [isRegistering, setIsRegistering] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAuth = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const { email, password } = formData;
//     let response;

//     if (isRegistering) {
//       response = await supabase.auth.signUp({ email, password });
//     } else {
//       response = await supabase.auth.signInWithPassword({ email, password });
//     }

//     if (response.error) {
//       setError(response.error.message);
//     } else {
//       router.push('/'); // Redirect after successful login/signup
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen  text-white min-h-screen bg-[#2e2e30] grid-background relative ">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           {isRegistering ? 'Register' : 'Login'}
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleAuth} className="flex flex-col space-y-4">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Email"
//             required
//             className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Password"
//             required
//             className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//           />
//           {isRegistering ?
//           <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           placeholder="Password"
//           required
//           className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//         />
//           :
//           null
//         }
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-2 rounded-md transition-all duration-300"
//           >
//             {loading ? 'Processing...' : isRegistering ? 'Sign Up' : 'Login'}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-400">
//           {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
//           <span
//             onClick={() => setIsRegistering(!isRegistering)}
//             className="text-coral-500 cursor-pointer hover:underline"
//           >
//             {isRegistering ? 'Login' : 'Register'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// import React from 'react'

// const page = () => {
//   return (
//     // <div>
//     //   <h1>Hello from the Auth Page</h1>
//     // </div>
//     <div className="min-h-screen bg-[#2e2e30] grid-background relative ">
//       <div className="flex flex-col justify-center items-center p-12">
//         <div className="bg-black mt-12 text-white shadow-md rounded-md p-8 w-full max-w-[300px]">
//           <h1 className="text-xl font-bold text-center">Login</h1>
//         </div>
//         </div>
//     </div>
//   )
// }


// export default page


// VERSION 2

// 'use client';

// import { useState } from 'react';
// import supabase from '../../utils/supabase'
// import { useRouter } from 'next/navigation';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// const page = () => {
  
//   const router = useRouter();

//   const [isRegistering, setIsRegistering] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     schoolName: '',
//     phoneNo: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAuth = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const { email, password, name, schoolName, phoneNo } = formData;
//     let response;

//     if (isRegistering) {
//       response = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (!response.error) {
//         // After successful signup, store user metadata in the public table
//         const { error: metadataError } = await supabase
//           .from('Users') // Replace 'users' with your table name
//           .insert([
//             {
//               email: email, // Use email as the primary key
//               name: name,
//               schoolName: schoolName,
//               phoneNo: phoneNo,
//             },
//           ]);

//         if (metadataError) {
//           setError(metadataError.message);
//         } else {
//           router.push('/'); // Redirect after successful signup and metadata storage
//         }
//       } else {
//         setError(response.error.message);
//       }
//     } else {
//       response = await supabase.auth.signInWithPassword({ email, password });

//       if (response.error) {
//         setError(response.error.message);
//       } else {
//         router.push('/contact'); // Redirect after successful login
//       }
//     }

//     setLoading(false);
//   };
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen  text-white min-h-screen bg-[#2e2e30] grid-background relative ">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           {isRegistering ? 'Register' : 'Login'}
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleAuth} className="flex flex-col space-y-4">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Email"
//             required
//             className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'} // Toggle password visibility
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Password"
//               required
//               className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500 w-full"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white focus:outline-none"
//             >
//               {showPassword ? 'Hide' : 'Show'} {/* Change text based on visibility */}
//             </button>
//           </div>
//           {isRegistering ? (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Name"
//                 required
//                 className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//               />
//               <input
//                 type="text"
//                 name="schoolName"
//                 value={formData.schoolName}
//                 onChange={handleInputChange}
//                 placeholder="School Name"
//                 required
//                 className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//               />
//               <input
//                 type="tel" // Use tel type for phone number
//                 name="phoneNo"
//                 value={formData.phoneNo}
//                 onChange={handleInputChange}
//                 placeholder="Phone Number"
//                 required
//                 className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//               />
             
//             </>
//           ) : null}
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-2 rounded-md transition-all duration-300"
//           >
//             {loading ? 'Processing...' : isRegistering ? 'Sign Up' : 'Login'}
//           </button>
//         </form>
//         <p className="text-center mt-4 text-gray-400">
//           {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
//           <span
//             onClick={() => setIsRegistering(!isRegistering)}
//             className="text-coral-500 cursor-pointer hover:underline"
//           >
//             {isRegistering ? 'Login' : 'Register'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default page;



// VERSION 3

// 'use client';

// import { useState } from 'react';
// import supabase from '../../utils/supabase';
// import { useRouter } from 'next/navigation';

// const Page = () => {
//   const router = useRouter();
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Separate state for registration form
//   const [registerFormData, setRegisterFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     schoolName: '',
//     phoneNo: '',
//   });

//   // Separate state for login form
//   const [loginFormData, setLoginFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   // Separate input change handler for registration form
//   const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
//   };

//   // Separate input change handler for login form
//   const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
//   };

//   const handleAuth = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (isRegistering) {
//       const { email, password, name, schoolName, phoneNo } = registerFormData; // Use registerFormData
//       const response = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (!response.error) {
//         const { error: metadataError } = await supabase
//           .from('users')
//           .insert([
//             {
//               email: email,
//               name: name,
//               schoolName: schoolName,
//               phoneNo: phoneNo,
//             },
//           ]);

//         if (metadataError) {
//           setError(metadataError.message);
//         } else {
//           router.push('/');
//         }
//       } else {
//         setError(response.error.message);
//       }
//     } else {
//       const { email, password } = loginFormData; // Use loginFormData
//       const response = await supabase.auth.signInWithPassword({ email, password });

//       if (response.error) {
//         setError(response.error.message);
//       } else {
//         router.push('/contact');
//       }
//     }

//     setLoading(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen text-white min-h-screen bg-[#2e2e30] grid-background relative ">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           {isRegistering ? 'Register' : 'Login'}
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleAuth} className="flex flex-col space-y-4">
//           <input
//             type="email"
//             name="email"
//             value={isRegistering ? registerFormData.email : loginFormData.email} // Use conditional rendering
//             onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange} // Use conditional rendering
//             placeholder="Email"
//             required
//             className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               value={isRegistering ? registerFormData.password : loginFormData.password} // Use conditional rendering
//               onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange} // Use conditional rendering
//               placeholder="Password"
//               required
//               className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500 w-full"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white focus:outline-none"
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//           {isRegistering ? (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 value={registerFormData.name}
//                 onChange={handleRegisterInputChange}
//                 placeholder="Name"
//                 required
//                 className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//               />
//               <input
//                 type="text"
//                 name="schoolName"
//                 value={registerFormData.schoolName}
//                 onChange={handleRegisterInputChange}
//                 placeholder="School Name"
//                 required
//                 className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//               />
//               <input
//                 type="tel"
//                 name="phoneNo"
//                 value={registerFormData.phoneNo}
//                 onChange={handleRegisterInputChange}
//                 placeholder="Phone Number"
//                 required
//                 className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
//               />
              
//             </>
//           ) : null}
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-2 rounded-md transition-all duration-300"
//           >
//             {loading ? 'Processing...' : isRegistering ? 'Sign Up' : 'Login'}
//           </button>
//         </form>
//         <button
//           onClick={() => setIsRegistering(!isRegistering)}
//           className="text-sm text-gray-400 hover:text-gray-300 transition-all duration-300"
//         >
//           {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;


// VERSION 4

'use client';
import { useState } from 'react';
import supabase from '../../utils/supabase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    schoolName: '',
    phoneNo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);



    try {
      if (isRegistering) {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });

        if (authError) throw authError;

        if (authData.user) {
          const { error: profileError } = await supabase
            .from('Users')
            .insert([
              {
                email: formData.email,
                name: formData.name,
                schoolName: formData.schoolName,
                phoneNo: formData.phoneNo,
              },
            ]);

          if (profileError) throw profileError;
        }
        router.push('/verification');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) throw signInError;
        router.push('/');
      }

   
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <div className="flex justify-center items-center h-screen  text-white min-h-screen bg-[#2e2e30] grid-background relative">
      <div className="max-w-md w-full bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {isRegistering ? 'Register' : 'Login'}
        </h2>
        
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4 font-sans">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          
          {/* <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          /> */}

           <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
              className="px-4 py-2 rounded-md bg-gray-700 font-sans text-white focus:outline-none focus:ring-2 focus:ring-coral-500 w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'} {/* Change text based on visibility */}
            </button>
          </div>

          {isRegistering && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={formData.schoolName}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              
              <input
                type="tel"
                name="phoneNo"
                placeholder="Phone Number"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-coral-500 text-white rounded hover:bg-coral-600"
          >
            {loading ? 'Processing...' : isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          {isRegistering ? 'Already have an account? ' : "Don't have an account? "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-coral-500 hover:underline"
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}
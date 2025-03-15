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
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  //   name: '',
  //   schoolName: '',
  //   phoneNo: '',
  // });
    // Separate state for registration form
  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    state: '',
    city: '',
    address: '',
    zip: '',
    schoolName: '',
    phoneNo: '',
    alternatePno:'' ,
    document: null as File | null,
  });

  // Separate state for login form
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const input = e.target as HTMLInputElement;
    if (file) {
      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        input.value = '';
        return;
      }
      
      // Check file type
      if (file.type !== 'application/pdf') {
        alert('Only PDF files are allowed');
        input.value = '';
        return;
      }
      
      setRegisterFormData({ ...registerFormData, document: file });
    }
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isRegistering) {
        if (registerFormData.password !== registerFormData.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: registerFormData.email,
          password: registerFormData.password,
        });

        if (authError) throw authError;

        if (!authError && authData.user) {
          let fileName = "";
          if (registerFormData.document) {
            const fileExt = registerFormData.document.name.split('.').pop();
            fileName = `${authData.user.email}-${authData.user.id}.${fileExt}`;
            
            const { error: uploadError } = await supabase.storage
              .from('documents-id-proof')
              .upload(fileName, registerFormData.document);
              
            if (uploadError) throw uploadError;
          }
          const { data: publ } = supabase.storage
            .from('documents-id-proof')
            .getPublicUrl(fileName);
          

          const { error: profileError } = await supabase
            .from('Users')
            .insert([
              {
                email: registerFormData.email,
                name: registerFormData.name,
                state: registerFormData.state,
                city: registerFormData.city,
                address: registerFormData.address,
                zipcode: registerFormData.zip,
                schoolName: registerFormData.schoolName,
                phoneNo: registerFormData.phoneNo,
                alternatephoneNo: registerFormData.alternatePno,  
          //       documentPath: registerFormData.document ? 
          // `${authData.user.id}.${registerFormData.document.name.split('.').pop()}` : 
          // null
          documentPath: registerFormData.document ? 
          publ.publicUrl : null
              },
            ]);

          if (profileError) throw profileError;
        }
        router.push('/verification');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: loginFormData.email,
          password: loginFormData.password,
        });

        if (signInError) throw signInError;
        router.push('/');
      }

   
    } catch (error: any) {
      setError(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <div className={`flex justify-center items-center   text-white min-h-screen ${isRegistering? '':'bg-[#2e2e30]'} ${isRegistering? '':'grid-background'} relative`}>
      <div className={`${isRegistering? 'max-w-7xl' : 'max-w-md'} w-full bg-gray-800 rounded-lg p-8 my-32`}>
        <h2 className={`${isRegistering? 'text-6xl':'text-3xl'} font-bold text-white text-center mb-6`}>
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
            placeholder="Email*"
            value={isRegistering? registerFormData.email : loginFormData.email}
            onChange={isRegistering? handleRegisterInputChange : handleLoginInputChange}
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
              value={isRegistering? registerFormData.password : loginFormData.password}
              onChange={isRegistering? handleRegisterInputChange : handleLoginInputChange }
              placeholder="Password*"
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
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password*"
                value={registerFormData.confirmPassword}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={registerFormData.name}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="state"
                placeholder="State*"
                value={registerFormData.state}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                value={registerFormData.city}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="address"
                placeholder="Address*"
                value={registerFormData.address}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code*"
                value={registerFormData.zip}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              
              <input
                type="text"
                name="schoolName"
                placeholder="School Name*"
                value={registerFormData.schoolName}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              
              <input
                type="text"
                name="phoneNo"
                placeholder="Phone Number*"
                value={registerFormData.phoneNo}
                onChange={handleRegisterInputChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="alternatePno"
                placeholder="Alternate Phone Number"
                value={registerFormData.alternatePno}
                onChange={handleRegisterInputChange}
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  ID Proof (PDF, max 10MB)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full p-3 rounded bg-gray-700 text-white file:mr-4 file:py-2 
                            file:px-4 file:rounded file:border-0 file:bg-coral-500 
                            file:text-white hover:file:bg-coral-600"
                  required
                />
              </div>
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
            onClick={() =>{ 
              setIsRegistering(!isRegistering);
              if (!isRegistering) {

                setLoginFormData({
                  email: '',
                  password: ''
                });
              } else {
                setRegisterFormData({
                  email: '',
                  password: '',
                  confirmPassword: '',
                  name: '',
                  state: '',
                  city: '',
                  address: '',
                  zip: '',
                  schoolName: '',
                  phoneNo: '',
                  alternatePno:'' ,
                  document: null ,
                });
              }
            }}
              
            className="text-coral-500 hover:underline"
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}
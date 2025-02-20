'use client'
import '../app/globals.css';


//V-1


// import React ,{ useState, useEffect } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// import supabase  from '../utils/supabase' ;
// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };


//   // console.log(supabase)
//   // useEffect(() => {
//   //   supabase.auth.onAuthStateChanged((user) => {
//   //     setUser(user);
//   //     console.log(user)
//   //   });
//   // }, []);

 

//   return (
//     <div  >
//       {/* Navbar */}
//       <nav className="flex  fixed top-0 z-50 w-full mt-2 rounded-full  justify-between items-center px-4 py-2 md:px-8 bg-white bg-opacity-10 backdrop-blur-lg border-b border-gray-300 border-opacity-20">
//         <div className="flex ml-9 items-center">
//           <img src="/images/logofinal.png" alt="Logo" className="h-14" />
//           <span className="text-coral-500 text-5xl font-bold ml-5">SCICOQUIZ</span>
//         </div>
        
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-20 text-2xl mr-8 text-white">
//           <a href="/" className="hover:text-coral-500 hover:underline">HOME</a>
//           <a href="/about" className="hover:text-coral-500 hover:underline">ABOUT</a>
//           <a href="/team" className="hover:text-coral-500 hover:underline">TEAM</a>
//           <a href="/contact" className="hover:text-coral-500 hover:underline">CONTACT US</a>
//           <a href="/login" className="hover:text-coral-500 hover:underline">LOGIN</a>
//         </div>
        
//         {/* Mobile Menu Icon */}
//         <div className="md:hidden" onClick={toggleMenu}>
//           {isOpen ? (
//             <CloseIcon className="h-6 w-6 text-white hover:text-coral-500" />
//           ) : (
//             <MenuIcon className="h-6 w-6 text-white hover:text-coral-500" />
//           )}
//         </div>
//       </nav>
      
//       {/* Side Panel */}
//       <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg z-50 ` }>
//         <ul className="mt-16 space-y-6 text-center">
//           <li><a href="/" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>HOME</a></li>
//           <li><a href="/about" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>ABOUT</a></li>
//           <li><a href="/team" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>TEAM</a></li>
//           <li><a href="/contact" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>CONTACT US</a></li>
//           <li><a href="/login" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>LOGIN</a></li>
//         </ul>
//       </div>
      
//       {/* Overlay to close menu when clicking outside */}
//       {isOpen && <div className="fixed inset-0 bg-transparent opacity-50 z-10" onClick={closeMenu}></div>}
      
      
//     </div>
//   );
// }


//V-2

// import React, { useState, useEffect } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useSession, signOut } from '@supabase/auth-helpers-react';
// import Link from 'next/link';
// import supabase from '../utils/supabase';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const session = useSession(); // Use useSession to get the session data
//   const [user, setUser] = useState(null);
//  console.log(session)
//   useEffect(() => {
//     // Fetch user data if session exists
//     if (session) {
//       const fetchUser = async () => {
//         try {
//           const { data: profile, error } = await supabase
//             .from('Users') // Replace 'users' with your user table name
//             .select('*')
//             .eq('email', session?.user?.email) // Assuming email is the primary key
//             .single();

//           if (error) {
//             console.error('Error fetching user profile:', error);
//           } else {
//             setUser(profile);
//           }
//         } catch (error) {
//           console.error('Unexpected error fetching user:', error);
//         }
//       };

//       fetchUser();
//     } else {
//       setUser(null); // Clear user data when there's no session
//     }
//     console.log(user)
//   }, [session]); // Run effect whenever session changes

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="flex fixed top-0 z-50 w-full mt-2 rounded-full justify-between items-center px-4 py-2 md:px-8 bg-white bg-opacity-10 backdrop-blur-lg border-b border-gray-300 border-opacity-20">
//         <div className="flex ml-9 items-center">
//           <img src="/images/logofinal.png" alt="Logo" className="h-14" />
//           <span className="text-coral-500 text-5xl font-bold ml-5">SCICOQUIZ</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-20 text-2xl mr-8 text-white items-center">
//           <Link href="/" className="hover:text-coral-500 hover:underline">
//             HOME
//           </Link>
//           <Link href="/about" className="hover:text-coral-500 hover:underline">
//             ABOUT
//           </Link>
//           <Link href="/team" className="hover:text-coral-500 hover:underline">
//             TEAM
//           </Link>
//           <Link href="/contact" className="hover:text-coral-500 hover:underline">
//             CONTACT US
//           </Link>

//           {session ? (
//             <>
//               {user && (
//                 <span className="text-white mr-4">
//                   Welcome, {user?.name || session?.user?.email}!
//                 </span>
//               )}
//               <button
//                 onClick={() => signOut()}
//                 className="text-white hover:text-coral-500 hover:underline"
//               >
//                 LOGOUT
//               </button>
//             </>
//           ) : (
//             <Link href="/login" className="hover:text-coral-500 hover:underline">
//               LOGIN
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden" onClick={toggleMenu}>
//           {isOpen ? (
//             <CloseIcon className="h-6 w-6 text-white hover:text-coral-500" />
//           ) : (
//             <MenuIcon className="h-6 w-6 text-white hover:text-coral-500" />
//           )}
//         </div>
//       </nav>

//       {/* Side Panel */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out shadow-lg z-50`}
//       >
//         <ul className="mt-16 space-y-6 text-center">
//           <li>
//             <Link
//               href="/"
//               className="block py-3 hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               className="block py-3 hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/team"
//               className="block py-3 hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               TEAM
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="block py-3 hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               CONTACT US
//             </Link>
//           </li>
//           {session ? (
//             <>
//               {user && (
//                 <li className="block py-3 hover:bg-gray-700">
//                   Welcome, {user?.name || session?.user?.email}!
//                 </li>
//               )}
//               <li>
//                 <button
//                   onClick={() => {
//                     signOut();
//                     closeMenu();
//                   }}
//                   className="block py-3 hover:bg-gray-700"
//                 >
//                   LOGOUT
//                 </button>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Link
//                 href="/login"
//                 className="block py-3 hover:bg-gray-700"
//                 onClick={closeMenu}
//               >
//                 LOGIN
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }


//V-3



import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import supabase from '../utils/supabase';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className="flex fixed top-0 z-50 w-full mt-2 rounded-full justify-between items-center px-4 py-2 md:px-8 bg-white bg-opacity-10 backdrop-blur-lg">
      <div className="flex ml-9 items-center">
        <img src="/images/logofinal.png" alt="Logo" className="h-14" />
        <span className="text-coral-500 text-5xl font-bold ml-5">SCICOQUIZ</span>
      </div>

      <div className="hidden md:flex space-x-20 text-2xl mr-8 text-white items-center">
        <Link href="/" className="hover:text-coral-500 hover:underline">HOME</Link>
        <Link href="/about" className="hover:text-coral-500 hover:underline">ABOUT</Link>
        <Link href="/team" className="hover:text-coral-500 hover:underline">TEAM</Link>
        <Link href="/contact" className="hover:text-coral-500 hover:underline">CONTACT</Link>
        
        {user ? (
          <>
            <Link href="/profile" className="hover:text-coral-500 hover:underline">PROFILE</Link>
            <button onClick={handleLogout} className="hover:text-coral-500 hover:underline">
              LOGOUT
            </button>
          </>
        ) : (
          <Link href="/login" className="hover:text-coral-500 hover:underline">LOGIN</Link>
        )}
      </div>

      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CloseIcon className="h-6 w-6 text-white hover:text-coral-500" />
        ) : (
          <MenuIcon className="h-6 w-6 text-white hover:text-coral-500" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-900 md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link href="/" className="py-2 text-white hover:text-coral-500">HOME</Link>
            <Link href="/about" className="py-2 text-white hover:text-coral-500">ABOUT</Link>
            <Link href="/team" className="py-2 text-white hover:text-coral-500">TEAM</Link>
            <Link href="/contact" className="py-2 text-white hover:text-coral-500">CONTACT</Link>
            {user ? (
              <>
                <Link href="/profile" className="py-2 text-white hover:text-coral-500">PROFILE</Link>
                <button onClick={handleLogout} className="py-2 text-white hover:text-coral-500">
                  LOGOUT
                </button>
              </>
            ) : (
              <Link href="/login" className="py-2 text-white hover:text-coral-500">LOGIN</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
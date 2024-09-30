import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Profiles from './components/Profiles';
import Profile from './components/Profile';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/contact-us',
//     element: <ContactUs />
//   },
//   {
//     path: '/profiles',
//     element: <Profiles/>,
//     children: [
//       {
//         path: "/profiles/:profileId",
//         element: <Profile />
//       }
//     ]
//   },
//   {
//     path: "/profiles/:profileId",
//     element: <Profile />
//   }
  
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Link to="/"><button>Link back to home</button></Link> */}
    {/* <RouterProvider router={router} /> */}
    <App />
    
  </StrictMode>,
)

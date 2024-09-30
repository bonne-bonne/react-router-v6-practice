import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Profiles from './components/Profiles';
import Profile from './components/Profile';

function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contact-us',
      element: <ContactUs />
    },
    {
      path: '/profiles',
      element: <Profiles/>,
      children: [
        {
          path: "/profiles/:profileId",
          element: <Profile />
        }
      ]
    },
    // {
    //   path: "/profiles/:profileId",
    //   element: <Profile />
    // }
    
  ])

  return (
    <>
    <p>This will appear on everypage</p>
     <RouterProvider router={router} />
    </>
  )
}

export default App

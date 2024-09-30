import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import DummyNavBar from './DummyNavBar'

export default function Home() {
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedin){
            navigate('contact-us')
        }
    }, [isLoggedin])

    
  return (
    <div>
        <DummyNavBar />
        <h1>Home Page</h1>
        <Link to="/contact-us"><button>Contact Us</button></Link>
        <Link to="/profiles"><button>profiles</button></Link>

        <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  )
}
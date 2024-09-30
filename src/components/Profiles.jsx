import { Link, Outlet, NavLink } from 'react-router-dom'
import '../index.css'
import './Profiles.css'
import DummyNavBar from './DummyNavBar'


export default function Profiles() {
  return (
    <div>
        <DummyNavBar />
        <h1>Profiles  Page</h1>
        {/* <Link to="/profiles/1">User 1</Link>
        <Link to="/profiles/2">User 2</Link>
        <Link to="/profiles/3">User 3</Link> */}

        {/* <NavLink to="/profiles/1" ><button className={({isActive}) => { return isActive ? "banana" : ""}}>User 1</button></NavLink> */}
        
        
        <NavLink to="/profiles/1" className={({isActive}) => { return isActive ? "banana" : ""}}><h1>user 1</h1></NavLink>
        <NavLink to="/profiles/2" className={({isActive}) => { return isActive ? "banana" : ""}}><button>User 2</button></NavLink>
        <NavLink to="/profiles/3" >{({ isActive }) => (<button className={isActive ? "banana" : ""}>User 3</button>)}</NavLink>
        <NavLink to="/profiles/4">{({ isActive }) => (<button className={isActive ? "banana" : ""}>User 4</button>)}</NavLink>
        <h1>Now showing the profile of....</h1>
        <Outlet />
    </div>
  )
}
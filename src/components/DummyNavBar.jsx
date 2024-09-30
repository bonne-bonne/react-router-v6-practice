import { Link } from 'react-router-dom';

export default function DummyNavBar() {
  return (
    <div style={{display: 'flex', gap: "20px"}}>
        <Link to="/">Home</Link>
        <Link to="/profiles/1">profile</Link>
        <Link to="contact-us">contact</Link>

    </div>
  )
}
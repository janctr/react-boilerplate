import { Link } from 'react-router';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">LOGCOP</h2>
            <Link to="/" className="link">
                Home
            </Link>
            <Link to="/map" label="Map" className="link">
                Map
            </Link>
            <Link to="/process-maps" label="Process Maps" className="link">
                Process Maps
            </Link>
            <div className="user-links">
                <Link to="/tasks" label="My Tasks" className="link">
                    My Tasks
                </Link>
                <Link to="/profile" label="Profile" className="link">
                    Profile
                </Link>
            </div>
        </nav>
    );
}

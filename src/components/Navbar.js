import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from '../hooks/useLogout';
import { Link } from "react-router-dom";
import { useWallsContext } from "../hooks/useWallsContext";

const Navbar = () => {
    const {logout} = useLogout();
    const {user}   = useAuthContext();
    const {dispatch:dis}  = useWallsContext();

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="topnav">
            <Link to="/" className='active'>Home</Link>

            {!user && (
                <div className="nav_2">
                    <Link to ='/login'>Login</Link>
                    <Link to ='/signup'>Signup</Link>
                </div>
            )}
            
            {user && (
                <div className="nav_2">
                    <span>{user.name}</span>
                    <button class = 'logout_btn' onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/logo.jpg';

function Header() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Remove user info
        localStorage.removeItem("user");

        // Redirect to sign in
        navigate("/signin");
    };

    // Check if user is logged in
    const loggedIn = Boolean(localStorage.getItem("user"));

    return (
        <header>
            <nav className={styles.nav}>
                <Link to="/">
                    <img src={logo} alt="Logo" className={styles.logoImage} />
                </Link>

                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/filter">Sports</Link></li>
                    <li><Link to="/filter">Concerts</Link></li>
                    <li><Link to="/filter">Location</Link></li>
                    <li><Link to="/filter">Festivals</Link></li>

                    {/* Show Sign In if NOT logged in */}
                    {!loggedIn && (
                        <li><Link to="/signin">Sign In</Link></li>
                    )}

                    {/* Show Sign Out if logged in */}
                    {loggedIn && (
                        <li>
                            <button 
                                onClick={handleSignOut} 
                                className={styles.signOutButton}
                            >
                                Sign Out
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
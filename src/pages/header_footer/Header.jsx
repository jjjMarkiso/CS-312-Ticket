import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
    return(
        <header>
            <nav className={styles.nav}>
                <a className={styles.logo} to="/">Logo</a>

                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/concerts">Concerts</Link></li>
                    <li><Link to="/location">Location</Link></li>
                    <li><Link to="/festivals">Festivals</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signout">Sign Out</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
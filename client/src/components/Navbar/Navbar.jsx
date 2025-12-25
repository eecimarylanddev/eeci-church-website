import eeciLogo from '../../assets/eeci-logo.PNG';
import { useSiteSettingsContext } from '../../contexts';
import './Navbar.css';

export function Navbar() {
  const { giveLink, loading } = useSiteSettingsContext();

  return (
    <header className="header">
      <nav className="nav-bar">
        <a href="/" className="logo">
          <img alt="EECI" src={eeciLogo} />
        </a>
        <ul className="nav-links">
          <li>
            <button className="nav-button">About</button>
          </li>
          <li>
            <button className="nav-button">Visit</button>
          </li>
          <li>
            <a
              href={giveLink}
              target="_blank"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              <button className="nav-button">Give</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

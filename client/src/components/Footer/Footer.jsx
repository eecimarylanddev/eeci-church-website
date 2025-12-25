import { useSiteSettingsContext } from '../../contexts';
import './Footer.css';

export function Footer() {
  const { giveLink, facebookUrl, youtubeUrl, tiktokUrl, loading } = useSiteSettingsContext();

  return (
    <footer className="footer">
      <div className="footer-title">
        <p>Connect with us.</p>
      </div>
      <div className="footer-socials" style={{ opacity: loading ? 0.7 : 1 }}>
        <a
          className="social-facebook"
          href={facebookUrl}
          target="_blank"
        >
          <i className="icon facebook"></i>
        </a>
        <a
          className="social-youtube"
          href={youtubeUrl}
          target="_blank"
        >
          <i className="icon youtube"></i>
        </a>
        <a
          className="social-tiktok"
          href={tiktokUrl}
          target="_blank"
        >
          <i className="icon tiktok"></i>
        </a>
      </div>
      <div className="footer-links">
        <a className="page-link" href="/">
          About
        </a>
        <a className="page-link" href="/">
          Visit
        </a>
        <a
          className="page-link"
          href={giveLink}
          target="_blank"
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          Give
        </a>
      </div>
      <div className="footer-copyright">
        <p>@ 2025 EECI</p>
      </div>
    </footer>
  );
}

import { useSiteSettingsContext } from '../../contexts';
import './About.css';

export function About() {
  const { aboutText, loading } = useSiteSettingsContext();

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">
          About Our Church
        </h1>
        <p className="about-content" style={{ opacity: loading ? 0.7 : 1 }}>
          {aboutText}
        </p>
      </div>
    </section>
  );
}

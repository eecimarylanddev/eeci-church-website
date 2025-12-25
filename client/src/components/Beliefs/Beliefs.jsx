import { useSiteSettingsContext } from '../../contexts';
import './Beliefs.css';

export function Beliefs() {
  const { beliefsText, loading } = useSiteSettingsContext();

  return (
    <section className="beliefs">
      <div className="beliefs-container">
        <p className="beliefs-eyebrow">
          WHAT WE BELIEVE
        </p>
        <h1 className="beliefs-title">
          Our Beliefs
        </h1>
        <p className="beliefs-content" style={{ opacity: loading ? 0.7 : 1 }}>
          {beliefsText}
        </p>
        <button className="beliefs-button">LEARN MORE</button>
      </div>
    </section>
  );
}

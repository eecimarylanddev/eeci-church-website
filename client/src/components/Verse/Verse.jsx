import './Verse.css';

export function Verse() {
  return (
    <section className="verse">
      <div className="verse-container">
        <div id="dailyVersesWrapper"></div>
          <script async defer src="https://dailyverses.net/get/verse.js?language=nkjv"></script>
      </div>
    </section>
  );
}

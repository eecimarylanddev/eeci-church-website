import { Intro } from '../Intro';
import { Sermon } from '../Sermon';
import { About } from '../About';
import { Beliefs } from '../Beliefs';
import { Verse } from '../Verse';
import { Services } from '../Services';
import { useSiteSettingsContext } from '../../contexts';

export function HomePage() {
  const { latestSermonVideoId, loading } = useSiteSettingsContext();

  return (
    <>
      <Intro />
      <Sermon
        subtitle="Latest message"
        title="Watch our last sermon"
        videoId={latestSermonVideoId}
        loading={loading}
      />
      <About />
      <Beliefs />
      <Services />
      <Verse />
    </>
  );
}

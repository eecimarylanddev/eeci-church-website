import { Box, Button, Text } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Sermon } from '../../components/Sermon';
import { About } from '../../components/About';
import { Beliefs } from '../../components/Beliefs';
import { Verse } from '../../components/Verse';
import { Services } from '../../components/Services';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { OutlineButton } from '../../components/ui';

export function HomePage() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box>
      <Intro
        title="Emmanuel Evangelical Church International"
        subtitle="You are so special and God LOVES you so much!"
        backgroundImage={siteSettings?.backgroundImage}
      >
        <OutlineButton inverted>I'M NEW</OutlineButton>
      </Intro>
      <About bg="bg.secondary" />
      {isError ? (
        <Box py="8" textAlign="center" color="error">
          <Text>Unable to load latest sermon. Please try again later.</Text>
        </Box>
      ) : (
        <Sermon
          bg="bg.primary"
          subtitle="Latest message"
          title="Watch Our Last Sermon"
          sermonPlaylist={siteSettings?.sermonsPlaylist}
          loading={isLoading}
        />
      )}
      <Beliefs bg="bg.secondary" />
      <Services bg="bg.primary" />
      <Verse bg="bg.secondary" />
    </Box>
  );
}

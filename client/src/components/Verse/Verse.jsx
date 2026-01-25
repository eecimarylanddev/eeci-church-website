import { Box, Container } from '@chakra-ui/react';

export function Verse({ bg }) {
  return (
    <Box as="section" bg={bg} textAlign="center" py="16" px="6">
      <Container maxW="800px">
        <Box
          css={{
            '& .dailyVerses.bibleText': {
              fontSize: '1rem',
              fontStyle: 'italic',
              color: '#4b5563',
            },
            '& .dailyVerses.bibleVerse': {
              fontWeight: 'bold',
              marginTop: '1em',
            },
            '& .dailyVerses.bibleVerse a': {
              color: '#111827',
            },
          }}
        >
          <div id="dailyVersesWrapper"></div>
          <script
            async
            defer
            src="https://dailyverses.net/get/verse.js?language=nasb"
          />
        </Box>
      </Container>
    </Box>
  );
}

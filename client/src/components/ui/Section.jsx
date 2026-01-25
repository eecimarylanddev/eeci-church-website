import { Box, Container, Heading, Skeleton, Text } from '@chakra-ui/react';

/**
 * Standardized section wrapper with optional heading and loading/error states.
 *
 * Container sizes:
 * - 'sm' = 800px (default, for text-heavy content)
 * - 'md' = 900px (for medium content like video embeds)
 * - 'lg' = 6xl (for card grids)
 */
const containerSizes = {
  sm: '800px',
  md: '900px',
  lg: '6xl',
};

export function Section({
  bg,
  size = 'sm',
  py = '16',
  px = '6',
  textAlign = 'center',
  // Heading props
  label,
  title,
  headingAs = 'h2',
  headingSize = '2rem',
  // Loading/error state props
  isLoading = false,
  isError = false,
  errorMessage = 'Unable to load content. Please try again later.',
  skeletonHeight = '60px',
  // Content
  children,
}) {
  const maxW = containerSizes[size] || size;

  return (
    <Box as="section" bg={bg} textAlign={textAlign} py={py} px={px}>
      <Container maxW={maxW}>
        {/* Optional label above heading */}
        {label && (
          <Text
            fontSize="sm"
            color="text.muted"
            textTransform="uppercase"
            letterSpacing="wide"
            mb="2"
          >
            {label}
          </Text>
        )}

        {/* Optional heading */}
        {title && (
          <Heading
            as={headingAs}
            fontSize={headingSize}
            fontWeight="700"
            color="text.primary"
            mb="4"
          >
            {title}
          </Heading>
        )}

        {/* Content with loading/error states */}
        {isError ? (
          <Text color="error" fontStyle="italic">
            {errorMessage}
          </Text>
        ) : isLoading ? (
          <Skeleton height={skeletonHeight} borderRadius="md" />
        ) : (
          children
        )}
      </Container>
    </Box>
  );
}

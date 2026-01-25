import { Box, Card, Heading, Text, VStack } from '@chakra-ui/react';

/**
 * Reusable card component for values, involvement items, and similar content.
 *
 * Supports:
 * - Icon (any React node)
 * - Title (required)
 * - Meta text (e.g., time, subtitle)
 * - Description text or children for custom content
 * - CTA label at bottom
 */
export function FeatureCard({
  icon,
  title,
  description,
  meta,
  cta,
  children,
  padding = '8',
  titleSize = '1.25rem',
}) {
  return (
    <Card.Root
      h="100%"
      p={padding}
      borderRadius="card"
      boxShadow="sm"
      transition="box-shadow 350ms ease"
      _hover={{ boxShadow: 'lg' }}
    >
      <Card.Body>
        <VStack align="center" textAlign="center" gap="4">
          {icon && <Box color="text.primary">{icon}</Box>}

          <Heading
            as="h3"
            fontSize={titleSize}
            fontWeight="650"
            color="text.primary"
          >
            {title}
          </Heading>

          {meta && (
            <Text fontSize="md" color="text.muted">
              {meta}
            </Text>
          )}

          {description && (
            <Text fontSize="md" color="text.muted" lineHeight="1.7">
              {description}
            </Text>
          )}

          {children}

          {cta && (
            <Text
              mt="6"
              fontSize="sm"
              fontWeight="800"
              letterSpacing="0.14em"
              color="brand.600"
            >
              {cta}
            </Text>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}

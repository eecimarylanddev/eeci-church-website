import { Text } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { ERROR_MESSAGES } from '../../constants';

export function About({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      title="About Our Church"
      isLoading={isLoading}
      isError={isError}
      errorMessage={ERROR_MESSAGES.generic}
    >
      <Text fontSize="md" color="text.secondary">
        {siteSettings?.aboutText}
      </Text>
    </Section>
  );
}

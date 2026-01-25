import { Text } from '@chakra-ui/react';
import { Section, OutlineButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { ERROR_MESSAGES } from '../../constants';

export function Beliefs({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      label="WHAT WE BELIEVE"
      title="Our Beliefs"
      isLoading={isLoading}
      isError={isError}
      errorMessage={ERROR_MESSAGES.generic}
    >
      <Text fontSize="md" color="text.secondary" mb="8">
        {siteSettings?.beliefsText}
      </Text>
      <OutlineButton>LEARN MORE</OutlineButton>
    </Section>
  );
}

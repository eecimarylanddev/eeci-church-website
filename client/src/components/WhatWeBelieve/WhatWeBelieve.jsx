import { Text } from '@chakra-ui/react';
import { Section, OutlineButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { ERROR_MESSAGES } from '../../constants';

export function WhatWeBelieve({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      title="What We Believe"
      isLoading={isLoading}
      isError={isError}
      errorMessage={ERROR_MESSAGES.generic}
    >
      <Text fontSize="md" color="text.secondary" mb="8">
        {siteSettings?.beliefsText}
      </Text>
      <OutlineButton>STATEMENT OF FAITH</OutlineButton>
    </Section>
  );
}

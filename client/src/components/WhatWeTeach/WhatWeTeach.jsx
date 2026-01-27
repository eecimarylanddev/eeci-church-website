import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function WhatWeTeach({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const teachingsJson = siteSettings?.teachingsJson || [];

  return (
    <Section
      bg={bg}
      size="lg"
      title="What We Teach"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      <ContentCarousel items={teachingsJson} />
    </Section>
  );
}

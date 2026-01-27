import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Vision({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const ourVisionJson = siteSettings?.ourVisionJson || [];

  return (
    <Section
      bg={bg}
      size="lg"
      title="Our Vision"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      <ContentCarousel
        items={ourVisionJson?.visionPoints}
        introText={ourVisionJson?.visionStatement}
        carouselHeading="We seek:"
      />
    </Section>
  );
}

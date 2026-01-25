import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import {
  FaBookBible,
  FaCross,
  FaHandHoldingHeart,
  FaHeart,
  FaPeopleGroup,
  FaHandsPraying,
} from 'react-icons/fa6';
import { Section, FeatureCard } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { ERROR_MESSAGES } from '../../constants';

const iconMap = {
  bible: FaBookBible,
  cross: FaCross,
  heart: FaHeart,
  hands: FaHandHoldingHeart,
  people: FaPeopleGroup,
  prayer: FaHandsPraying,
};

function ValueCard({ icon, title, description }) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <FeatureCard
      icon={IconComponent && <IconComponent size={48} />}
      title={title}
      description={description}
    />
  );
}

export function WhatWeTeach({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const values = siteSettings?.valuesJson || [];

  return (
    <Section
      bg={bg}
      size="lg"
      title="What We Teach"
      isLoading={isLoading}
      isError={isError}
      errorMessage={ERROR_MESSAGES.values}
      skeletonHeight="200px"
    >
      {isLoading ? (
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} height="200px" borderRadius="card" />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          {values.map((value, index) => (
            <FeatureCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </SimpleGrid>
      )}
    </Section>
  );
}

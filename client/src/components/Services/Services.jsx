import { Icon, Link, SimpleGrid, VStack } from '@chakra-ui/react';
import {
  FaChurch,
  FaLocationDot,
  FaPeopleGroup,
  FaHandHoldingHeart,
} from 'react-icons/fa6';
import { FeatureCard, Section } from '../ui';
import { CHURCH_INFO } from '../../constants';

function LocationInfo() {
  return (
    <VStack mt="6" gap="2" fontWeight="700" color="text.primary">
      <Icon as={FaLocationDot} boxSize="4" />
      <Link
        href={CHURCH_INFO.mapsUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {CHURCH_INFO.address}
      </Link>
    </VStack>
  );
}

export function Services({ bg }) {
  return (
    <Section bg={bg} size="lg" title="Get Involved">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
        <FeatureCard
          icon={<FaChurch size={64} />}
          title="Sunday Worship"
          meta={CHURCH_INFO.serviceTimes}
        >
          <LocationInfo />
        </FeatureCard>
        <FeatureCard
          icon={<FaPeopleGroup size={64} />}
          title="Join a Group"
          description="Find community and grow in your faith with others."
          cta="FIND A GROUP"
        />
        <FeatureCard
          icon={<FaHandHoldingHeart size={64} />}
          title="Serve"
          description="Use your gifts to make a difference in the lives of those you touch."
          cta="GET INVOLVED"
        />
      </SimpleGrid>
    </Section>
  );
}

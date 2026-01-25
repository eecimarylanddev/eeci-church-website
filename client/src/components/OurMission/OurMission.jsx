import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaBookBible,
  FaCross,
  FaHandHoldingHeart,
  FaHeart,
  FaPeopleGroup,
  FaHandsPraying,
} from 'react-icons/fa6';
import { FeatureCard, OutlineButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { ERROR_MESSAGES } from '../../constants';

// icon name in Contentful -> react icon
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

export function OurMission({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  const values = siteSettings?.valuesJson || [];

  return (
    <Box as="section" bg={bg} py="16" px="6">
      <Container maxW="6xl">
        {/* Mission */}
        <VStack textAlign="center" mb="16">
          <Text
            fontSize="sm"
            color="text.muted"
            textTransform="uppercase"
            letterSpacing="wide"
            mb="2"
          >
            Our Mission
          </Text>
          <Heading
            as="h2"
            fontSize="2rem"
            fontWeight="700"
            color="text.primary"
            mb="4"
          >
            {isLoading ? (
              <Skeleton height="40px" width="400px" borderRadius="md" />
            ) : isError ? (
              'To know Christ and to make Him known'
            ) : (
              siteSettings?.missionTagline ||
              'To know Christ and to make Him known'
            )}
          </Heading>
        </VStack>

        {/* History */}
        <VStack textAlign="center" mb="16">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
            mb="4"
          >
            Our History
          </Heading>
          {isError ? (
            <Text color="error" fontStyle="italic">
              {ERROR_MESSAGES.generic}
            </Text>
          ) : isLoading ? (
            <Skeleton
              height="100px"
              width="100%"
              maxW="800px"
              borderRadius="md"
            />
          ) : (
            <Text
              fontSize="md"
              color="text.secondary"
              lineHeight="1.8"
              maxW="800px"
            >
              {siteSettings?.historyText}
            </Text>
          )}
        </VStack>

        {/* Values */}
        <VStack textAlign="center" mb="10">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
          >
            Our Values
          </Heading>
        </VStack>

        {isError ? (
          <Text color="error" fontStyle="italic" textAlign="center" mb="16">
            {ERROR_MESSAGES.values}
          </Text>
        ) : isLoading ? (
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: 6, md: 8 }}
            mb="16"
          >
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} height="200px" borderRadius="card" />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: 6, md: 8 }}
            mb="16"
          >
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </SimpleGrid>
        )}

        {/* Beliefs */}
        <VStack textAlign="center" py="8">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
            mb="4"
          >
            What We Believe
          </Heading>
          {isError ? (
            <Text color="error" fontStyle="italic" mb="6">
              {ERROR_MESSAGES.generic}
            </Text>
          ) : isLoading ? (
            <Skeleton
              height="60px"
              width="100%"
              maxW="700px"
              borderRadius="md"
              mb="6"
            />
          ) : (
            <Text fontSize="md" color="text.secondary" maxW="700px" mb="6">
              {siteSettings?.beliefsText}
            </Text>
          )}
          <OutlineButton>STATEMENT OF FAITH</OutlineButton>
        </VStack>
      </Container>
    </Box>
  );
}

import { IconButton, Link } from '@chakra-ui/react';

/**
 * Social media icon button with consistent styling.
 */
export function SocialIconButton({ href, icon, label, disabled }) {
  const IconComponent = icon;

  return (
    <Link href={href} target="_blank" aria-disabled={disabled}>
      <IconButton
        aria-label={label}
        rounded="full"
        bg="black"
        color="white"
        size="sm"
        _hover={{ bg: 'gray.700' }}
      >
        <IconComponent />
      </IconButton>
    </Link>
  );
}

import { Button } from '@chakra-ui/react';

/**
 * Standardized outline button with consistent styling.
 *
 * @param {boolean} inverted - Use white border/text for dark backgrounds
 */
export function OutlineButton({ children, inverted = false, ...props }) {
  const borderColor = inverted ? 'white' : 'text.primary';
  const color = inverted ? 'white' : 'text.primary';
  const hoverBg = inverted ? 'white' : 'text.primary';
  const hoverColor = inverted ? 'gray.800' : 'white';

  return (
    <Button
      variant="outline"
      borderColor={borderColor}
      color={color}
      px="6"
      py="5"
      borderRadius="md"
      fontWeight="500"
      _hover={{ bg: hoverBg, color: hoverColor }}
      {...props}
    >
      {children}
    </Button>
  );
}

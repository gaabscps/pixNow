import { Box } from "@chakra-ui/react";
import { Text } from "@/components/Text";

interface StorybookPageProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}

export const StorybookPage: React.FC<StorybookPageProps> = ({
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <>
      <Box paddingBottom="24px">
        <Text variant="title">{title}</Text>
        <Text variant="body1">{subtitle}</Text>
      </Box>

      <Box padding="24px 0">
        <Text variant="body1">{description}</Text>
      </Box>

      <Box>{children}</Box>
    </>
  );
};

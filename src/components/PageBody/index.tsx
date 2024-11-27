import { Box } from "@chakra-ui/react";

interface PageBodyProps {
  children: React.ReactNode;
}

export const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  return (
    <Box
      overflowY="auto"
      padding="40px 64px"
      height="100%"
      marginLeft={{ lg: "320px", md: "200px", sm: "200px", smDown: "20px" }}
      as="main"
    >
      {children}
    </Box>
  );
};

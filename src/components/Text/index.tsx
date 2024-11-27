import { Box, BoxProps } from "@chakra-ui/react";

interface TextComponentProps extends BoxProps {
  id?: string;
  children: React.ReactNode;
  variant: "title" | "subtitle" | "body1" | "body1.bold" | "body2" | "body3";
}

export const Text: React.FC<TextComponentProps> = ({ children, ...props }) => {
  return (
    <Box
      fontSize={
        {
          title: { md: "40px", mdDown: "32px" },
          subtitle: "18px",
          body1: "16px",
          "body1.bold": "16px",
          body2: "12px",
          body3: "14px",
        }[props.variant || "body1"]
      }
      fontWeight={
        {
          title: "700",
          subtitle: "normal",
          body1: "normal",
          "body1.bold": "bold",
          body2: "normal",
          body3: "normal",
        }[props.variant || "body1"]
      }
      color={
        {
          title: "#F7F8F9",
          subtitle: "#E8E8E8",
          body1: "#FCFDFF",
          "body1.bold": "#FCFDFF",
          body2: "#FCFDFFCC",
          body3: "#B3B4B5",
        }[props.variant || "body1"]
      }
      {...props}
      as="p"
    >
      {children}
    </Box>
  );
};

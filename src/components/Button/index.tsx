import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton
      borderRadius="8px"
      borderColor={props.variant === "outline" ? "#FFFFFF" : "transparent"}
      padding={props.variant === "plain" ? 0 : "auto"}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

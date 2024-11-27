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
      height={props.size === "2xl" ? "56px" : ""}
      borderRadius="8px"
      borderColor={props.variant === "outline" ? "#FFFFFF" : "transparent"}
      padding={props.variant === "plain" ? 0 : "auto"}
      backgroundColor={!props.variant ? "#EFC532" : "transparent"}
      _hover={{
        backgroundColor: !props.variant
          ? "#EBB700"
          : props.variant === "outline"
          ? "#1E232C"
          : "",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

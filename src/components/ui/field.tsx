import { Field as ChakraField } from "@chakra-ui/react";
import * as React from "react";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
  helperTextColor?: string;
  success?: boolean;
  isActive?: boolean;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const {
      label,
      children,
      helperText,
      helperTextColor,
      errorText,
      optionalText,
      success,
      isActive,
      ...rest
    } = props;

    const labelFocusStyle = success
      ? "#03C219"
      : props.invalid
      ? "#FF0000"
      : "#FDB528";

    const textStyle = props.invalid
      ? "#FF0000"
      : success && isActive
      ? "#03C219"
      : isActive
      ? "#FDB528"
      : "#FCFDFF";

    return (
      <ChakraField.Root ref={ref} {...rest}>
        {label && (
          <ChakraField.Label
            fontSize={{ md: "12px", mdDown: "14px" }}
            _focusVisible={{
              borderColor: labelFocusStyle,
              outlineColor: labelFocusStyle,
            }}
            color={textStyle}
          >
            {label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraField.Label>
        )}
        {children}
        {helperText && (
          <ChakraField.HelperText
            color={helperTextColor ? helperTextColor : textStyle}
          >
            {helperText}
          </ChakraField.HelperText>
        )}
        {errorText && (
          <ChakraField.ErrorText color="#FF0000">
            {errorText}
          </ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    );
  }
);

import { InputProps, Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { useState } from "react";

interface CustomInputProps extends InputProps {
  label: string;
  error?: boolean;
  helperText?: string;
  helperTextColor?: string;
  errorText?: string;
  success?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  helperText,
  helperTextColor,
  errorText,
  success,
  onBlur,
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <Field
      success={success}
      helperTextColor={helperTextColor}
      errorText={errorText}
      helperText={helperText}
      invalid={error}
      margin="1rem 0"
      gap="4px"
      label={label}
      isActive={active}
      _focusVisible={props._focusVisible}
    >
      <Input
        fontSize="16px"
        _focusVisible={{
          borderColor: success ? "#03C219" : error ? "#FF0000" : "#FDB528",
          outlineColor: success ? "#03C219" : error ? "#FF0000" : "#FDB528",
        }}
        borderColor={error ? "#FF0000" : ""}
        onFocus={() => setActive(true)}
        borderRadius="8px"
        padding="27px 28px"
        backgroundColor="#F7F8F945"
        onBlur={onBlur}
        onBlurCapture={() => setActive(false)}
        {...props}
      />
    </Field>
  );
};

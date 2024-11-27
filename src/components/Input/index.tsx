import { InputProps, Input } from "@chakra-ui/react";
import { Field } from "../ui/field";

interface CustomInputProps extends InputProps {
  label: string;
  error?: boolean;
  helperText?: string;
  errorText?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  helperText,
  errorText,
  onBlur,
  ...props
}) => {
  return (
    <Field
      errorText={errorText}
      helperText={helperText}
      invalid={error}
      margin="1rem 0"
      gap="4px"
      label={label}
    >
      <Input
        fontSize="16px"
        _focusVisible={{
          borderColor: error ? "" : "#FDB528",
          outlineColor: error ? "" : "#FDB528",
        }}
        borderRadius="8px"
        padding="27px 28px"
        backgroundColor="#F7F8F945"
        onBlur={onBlur}
        {...props}
      />
    </Field>
  );
};

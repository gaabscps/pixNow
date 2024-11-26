import { InputProps, Input } from "@chakra-ui/react";
import { Field } from "../ui/field";

interface CustomInputProps extends InputProps {
  label: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  ...props
}) => {
  return (
    <Field margin="1rem 0" gap="4px" label={label}>
      <Input
        borderRadius="8px"
        padding="18px 28px"
        backgroundColor="#F7F8F945"
        {...props}
      />
    </Field>
  );
};

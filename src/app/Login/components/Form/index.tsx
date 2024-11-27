"use client";

import { CustomInput } from "@/components/Input";
import { useForm } from "@/hooks/useForm";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { emailRegex } from "@/helpers/regex";

export const LoginForm: React.FC = () => {
  const { form, onChange } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box>
      <CustomInput
        label={"Enter your email"}
        name="email"
        type="email"
        value={form.email || ""}
        errorText="Please enter a valid email"
        error={!emailRegex(form.email) && form.email !== "" ? true : false}
        onChange={(e) => {
          onChange("email", e.target.value);
        }}
      />
      <CustomInput
        label={"Password"}
        name="password"
        type="password"
        value={form.password || ""}
        onChange={(e) => onChange("password", e.target.value)}
      />
      <Flex justifyContent="end" marginBottom="2rem">
        <Text cursor="pointer" variant={"body3"}>
          Forgot Password?
        </Text>
      </Flex>

      <Flex gap="16px" flexDirection="column">
        <Button size="2xl">
          <Text color="#1E232C" variant="body1.bold">
            Login
          </Text>
        </Button>
        <Button size="2xl" variant="outline">
          <Text variant="body1.bold">Sign up</Text>
        </Button>
      </Flex>
    </Box>
  );
};

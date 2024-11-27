"use client";

import { CustomInput } from "@/components/Input";
import { useForm } from "@/hooks/useForm";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { emailRegex } from "@/helpers/regex";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { form, onChange } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            email: form.email,
            password: form.password,
          });
          router.push("/storybook");
        }}
      >
        <CustomInput
          success={emailRegex(form?.email) && form?.email !== "" ? true : false}
          label={"Enter your email"}
          name="email"
          type="email"
          value={form?.email || ""}
          errorText="Please enter a valid email"
          error={form?.email?.length > 0 && !emailRegex(form?.email)}
          onChange={(e) => {
            onChange("email", e.target.value);
          }}
        />
        <CustomInput
          label={"Password"}
          name="password"
          type="password"
          error={form?.password?.length < 6 ? true : false}
          errorText="Password must be at least 6 characters"
          success={form?.password?.length >= 6 ? true : false}
          value={form?.password || ""}
          onChange={(e) => onChange("password", e.target.value)}
        />
        <Flex justifyContent="end" marginBottom="2rem">
          <Text cursor="pointer" variant={"body3"}>
            Forgot Password?
          </Text>
        </Flex>

        <Flex gap="16px" flexDirection="column">
          <Button type="submit" size="2xl">
            <Text color="#1E232C" variant="body1.bold">
              Login
            </Text>
          </Button>
          <Button size="2xl" variant="outline">
            <Text variant="body1.bold">Sign up</Text>
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

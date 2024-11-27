"use client";

import { CustomInput } from "@/components/Input";
import { useForm } from "@/hooks/useForm";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { emailRegex } from "@/helpers/regex";
import { useRouter } from "next/navigation";
import { Toast } from "@/components/Toast";
import { useState } from "react";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    subMessage: "",
  });
  const { form, onChange } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {
    const newCount = count + 1;

    if (newCount > 3) {
      setError(true);
      setErrorMessage({
        message: "Número de tentativas excedido!",
        subMessage: "Você excedeu o número de tentativas permitidas.",
      });
      return;
    }

    if (
      form?.email === "" ||
      !emailRegex(form?.email) ||
      form?.password === "" ||
      form?.password?.length < 6
    ) {
      setError(true);
      setErrorMessage({
        message: "Campo não preenchido",
        subMessage: "É necessário preencher todos os campos para continuar.",
      });
      setCount(newCount);
      return;
    }

    if (form?.email !== "gabriel.andrade@valepay.com.br") {
      setError(true);
      setErrorMessage({
        message: "Email não cadastrado",
        subMessage: "Seu email informado não foi cadastrado em nosso sistema.",
      });
      setCount(newCount);
      return;
    }

    setCount(newCount);
    router.push("/storybook");
  };

  return (
    <>
      <Toast
        onClose={() => setError(false)}
        message={errorMessage.message}
        subMessage={errorMessage.subMessage}
        isOpen={error}
      />
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <CustomInput
            success={
              emailRegex(form?.email) && form?.email !== "" ? true : false
            }
            label={"Enter your email"}
            name="email"
            type="email"
            value={form?.email || ""}
            errorText="Please enter a valid email"
            error={
              form?.email?.length > 0 && !emailRegex(form?.email) ? true : false
            }
            onChange={(e) => {
              onChange("email", e.target.value);
            }}
          />
          <CustomInput
            label={"Password"}
            name="password"
            type="password"
            error={
              form?.password?.length > 0 && form?.password?.length < 6
                ? true
                : false
            }
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
            <Button type="submit" size="2xl" variant="solid">
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
    </>
  );
};

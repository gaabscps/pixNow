"use client";

import { Button } from "@/components/Button";
import { PageBody } from "@/components/PageBody";
import { Flex } from "@chakra-ui/react";
import { useForm } from "@/hooks/useForm";
import { Select } from "@/components/Select";
import { CustomInput } from "@/components/Input";
import { StorybookPage } from "@/components/StorybookPage";
import { Text } from "@/components/Text";
import { Toast } from "@/components/Toast";
import { useState } from "react";

const ToastStorybook: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { form, onChange } = useForm({
    initialValues: {
      size: "md",
      variant: "",
      message: "",
    },
  });

  return (
    <PageBody>
      <StorybookPage
        title="Toast"
        subtitle="Este foi o componente de toast utilizado para desenvolver este desafio"
        description="Este componente foi criado para atendeder às necessidades deste desafio, o toast é um componente de feedback visual que exibe uma mensagem após uma ação do usuário. "
      >
        <Flex
          flexWrap={{ lgDown: "wrap" }}
          gap={{ md: "16px", smDown: "" }}
          marginBottom="40px"
        >
          <Select
            width={{ md: "100px", smDown: "100%" }}
            onValueChange={(e) => {
              onChange("type", e?.value[0]);
            }}
            options={[
              {
                label: "Error",
                value: "error",
              },
              {
                label: "Warning",
                value: "warning",
              },
              {
                label: "Success",
                value: "success",
              },
            ]}
            label={"Type"}
          />
          <Flex
            flexWrap={{ smDown: "wrap" }}
            gap={{ md: "16px", sm: "16px", smDown: "" }}
            alignItems="flex-end"
          >
            <CustomInput
              label={"Message"}
              name="message"
              placeholder="ex: Email não cadastrado"
              type="text"
              size="md"
              value={form?.message || ""}
              onChange={(e) => onChange("message", e.target.value)}
            />
            <CustomInput
              label={"Sub message"}
              placeholder="descrição do erro"
              name="subMessage"
              type="text"
              size="md"
              value={form?.subMessage || ""}
              onChange={(e) => onChange("subMessage", e.target.value)}
            />
          </Flex>
        </Flex>
        <Text padding="20px 0" fontSize="24px" variant="title">
          Exemplo:
        </Text>
        <Button variant='solid' onClick={() => setIsOpen(true)}>Trigger</Button>
        <Toast
          message={form?.message}
          subMessage={form?.subMessage}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type={form?.type}
        />
      </StorybookPage>
    </PageBody>
  );
};

export default ToastStorybook;

"use client";

import { PageBody } from "@/components/PageBody";
import { Flex } from "@chakra-ui/react";
import { useForm } from "@/hooks/useForm";
import { Select } from "@/components/Select";
import { CustomInput } from "@/components/Input";
import { StorybookPage } from "@/components/StorybookPage";
import { Text } from "@/components/Text";

const InputStorybook: React.FC = () => {
  const { form, onChange } = useForm({
    initialValues: {
      status: "",
      label: "Label",
      helper: "",
      size: "md",
      width: "180px",
    },
  });

  return (
    <PageBody>
      <StorybookPage
        title="Input"
        subtitle="Este foi o componente de input utilizado para desenvolver este desafio"
        description="Este componente foi criado com base no componente de Input do chakra UI, adicionamos algumas validações e propriedades para adequar ao design do figma e obtivemos o seguinte resultado:"
      >
        <Flex
          flexWrap={{ lgDown: "wrap" }}
          gap={{ md: "16px", smDown: "" }}
          marginBottom="40px"
        >
          <Flex
            flexWrap={{ lgDown: "wrap" }}
            gap={{ md: "16px", smDown: "" }}
            width="100%"
          >
            <Select
              width={{ md: "180px", smDown: "100%" }}
              onValueChange={(e) => {
                onChange("status", e?.value[0]);
              }}
              options={[
                {
                  label: "normal",
                  value: "",
                },
                {
                  label: "success",
                  value: "success",
                },
                {
                  label: "error",
                  value: "error",
                },
              ]}
              label={"Status"}
            />
            <Select
              width={{ md: "100px", smDown: "100%" }}
              onValueChange={(e) => {
                onChange("size", e?.value[0]);
              }}
              options={[
                { label: "sm", value: "sm" },
                { label: "md", value: "md" },
                { label: "lg", value: "lg" },
                { label: "xl", value: "xl" },
                { label: "2xl", value: "2xl" },
              ]}
              label={"Size"}
            />
            <Flex
              width="100%"
              flexWrap={{ lgDown: "wrap" }}
              gap={{ md: "16px", smDown: "" }}
            >
              <CustomInput
                label={"Label"}
                placeholder="ex: Nome"
                name="label"
                type="text"
                size="md"
                value={form?.label || ""}
                onChange={(e) => onChange("label", e.target.value)}
              />
              <CustomInput
                label={"width"}
                placeholder="400px"
                name="width"
                type="text"
                size="md"
                value={form?.width || ""}
                onChange={(e) => onChange("width", e.target.value)}
              />
            </Flex>
          </Flex>
          <Flex
            width="100%"
            flexWrap={{ lgDown: "wrap" }}
            gap={{ md: "16px", smDown: "" }}
          >
            <CustomInput
              placeholder="ex: *required"
              label={"Helper text"}
              name="helper"
              type="text"
              size="md"
              value={form?.helper || ""}
              onChange={(e) => onChange("helper", e.target.value)}
            />
            <CustomInput
              placeholder="ex: Este campo é obrigatório"
              label={"Error text"}
              name="errorText"
              type="text"
              size="md"
              value={form?.errorText || ""}
              onChange={(e) => onChange("errorText", e.target.value)}
              helperText="Só será exibido se o status for error"
            />
          </Flex>
        </Flex>
        <Text fontSize="24px" variant="title">
          Exemplo:
        </Text>
        <CustomInput
          label={form?.label}
          success={form?.status === "success"}
          error={form?.status === "error"}
          width={form?.width || "180px"}
          helperText={form?.helper}
          errorText={form?.errorText}
          size={form?.size}
        />
      </StorybookPage>
    </PageBody>
  );
};

export default InputStorybook;

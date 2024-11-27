"use client";

import { Button } from "@/components/Button";
import { PageBody } from "@/components/PageBody";
import { Flex } from "@chakra-ui/react";
import { useForm } from "@/hooks/useForm";
import { Select } from "@/components/Select";
import { CustomInput } from "@/components/Input";
import { StorybookPage } from "@/components/StorybookPage";
import { Text } from "@/components/Text";

const ButtonStorybook: React.FC = () => {
  const { form, onChange } = useForm({
    initialValues: {
      size: "md",
      variant: "",
      width: "180px",
    },
  });

  return (
    <PageBody>
      <StorybookPage
        title="Button"
        subtitle="Este foi o componente de botão utilizado para desenvolver este desafio"
        description="Este componente foi criado com base no componente de botão do chakra UI, adicionamos algumas validações para adequar ao design do figma e obtivemos o seguinte resultado:"
      >
        <Flex flexWrap={{ lgDown: "wrap" }} gap="16px" marginBottom="40px">
          <Select
            width="100px"
            onValueChange={(e) => {
              onChange("size", e?.value[0]);
            }}
            options={[
              {
                label: "sm",
                value: "sm",
              },
              {
                label: "md",
                value: "md",
              },
              {
                label: "lg",
                value: "lg",
              },
              {
                label: "xl",
                value: "xl",
              },
              {
                label: "2xl",
                value: "2xl",
              },
            ]}
            label={"Size"}
          />
          <Select
            width="100px"
            onValueChange={(e) => {
              onChange("variant", e?.value[0]);
            }}
            options={[
              {
                label: "primary",
                value: "",
              },
              {
                label: "outline",
                value: "outline",
              },
            ]}
            label={"Variant"}
          />
          <CustomInput
            label={"Width"}
            name="width"
            type="text"
            size="md"
            value={form?.width || ""}
            onChange={(e) => onChange("width", e.target.value)}
            width="100px"
          />
        </Flex>
        <Text padding="20px 0" fontSize="24px" variant="title">
          Exemplo:
        </Text>
        <Button
          width={form?.width || "180px"}
          variant={form?.variant || ""}
          size={form?.size || "md"}
        >
          Button
        </Button>
      </StorybookPage>
    </PageBody>
  );
};

export default ButtonStorybook;

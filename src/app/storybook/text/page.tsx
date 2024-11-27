"use client";

import { PageBody } from "@/components/PageBody";
import { Flex } from "@chakra-ui/react";
import { useForm } from "@/hooks/useForm";
import { Select } from "@/components/Select";
import { StorybookPage } from "@/components/StorybookPage";
import { Text } from "@/components/Text";

const TextStorybook: React.FC = () => {
  const { form, onChange } = useForm({
    initialValues: {
      variant: "title",
    },
  });

  return (
    <PageBody>
      <StorybookPage
        title="Text"
        subtitle="Este foi o componente de texto utilizado para desenvolver este desafio"
        description="Este componente foi criado para suprir uma necessidade de padronização da tipografia, adicionamos algumas validações para adequar ao design do figma e obtivemos o seguinte resultado:"
      >
        <Flex flexWrap={{ lgDown: "wrap" }} gap="16px" marginBottom="40px">
          <Select
            width="200px"
            onValueChange={(e) => {
              onChange("variant", e?.value[0]);
            }}
            options={[
              {
                label: "title",
                value: "title",
              },
              {
                label: "subtitle",
                value: "subtitle",
              },
              {
                label: "body1",
                value: "body1",
              },
              {
                label: "body1.bold",
                value: "body1.bold",
              },
              {
                label: "body2",
                value: "body2",
              },
              {
                label: "body3",
                value: "body3",
              },
            ]}
            label={"Variant"}
          />
        </Flex>
        <Text padding="20px 0" fontSize="24px" variant="title">
          Exemplo:
        </Text>
        <Text variant={form?.variant || ""}>Texto de exemplo</Text>
      </StorybookPage>
    </PageBody>
  );
};

export default TextStorybook;

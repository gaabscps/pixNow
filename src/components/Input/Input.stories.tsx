import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "../ui/provider";
import { CustomInput } from "../Input";
import { StorybookPage } from "../StorybookPage";


const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
  decorators: [
    (Story) => (
      <Provider>
        <StorybookPage
          title="Input"
          subtitle="Este foi o componente de input utilizado para desenvolver este desafio"
          description="Este componente foi criado com base no componente de Input do chakra UI, adicionamos algumas validações e propriedades para adequar ao design do figma e obtivemos o seguinte resultado:"
        >
          <Story />
        </StorybookPage>
      </Provider>
    ),
  ],
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    success: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    helperText: {
      control: {
        type: "text",
      },
    },
    helperTextColor: {
      control: {
        type: "color",
      },
    },
    errorText: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Primary: Story = {
  args: {
    label: "Label", 
    size: "md",
    width: "200px",
  },
};

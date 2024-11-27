import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "../ui/provider";
import { Button } from "../Button";
import { StorybookPage } from "../StorybookPage";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <Provider>
        <StorybookPage
          title="Button"
          subtitle="Este foi o componente de botão utilizado para desenvolver este desafio"
          description="Este componente foi criado com base no componente de botão do chakra UI, adicionamos algumas validações para adequar ao design do figma e obtivemos o seguinte resultado:"
        >
          <Story />
        </StorybookPage>
      </Provider>
    ),
  ],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "outline", "plain"],
    },
    children: {
      control: {
        type: "text",
      },
    },
    width: {
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "solid",
    children: "Button",
    width: "200px",
  },
};

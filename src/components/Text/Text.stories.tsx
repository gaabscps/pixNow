import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "../ui/provider";
import { Text } from "../Text";
import { StorybookPage } from "../StorybookPage";


const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [
    (Story) => (
      <Provider>
        <StorybookPage
          title="Text"
          subtitle="Este foi o componente de texto utilizado para desenvolver este desafio"
          description="Este componente foi criado para suprir uma necessidade de padronização da tipografia, adicionamos algumas validações para adequar ao design do figma e obtivemos o seguinte resultado:"
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
      options: ["title", "subtitle", "body1", "body1.bold", "body2", "body3"],
    },
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};

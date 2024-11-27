import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "../ui/provider";
import { Toast } from "../Toast";
import { StorybookPage } from "../StorybookPage";

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [
    (Story) => (
      <Provider>
        <StorybookPage
          title="Toast"
          subtitle="Este foi o componente de toast utilizado para desenvolver este desafio"
          description="Este componente foi criado para atendeder às necessidades deste desafio, o toast é um componente de feedback visual que exibe uma mensagem após uma ação do usuário. "
        >
          <Story />
        </StorybookPage>
      </Provider>
    ),
  ],
  argTypes: {
    isOpen: {
      control: {
        type: "boolean",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    subMessage: {
      control: {
        type: "text",
      },
    },
    duration: {
      control: {
        type: "number",
      },
    },
    type: {
      control: {
        type: "select",
      },
      options: ["error", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  args: {
    isOpen: true,
    message: "Toast message",
    subMessage: "Toast submessage",
    duration: 5000,
    type: "success",
  },
};

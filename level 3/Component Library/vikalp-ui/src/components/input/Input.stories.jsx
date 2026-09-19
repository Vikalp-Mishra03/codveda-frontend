import Input from "./Input";

const meta = {
  title: "Vikalp UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const Email = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Password = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
};

export const WithError = {
  args: {
    label: "Email",
    type: "email",
    value: "wrong-email",
    error: "Please enter a valid email address.",
  },
};

export const Disabled = {
  args: {
    label: "Username",
    value: "vikalp_user",
    disabled: true,
  },
};
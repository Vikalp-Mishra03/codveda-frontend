import Alert from "./Alert";

const meta = {
  title: "Vikalp UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Info = {
  args: {
    children: "This is an informational message.",
    variant: "info",
  },
};

export const Success = {
  args: {
    title: "Success",
    children: "Your changes have been saved successfully.",
    variant: "success",
  },
};

export const Warning = {
  args: {
    title: "Warning",
    children: "Please check your information before continuing.",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    title: "Error",
    children: "Something went wrong. Please try again.",
    variant: "danger",
  },
};

export const Dismissible = {
  args: {
    title: "Success",
    children: "This alert can be dismissed.",
    variant: "success",
    dismissible: true,
  },
};
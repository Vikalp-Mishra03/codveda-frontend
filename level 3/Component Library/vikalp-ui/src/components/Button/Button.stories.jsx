import Button from "./Button";

const meta = {
  title: "Vikalp UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Danger = {
  args: {
    children: "Delete",
    variant: "danger",
    size: "medium",
  },
};

export const Success = {
  args: {
    children: "Success",
    variant: "success",
    size: "medium",
  },
};

export const Small = {
  args: {
    children: "Small Button",
    size: "small",
  },
};

export const Large = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
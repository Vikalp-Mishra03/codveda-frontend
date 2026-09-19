import Badge from "./Badge";

const meta = {
  title: "Vikalp UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Primary = {
  args: {
    children: "New",
    variant: "primary",
  },
};

export const Success = {
  args: {
    children: "Active",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Pending",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    children: "Failed",
    variant: "danger",
  },
};

export const Neutral = {
  args: {
    children: "Draft",
    variant: "neutral",
  },
};

export const Small = {
  args: {
    children: "Small Badge",
    size: "small",
  },
};

export const Large = {
  args: {
    children: "Large Badge",
    size: "large",
  },
};
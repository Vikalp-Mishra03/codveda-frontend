import Spinner from "./Spinner";

const meta = {
  title: "Vikalp UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Small = {
  args: {
    size: "small",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const CustomLabel = {
  args: {
    size: "medium",
    label: "Loading projects",
  },
};
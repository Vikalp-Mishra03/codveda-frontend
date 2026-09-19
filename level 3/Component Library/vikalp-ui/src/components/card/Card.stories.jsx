import Card from "./Card";
import Button from "../Button/Button";

const meta = {
  title: "Vikalp UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    title: "Vikalp UI",
    description:
      "A reusable card component for displaying structured content.",
  },
};

export const WithButton = {
  args: {
    title: "Frontend Project",
    description:
      "A responsive frontend project built with React.",
    children: <Button>View Project</Button>,
  },
};

export const WithFooter = {
  args: {
    title: "Component Library",
    description:
      "Reusable components documented with Storybook.",
    footer: (
      <>
        <span>Vikalp UI</span>
        <Button size="small">Learn More</Button>
      </>
    ),
  },
};

export const WithCustomContent = {
  args: {
    title: "User Profile",
    description: "Reusable card with custom content.",
    children: (
      <div>
        <p><strong>Name:</strong> Vikalp</p>
        <p><strong>Role:</strong> Frontend Developer</p>
      </div>
    ),
  },
};
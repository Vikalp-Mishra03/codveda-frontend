import Navbar from "./Navbar";

const meta = {
  title: "Vikalp UI/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Default = {
  args: {
    logo: "Vikalp UI",
    links,
  },
};

export const CustomLogo = {
  args: {
    logo: "DevBoard",
    links: [
      { label: "Dashboard", href: "#dashboard" },
      { label: "Projects", href: "#projects" },
      { label: "Tasks", href: "#tasks" },
      { label: "Settings", href: "#settings" },
    ],
  },
};
import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

const meta = {
  title: "Vikalp UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Welcome to Vikalp UI"
        >
          <p>
            This is a reusable modal component created for
            the Vikalp UI component library.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithCustomContent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="success" onClick={() => setIsOpen(true)}>
          View Profile
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="User Profile"
        >
          <p>
            <strong>Name:</strong> Vikalp
          </p>

          <p>
            <strong>Role:</strong> Frontend Developer
          </p>

          <Button onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal>
      </>
    );
  },
};
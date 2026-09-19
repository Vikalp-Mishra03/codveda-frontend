import {
  Alert,
  Badge,
  Button,
  Card,
  Input,
  Modal,
  Navbar,
  Spinner,
} from "./index";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Vikalp UI</h1>

      <Button>Button</Button>

      <br />
      <br />

      <Input
        label="Name"
        placeholder="Enter your name"
      />

      <br />

      <Badge variant="success">
        Active
      </Badge>

      <br />
      <br />

      <Alert variant="info">
        This is a Vikalp UI alert.
      </Alert>

      <br />

      <Card
        title="Vikalp UI"
        description="Reusable React component library."
      />

      <br />

      <Spinner />
    </div>
  );
}

export default App;
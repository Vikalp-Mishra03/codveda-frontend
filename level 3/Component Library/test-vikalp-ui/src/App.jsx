import { Button, Card, Badge, Alert, Spinner } from "vikalp-ui";
import "vikalp-ui/style.css";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Vikalp UI Test</h1>

      <h2>Button</h2>
      <Button variant="primary">Primary Button</Button>

      <h2>Badge</h2>
      <Badge variant="success">Success</Badge>

      <h2>Alert</h2>
      <Alert variant="info" title="Information">
        This component comes from Vikalp UI.
      </Alert>

      <h2>Card</h2>
      <Card
        title="Vikalp UI"
        description="Testing the component library."
      />

      <h2>Spinner</h2>
      <Spinner />
    </div>
  );
}

export default App;
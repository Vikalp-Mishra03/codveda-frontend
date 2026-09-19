import "./Spinner.css";

const Spinner = ({
  size = "medium",
  label = "Loading",
}) => {
  return (
    <div
      className={`vikalp-spinner vikalp-spinner-${size}`}
      role="status"
      aria-label={label}
    >
      <span aria-hidden="true"></span>
    </div>
  );
};

export default Spinner;
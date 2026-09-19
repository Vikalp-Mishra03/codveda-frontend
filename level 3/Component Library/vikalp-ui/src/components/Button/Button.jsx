import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`vikalp-btn vikalp-btn-${variant} vikalp-btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
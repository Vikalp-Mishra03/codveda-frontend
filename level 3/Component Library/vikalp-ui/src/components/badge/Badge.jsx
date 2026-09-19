import "./Badge.css";

const Badge = ({
  children,
  variant = "primary",
  size = "medium",
}) => {
  return (
    <span
      className={`vikalp-badge vikalp-badge-${variant} vikalp-badge-${size}`}
    >
      {children}
    </span>
  );
};

export default Badge;
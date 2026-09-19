import "./Alert.css";

const Alert = ({
  children,
  variant = "info",
  title,
  dismissible = false,
  onClose,
}) => {
  return (
    <div
      className={`vikalp-alert vikalp-alert-${variant}`}
      role="alert"
    >
      <div className="vikalp-alert-content">
        {title && <strong className="vikalp-alert-title">{title}</strong>}

        <div className="vikalp-alert-message">
          {children}
        </div>
      </div>

      {dismissible && (
        <button
          type="button"
          className="vikalp-alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
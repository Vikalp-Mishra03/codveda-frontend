import "./Input.css";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  disabled = false,
  required = false,
}) => {
  const inputId = `vikalp-input-${label
    ?.toLowerCase()
    .replace(/\s+/g, "-")}`;

  const errorId = `${inputId}-error`;

  return (
    <div className="vikalp-input-wrapper">
      <label htmlFor={inputId}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className="vikalp-input-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
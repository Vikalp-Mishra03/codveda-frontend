import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="vikalp-modal-overlay"
      onClick={handleOverlayClick}
    >
      <div
        className="vikalp-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vikalp-modal-title"
      >
        <div className="vikalp-modal-header">
          <h2 id="vikalp-modal-title">{title}</h2>

          {showCloseButton && (
            <button
              type="button"
              className="vikalp-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
        </div>

        <div className="vikalp-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
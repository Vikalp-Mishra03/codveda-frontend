import "./Card.css";

const Card = ({
  title,
  description,
  image,
  children,
  footer,
}) => {
  return (
    <article className="vikalp-card">
      {image && (
        <img
          src={image}
          alt=""
          className="vikalp-card-image"
        />
      )}

      <div className="vikalp-card-content">
        {title && <h2 className="vikalp-card-title">{title}</h2>}

        {description && (
          <p className="vikalp-card-description">
            {description}
          </p>
        )}

        {children && (
          <div className="vikalp-card-body">
            {children}
          </div>
        )}
      </div>

      {footer && (
        <div className="vikalp-card-footer">
          {footer}
        </div>
      )}
    </article>
  );
};

export default Card;
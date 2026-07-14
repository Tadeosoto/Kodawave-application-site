import "./MediaPlaceholder.css";

/**
 * Media slot: imagen real si hay `image`, si no placeholder rayado.
 */
export default function MediaPlaceholder({
  label,
  className = "",
  ratio = "portrait",
  image = null,
}) {
  const aria = (image?.alt || label).replace(/\n/g, " ");

  if (image?.src) {
    return (
      <div
        className={`lpPlaceholder lpPlaceholder--filled lpPlaceholder--${ratio} ${className}`.trim()}
      >
        <picture>
          {image.avifSrcSet ? (
            <source
              type="image/avif"
              srcSet={image.avifSrcSet}
              sizes={image.sizes}
            />
          ) : null}
          {image.webpSrcSet ? (
            <source
              type="image/webp"
              srcSet={image.webpSrcSet}
              sizes={image.sizes}
            />
          ) : null}
          <img
            className="lpPlaceholder__img"
            src={image.src}
            srcSet={image.srcSet || undefined}
            alt={aria}
            sizes={image.sizes}
            loading={image.priority ? "eager" : "lazy"}
            fetchPriority={image.priority ? "high" : undefined}
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>
    );
  }

  return (
    <div
      className={`lpPlaceholder lpPlaceholder--${ratio} ${className}`.trim()}
      role="img"
      aria-label={aria}
    >
      <span className="lpPlaceholder__label">
        {label.split("\n").map((line) => (
          <span key={line} className="lpPlaceholder__line">
            {line}
          </span>
        ))}
      </span>
    </div>
  );
}

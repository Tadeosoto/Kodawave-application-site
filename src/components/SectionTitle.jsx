const SectionTitle = ({ eyebrow, title, description, onDark = false }) => {
  const eyebrowClass = onDark ? 'text-principal' : 'text-secundario'
  const titleClass = onDark ? 'text-terciario' : 'text-ink'
  const descClass = onDark ? 'text-terciario/80' : 'text-neutral-600'
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${descClass}`}>{description}</p>
      )}
    </div>
  )
}

export default SectionTitle

const SectionTitle = ({ eyebrow, title, description, onDark = false }) => {
  const eyebrowClass = onDark
    ? 'text-indigo-300'
    : 'text-indigo-500'
  const titleClass = onDark
    ? 'text-white'
    : 'text-slate-900'
  const descClass = onDark
    ? 'text-slate-300'
    : 'text-slate-600'
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

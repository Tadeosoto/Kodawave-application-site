import Reveal from '../components/Reveal'
import SelectedWorkCarousel from '../components/SelectedWorkCarousel'
import { portfolioProjects, services } from '../data/content'

const MyWork = () => {
  return (
    <div className="pb-16">
      {/* Intro — Pixel Pier services–style lead */}
      <header className="mx-auto max-w-[1600px] pb-12 md:pb-16">
        <Reveal>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">My work</p>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2rem,4.6vw,3.35rem)] font-medium leading-[1.08] tracking-tight text-ink">
            A holistic approach from beginning to end
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
            Whether it is a focused design review or a program that needs to ship, the thread is the same:
            geometry you can release, assumptions you can trace, and hardware that earns its place in the field.
          </p>
        </Reveal>
      </header>

      {/* Service pillars — editorial blocks */}
      <div className="mx-auto max-w-[1600px] space-y-0 border-t border-secundario/20">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.04 * i}>
            <section className="border-b border-secundario/20 py-12 md:py-14">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-secundario">{service.title}</p>
              <p className="mt-6 max-w-3xl font-display text-[1.2rem] font-normal leading-snug text-ink md:text-[1.35rem] md:leading-[1.45]">
                {service.description}
              </p>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Selected work — full-bleed dark carousel */}
      <div className="mt-14 md:mt-20">
        <SelectedWorkCarousel items={portfolioProjects} bleed />
      </div>
    </div>
  )
}

export default MyWork

import ScrollRevealParagraph from '../components/ScrollRevealParagraph'
import Reveal from '../components/Reveal'
import { testimonials } from '../data/content'
import michelleDeskUrl from '../assets/michPageAssets/michPhotos/michelle-desk.png'
import portraitUrl from '../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png'

const SCROLL_ABOUT_TEXT =
  'I am a mechanical engineer: I sketch load paths before I trust surfaces, and I prototype to answer questions CAD cannot settle alone. I care how a part is made, how it mates, and what happens when tolerances stack or a bolt is torqued wrong. My work sits where requirements meet material reality—geometry, analysis, and iteration until the hardware behaves the way the program needs it to.'

const About = () => {
  return (
    <div className="pb-20">
      {/* Intro — Pixel Pier–style headline */}
      <section className="border-b border-secundario/20 bg-terciario">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-4 md:px-10 md:pb-24 md:pt-6">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">About</p>
            <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.1rem,5.2vw,3.85rem)] font-medium leading-[1.06] tracking-tight text-ink md:max-w-4xl">
              Clear mechanics, honest constraints, hardware you can release
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-[1.75] text-neutral-700 md:text-lg">
              I&apos;m <span className="font-semibold text-ink">Michelle Castellanos</span>, a mechanical engineer.
              I help teams turn intent into models, drawings, and prototypes—with traceability from requirement to
              test.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scroll-reveal paragraph + desk photo */}
      <section className="bg-terciario" aria-label="About Michelle">
        <ScrollRevealParagraph
          eyebrow="About"
          text={SCROLL_ABOUT_TEXT}
          imageSrc={michelleDeskUrl}
          imageAlt="Michelle Castellanos working on layouts at her desk"
        />
      </section>

      {/* Our beliefs */}
      <section className="border-t border-secundario/20 bg-terciario">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">Our beliefs</p>
            <p className="mt-8 max-w-4xl font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-normal leading-snug text-ink">
              I believe in assumptions written down, margins you can explain, and reviews that welcome hard
              questions. A clean-looking model is not the goal—a verifiable one is. I aim for parts and assemblies
              that still make sense years later, because the reasoning was never hidden in a single person&apos;s
              head.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why me — two columns (Pixel Pier “Why us”, minus people-over-profit) */}
      <section className="bg-principal-suave/50">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">Why work with me</p>
          </Reveal>
          <div className="mt-12 grid gap-12 border-t border-secundario/25 pt-12 md:grid-cols-2 md:gap-16">
            <Reveal delay={0.05}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-[1.65rem]">
                  Collaboration is the thread
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                  I stay transparent through concept, drawing release, and build—so tradeoffs are visible before
                  metal is cut. Fast teams taught me urgency; complex programs taught me how to keep configuration
                  and risk legible when everyone is asking for a change at once.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-[1.65rem]">
                  Work that ages well
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                  I design for serviceability and change—interfaces, fasteners, and documentation aligned with a
                  product that will evolve. You will find work in my portfolio that stayed in the field because the
                  fundamentals were right—not because we got lucky on prototype one.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photo strip — second image from michPhotos */}
      <section className="border-t border-secundario/20 bg-terciario">
        <div className="mx-auto max-w-[1600px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
            <Reveal>
              <figure className="m-0">
                <div className="overflow-hidden bg-ink/5 shadow-[0_20px_50px_-24px_rgba(42,38,32,0.3)]">
                  <img
                    src={portraitUrl}
                    alt="Michelle Castellanos"
                    className="aspect-[4/5] w-full object-cover object-[center_18%]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-4 font-display text-sm italic text-neutral-500">
                  — Portrait session / 2026
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="m-0">
                <div className="overflow-hidden bg-ink/5 shadow-[0_20px_50px_-24px_rgba(42,38,32,0.3)]">
                  <img
                    src={michelleDeskUrl}
                    alt=""
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-4 font-display text-sm italic text-neutral-500">
                  — Desk &amp; process / 2026
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-medium text-ink md:text-4xl">
            What clients say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-600">
            Words from people who have built and released hardware with me.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={0.05 * i}>
              <article className="border border-secundario/20 bg-white/60 p-8 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-neutral-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-6 font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

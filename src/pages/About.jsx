import { useTranslation } from 'react-i18next'
import ScrollRevealParagraph from '../components/ScrollRevealParagraph'
import Reveal from '../components/Reveal'
import { testimonials } from '../data/content'
import michelleDeskUrl from '../assets/michPageAssets/michPhotos/michelle-desk.png'
import portraitUrl from '../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="pb-20">
      <section className="border-b border-secundario/20 bg-terciario">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-4 md:px-10 md:pb-24 md:pt-6">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">{t('about.eyebrow')}</p>
            <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.1rem,5.2vw,3.85rem)] font-medium leading-[1.06] tracking-tight text-ink md:max-w-4xl">
              {t('about.title')}
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-[1.75] text-neutral-700 md:text-lg">
              {t('about.introBefore')}
              <span className="font-semibold text-ink">{t('about.introName')}</span>
              {t('about.introAfter')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-terciario" aria-label={t('about.scrollEyebrow')}>
        <ScrollRevealParagraph
          eyebrow={t('about.scrollEyebrow')}
          text={t('about.scrollText')}
          imageSrc={michelleDeskUrl}
          imageAlt={t('about.imageAlt')}
        />
      </section>

      <section className="border-t border-secundario/20 bg-terciario">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">{t('about.beliefsEyebrow')}</p>
            <p className="mt-8 max-w-4xl font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-normal leading-snug text-ink">
              {t('about.beliefsBody')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-principal-suave/50">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">{t('about.whyEyebrow')}</p>
          </Reveal>
          <div className="mt-12 grid gap-12 border-t border-secundario/25 pt-12 md:grid-cols-2 md:gap-16">
            <Reveal delay={0.05}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-[1.65rem]">
                  {t('about.whyCol1Title')}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                  {t('about.whyCol1Body')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-[1.65rem]">
                  {t('about.whyCol2Title')}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                  {t('about.whyCol2Body')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
                  {t('about.photoCaption1')}
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
                  {t('about.photoCaption2')}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-medium text-ink md:text-4xl">
            {t('about.testimonialsTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-600">
            {t('about.testimonialsLead')}
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.tKey} delay={0.05 * i}>
              <article className="border border-secundario/20 bg-white/60 p-8 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-neutral-700">
                  &ldquo;{t(`testimonials.${testimonial.tKey}.quote`)}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-neutral-500">{t(`testimonials.${testimonial.tKey}.role`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

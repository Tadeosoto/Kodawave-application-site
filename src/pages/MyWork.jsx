import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'
import SelectedWorkCarousel from '../components/SelectedWorkCarousel'
import { portfolioProjects, services } from '../data/content'

const MyWork = () => {
  const { t } = useTranslation()

  return (
    <div className="pb-16">
      <header className="mx-auto max-w-[1600px] pb-12 md:pb-16">
        <Reveal>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">{t('myWork.eyebrow')}</p>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2rem,4.6vw,3.35rem)] font-medium leading-[1.08] tracking-tight text-ink">
            {t('myWork.title')}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
            {t('myWork.lead')}
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-[1600px] space-y-0 border-t border-secundario/20">
        {services.map((service, i) => (
          <Reveal key={service.tKey} delay={0.04 * i}>
            <section className="border-b border-secundario/20 py-12 md:py-14">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-secundario">
                {t(`services.${service.tKey}.title`)}
              </p>
              <p className="mt-6 max-w-3xl font-display text-[1.2rem] font-normal leading-snug text-ink md:text-[1.35rem] md:leading-[1.45]">
                {t(`services.${service.tKey}.description`)}
              </p>
            </section>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 md:mt-20">
        <SelectedWorkCarousel items={portfolioProjects} bleed />
      </div>
    </div>
  )
}

export default MyWork

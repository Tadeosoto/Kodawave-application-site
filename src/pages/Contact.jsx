import { useTranslation } from 'react-i18next'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import LazyMap from '../components/LazyMap'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="space-y-12 pb-16">
      <Reveal>
        <SectionTitle
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          description={t('contact.description')}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <section className="grid gap-8 rounded-3xl border border-secundario/20 bg-white/80 p-8 lg:grid-cols-2">
          <form className="space-y-4">
            <input
              className="w-full rounded-xl border border-secundario/30 bg-white px-4 py-3 outline-none focus:border-principal"
              type="text"
              placeholder={t('contact.namePlaceholder')}
            />
            <input
              className="w-full rounded-xl border border-secundario/30 bg-white px-4 py-3 outline-none focus:border-principal"
              type="email"
              placeholder={t('contact.emailPlaceholder')}
            />
            <textarea
              className="h-36 w-full rounded-xl border border-secundario/30 bg-white px-4 py-3 outline-none focus:border-principal"
              placeholder={t('contact.messagePlaceholder')}
            />
            <button
              type="button"
              className="rounded-full bg-principal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-secundario hover:text-terciario"
            >
              {t('contact.send')}
            </button>
          </form>

          <div className="space-y-4">
            <p className="text-neutral-700">
              <span className="font-semibold">{t('contact.emailLabel')}</span> tadeosoto1993@gmail.com
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">{t('contact.phoneLabel')}</span> +0 (000) 000-0000
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">{t('contact.studioLabel')}</span> 1600 Amphitheatre Parkway, Mountain View, CA 94043
            </p>
            <LazyMap />
          </div>
        </section>
      </Reveal>
    </div>
  )
}

export default Contact

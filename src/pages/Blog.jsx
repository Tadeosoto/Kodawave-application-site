import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { blogPosts } from '../data/content'
import Reveal from '../components/Reveal'
import michelleDeskUrl from '../assets/michPageAssets/michPhotos/michelle-desk.png'

const MotionLi = motion.li
const ease = [0.22, 0.61, 0.36, 1]

const INITIAL_VISIBLE = 5
const LOAD_STEP = 5

const Blog = () => {
  const { t, i18n } = useTranslation()
  const sorted = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  )
  const [listLimit, setListLimit] = useState(INITIAL_VISIBLE)
  const visibleList = sorted.slice(0, listLimit)
  const hasMore = listLimit < sorted.length

  const formatBlogDate = (iso) => {
    const d = new Date(`${iso}T12:00:00`)
    const loc = i18n.language === 'es-MX' ? 'es-MX' : 'en-AU'
    return d.toLocaleDateString(loc, { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const topicTags = useMemo(() => {
    const raw = t('blog.topicTags', { returnObjects: true })
    return Array.isArray(raw) ? raw : []
  }, [t, i18n.language])

  return (
    <div className="pb-20 pt-2 md:pt-4">
      <header className="mx-auto max-w-[1600px]">
        <Reveal>
          <h1 className="max-w-4xl text-left font-display text-[clamp(2rem,4.8vw,3.75rem)] font-medium leading-[1.12] tracking-tight text-ink">
            {t('blog.title')}
          </h1>
        </Reveal>

        <div className="-mx-6 mt-10 md:-mx-10 md:mt-14" aria-hidden>
          <div className="h-px w-full bg-secundario/40" />
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-14 xl:gap-20">
          <div>
            <Reveal delay={0.05}>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-secundario">
                {t('blog.fieldNotesEyebrow')}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-700 md:text-[0.95rem] md:leading-[1.7]">
                {t('blog.fieldNotesLead')}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-sm text-neutral-600">
                <span className="font-medium text-ink">Michelle Castellanos</span>{' '}
                {t('blog.bylineSuffix')}
              </p>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-2.5">
            {topicTags.map((tag, i) => (
              <Reveal key={`${tag}-${i}`} delay={0.04 * i} className="inline-block">
                <span className="rounded-full border border-secundario/35 bg-principal-suave px-4 py-2.5 text-center text-[0.8rem] font-medium leading-tight text-ink">
                  {tag}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </header>

      <section
        aria-label={t('blog.designIntentAria')}
        className="-mx-6 mt-14 border-t border-b border-ink md:-mx-10 md:mt-20"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-12 md:gap-12 md:px-10 md:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16 xl:gap-14">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink">{t('blog.designIntentEyebrow')}</p>
            </Reveal>
          </div>
          <div className="flex justify-center lg:col-span-4">
            <Reveal delay={0.06}>
              <img
                src={michelleDeskUrl}
                alt={t('blog.deskAlt')}
                className="h-auto max-h-[min(52vh,520px)] w-full max-w-[280px] object-cover object-center md:max-w-[320px] lg:max-w-[360px]"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[0.95rem] font-normal leading-[1.8] text-neutral-800 md:text-base md:leading-[1.85]">
                {t('blog.designIntentBody')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl md:mt-20" aria-label={t('blog.listAria')}>
        <Reveal>
          <h3 className="font-display text-lg font-medium text-ink md:text-xl">
            {t('blog.listHeading')}
          </h3>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-secundario/90">
            {t('blog.listSub')}
          </p>
        </Reveal>

        <ul className="mt-10 divide-y divide-secundario/15">
          {visibleList.map((post, i) => (
            <MotionLi
              key={post.id}
              id={post.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-28px 0px' }}
              transition={{ duration: 0.55, ease, delay: 0.04 * Math.min(i, 6) }}
              className="scroll-mt-28 py-6 first:pt-0 md:grid md:grid-cols-[7.5rem_1fr_auto] md:items-baseline md:gap-6 md:py-7"
            >
              <time
                className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-secundario md:pt-0.5"
                dateTime={post.date}
              >
                {formatBlogDate(post.date)}
              </time>
              <Link
                to={{ pathname: '/blog', hash: post.id }}
                className="mt-2 block font-medium text-ink transition hover:text-secundario md:mt-0"
              >
                {t(`blog.posts.${post.id}.title`)}
              </Link>
              <span className="mt-2 hidden text-right text-xs text-neutral-500 lg:block">
                {t(`blog.posts.${post.id}.category`)}
              </span>
            </MotionLi>
          ))}
        </ul>

        {hasMore && (
          <Reveal className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setListLimit((n) => Math.min(n + LOAD_STEP, sorted.length))}
              className="border border-ink bg-transparent px-10 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-principal hover:bg-principal hover:text-ink"
            >
              {t('blog.loadMore')}
            </button>
          </Reveal>
        )}
      </section>

      <Reveal>
        <p className="mx-auto mt-20 max-w-4xl border-t border-secundario/20 pt-10 text-center font-display text-sm italic text-neutral-500 md:mt-24">
          {t('blog.signature')}
        </p>
      </Reveal>
    </div>
  )
}

export default Blog

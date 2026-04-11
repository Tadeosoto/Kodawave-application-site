import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { blogPosts } from '../data/content'
import Reveal from '../components/Reveal'
import michelleDeskUrl from '../assets/michPageAssets/michPhotos/michelle-desk.png'

const MotionLi = motion.li
const ease = [0.22, 0.61, 0.36, 1]

const TOPIC_TAGS = [
  'CAD & release',
  'DFM',
  'Tolerances',
  'Materials',
  'FEA / CAE',
  'Prototyping',
  'Testing',
]

const INITIAL_VISIBLE = 5
const LOAD_STEP = 5

const formatBlogDate = (iso) => {
  const d = new Date(`${iso}T12:00:00`)
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

const Blog = () => {
  const sorted = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  )
  const [listLimit, setListLimit] = useState(INITIAL_VISIBLE)
  const visibleList = sorted.slice(0, listLimit)
  const hasMore = listLimit < sorted.length

  return (
    <div className="pb-20 pt-2 md:pt-4">
      <header className="mx-auto max-w-[1600px]">
        <Reveal>
          <h1 className="max-w-4xl text-left font-display text-[clamp(2rem,4.8vw,3.75rem)] font-medium leading-[1.12] tracking-tight text-ink">
            From requirement to hardware—notes along the way
          </h1>
        </Reveal>

        <div className="-mx-6 mt-10 md:-mx-10 md:mt-14" aria-hidden>
          <div className="h-px w-full bg-secundario/40" />
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-14 xl:gap-20">
          <div>
            <Reveal delay={0.05}>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-secundario">
                Field notes
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-700 md:text-[0.95rem] md:leading-[1.7]">
                This journal is where I write about tools, tradeoffs, and lessons from projects—CAD, manufacturing,
                and tests included. If it belongs in a review or a shop conversation, it probably shows up here.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-sm text-neutral-600">
                <span className="font-medium text-ink">Michelle Castellanos</span>
                — engineering notes.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-2.5">
            {TOPIC_TAGS.map((tag, i) => (
              <Reveal key={tag} delay={0.04 * i} className="inline-block">
                <span className="rounded-full border border-secundario/35 bg-principal-suave px-4 py-2.5 text-center text-[0.8rem] font-medium leading-tight text-ink">
                  {tag}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </header>

      <section
        aria-label="Design intent"
        className="-mx-6 mt-14 border-t border-b border-ink md:-mx-10 md:mt-20"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-12 md:gap-12 md:px-10 md:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16 xl:gap-14">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink">Design intent</p>
            </Reveal>
          </div>
          <div className="flex justify-center lg:col-span-4">
            <Reveal delay={0.06}>
              <img
                src={michelleDeskUrl}
                alt="Michelle Castellanos at the desk"
                className="h-auto max-h-[min(52vh,520px)] w-full max-w-[280px] object-cover object-center md:max-w-[320px] lg:max-w-[360px]"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[0.95rem] font-normal leading-[1.8] text-neutral-800 md:text-base md:leading-[1.85]">
                Intent shows up in details a supplier will notice: radii, datum choices, and how assemblies come
                apart for service. I write for teams who care about both the calculation and the conversation on the
                shop floor—because the drawing is only done when the part can be made, tested, and repeated.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl md:mt-20" aria-label="All posts">
        <Reveal>
          <h3 className="font-display text-lg font-medium text-ink md:text-xl">
            Notes, essays, and field observations
          </h3>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-secundario/90">
            Writing
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
                {post.title}
              </Link>
              <span className="mt-2 hidden text-right text-xs text-neutral-500 lg:block">{post.category}</span>
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
              Load more
            </button>
          </Reveal>
        )}
      </section>

      <Reveal>
        <p className="mx-auto mt-20 max-w-4xl border-t border-secundario/20 pt-10 text-center font-display text-sm italic text-neutral-500 md:mt-24">
          — Michelle Castellanos
        </p>
      </Reveal>
    </div>
  )
}

export default Blog

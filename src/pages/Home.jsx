import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SectionTitle from '../components/SectionTitle'
import { partners, services, testimonials } from '../data/content'

const immersiveImages = [
  'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=1100&q=80',
]

const Home = () => {
  const marqueePartners = [...partners, ...partners]
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)
  const MotionP = motion.p
  const MotionH1 = motion.h1
  const MotionArticle = motion.article
  const MotionDiv = motion.div

  useEffect(() => {
    const id = setInterval(() => {
      setSlideDirection(1)
      setActiveSlide((prev) => (prev + 1) % immersiveImages.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const goTo = (direction) => {
    setSlideDirection(direction === 'next' ? 1 : -1)
    setActiveSlide((prev) => {
      if (direction === 'next') return (prev + 1) % immersiveImages.length
      return (prev - 1 + immersiveImages.length) % immersiveImages.length
    })
  }

  return (
    <div className="space-y-20 pb-16">
      <section className="pt-8 text-center md:pt-14">
        <MotionP
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-fit rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
        >
          Growth partner for ambitious teams
        </MotionP>
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl"
        >
          Design better, faster, smarter websites
        </MotionH1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          We build high-performance digital experiences to increase traffic, leads and
          revenue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Explore Services
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Services"
          title="Everything you need to grow online"
          description="A complete stack of strategy, design, development and marketing."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.slice(0, 3).map((service, index) => (
            <MotionArticle
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </MotionArticle>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
        <SectionTitle
          eyebrow="Why choose us"
          title="Small team, senior execution, measurable outcomes"
          description="We combine speed, clear communication and KPI-driven delivery."
          onDark
        />
        <div className="grid gap-5 text-slate-200 md:grid-cols-3">
          <p>Clear roadmaps and weekly progress so you always know what is next.</p>
          <p>Conversion-first design decisions backed by analytics and user behavior.</p>
          <p>Scalable systems you can maintain without agency dependency.</p>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Partners" title="Trusted by modern brands" />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 py-4">
          <MotionDiv
            className="flex w-max gap-4 px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`min-w-44 rounded-xl border border-slate-200 px-5 py-4 text-center text-sm font-bold ${partner.bgClass} ${partner.textClass}`}
              >
                {partner.name}
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>

      <section className="pt-4">
        <SectionTitle
          eyebrow="Visual Reel"
          title="Immersive visuals"
          description="A curated reel of visual studies, product shots, and atmospheric scenes in progress."
        />
        <div className="relative mx-auto mt-6 flex h-[440px] max-w-4xl items-center justify-center overflow-hidden rounded-[28px]">
          <img
            src={immersiveImages[(activeSlide + immersiveImages.length - 1) % immersiveImages.length]}
            alt=""
            className="absolute left-2 top-1/2 hidden h-[260px] w-[190px] -translate-y-1/2 rounded-2xl object-cover opacity-30 blur-[2px] md:block"
          />
          <img
            src={immersiveImages[(activeSlide + 1) % immersiveImages.length]}
            alt=""
            className="absolute right-2 top-1/2 hidden h-[260px] w-[190px] -translate-y-1/2 rounded-2xl object-cover opacity-30 blur-[2px] md:block"
          />

          <MotionDiv
            key={`${activeSlide}-${slideDirection}`}
            initial={{
              opacity: 0.5,
              scale: 0.88,
              filter: 'blur(5px)',
              x: slideDirection > 0 ? 130 : -130,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              x: 0,
            }}
            transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative z-10 h-[430px] w-[320px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl md:w-[460px]"
          >
            <img
              src={immersiveImages[activeSlide]}
              alt="Immersive visual showcase"
              className="h-full w-full object-cover"
            />
          </MotionDiv>

          <button
            type="button"
            onClick={() => goTo('prev')}
            className="absolute left-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/65 text-white backdrop-blur hover:bg-slate-800"
            aria-label="Previous visual"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo('next')}
            className="absolute right-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/65 text-white backdrop-blur hover:bg-slate-800"
            aria-label="Next visual"
          >
            ›
          </button>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Testimonials" title="Success stories from our clients" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 font-bold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
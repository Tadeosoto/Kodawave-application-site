import SectionTitle from '../components/SectionTitle'
import { testimonials } from '../data/content'

const About = () => {
  return (
    <div className="space-y-14 pb-16">
      <SectionTitle
        eyebrow="About us"
        title="A team focused on strategy, execution and sustainable growth"
        description="We combine design, technology and marketing expertise to build real business impact."
      />

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Vision & expertise</h3>
          <p className="mt-3 text-slate-600">
            Our vision is to make digital growth more predictable for service businesses.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Team & strategy</h3>
          <p className="mt-3 text-slate-600">
            Senior specialists in UX, development, SEO and paid media with one coordinated plan.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h4 className="font-bold text-slate-900">Achievements</h4>
          <p className="mt-3 text-slate-600">120+ projects launched in health, education and B2B SaaS.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h4 className="font-bold text-slate-900">Awards</h4>
          <p className="mt-3 text-slate-600">Recognized in regional design and growth communities.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h4 className="font-bold text-slate-900">Metrics</h4>
          <p className="mt-3 text-slate-600">Average +42% qualified leads in the first quarter.</p>
        </article>
      </section>

      <section>
        <SectionTitle title="What clients say about working with us" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6">
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

export default About

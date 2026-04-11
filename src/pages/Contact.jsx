import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import LazyMap from '../components/LazyMap'

const Contact = () => {
  return (
    <div className="space-y-12 pb-16">
      <Reveal>
        <SectionTitle
          eyebrow="Contact"
          title="Tell me what you are building next"
          description="Share loads, timeline, and manufacturing context—I will reply with a practical scope: what to model, what to test, and what “done” should mean."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <section className="grid gap-8 rounded-3xl border border-secundario/20 bg-white/80 p-8 lg:grid-cols-2">
          <form className="space-y-4">
            <input
              className="w-full rounded-xl border border-secundario/30 bg-white px-4 py-3 outline-none focus:border-principal"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-xl border border-secundario/30 bg-white px-4 py-3 outline-none focus:border-principal"
              type="email"
              placeholder="Email address"
            />
            <textarea
              className="h-36 w-full rounded-xl border border-secundario/30 bg-white px-4 py-3 outline-none focus:border-principal"
              placeholder="Tell me about your project"
            />
            <button
              type="button"
              className="rounded-full bg-principal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-secundario hover:text-terciario"
            >
              Send message
            </button>
          </form>

          <div className="space-y-4">
            <p className="text-neutral-700">
              <span className="font-semibold">Email:</span> tadeosoto1993@gmail.com
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">Phone:</span> +0 (000) 000-0000
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">Studio:</span> 1600 Amphitheatre Parkway, Mountain View, CA 94043
            </p>
            <LazyMap />
          </div>
        </section>
      </Reveal>
    </div>
  )
}

export default Contact

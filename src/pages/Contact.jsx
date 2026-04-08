import SectionTitle from '../components/SectionTitle'
import LazyMap from '../components/LazyMap'

const Contact = () => {
  return (
    <div className="space-y-12 pb-16">
      <SectionTitle
        eyebrow="Contact"
        title="Let us talk about your next growth phase"
        description="Share your goals and we will answer with a practical action plan."
      />

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-2">
        <form className="space-y-4">
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            type="text"
            placeholder="Your name"
          />
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            type="email"
            placeholder="Email address"
          />
          <textarea
            className="h-36 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            placeholder="Tell us about your project"
          />
          <button
            type="button"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Send inquiry
          </button>
        </form>

        <div className="space-y-4">
          <p className="text-slate-700">
            <span className="font-semibold">Email:</span> tadeosoto1993@gmail.com
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">Phone:</span> +0 (000) 000-0000
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">Office:</span> 1600 Amphitheatre Parkway, Mountain View, CA 94043
          </p>
          <LazyMap />
        </div>
      </section>
    </div>
  )
}

export default Contact

import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data/content'
import CountUp from '../components/CountUp'

const packages = [
  {
    name: 'Starter',
    price: 1200,
    text: 'For new businesses validating offer-market fit.',
    features: ['One core service execution', 'Monthly reporting', 'Email support'],
  },
  {
    name: 'Growth',
    price: 2800,
    text: 'For teams scaling lead generation and conversion.',
    features: [
      'Web + SEO + ads coordination',
      'Weekly optimization sprints',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    price: 5500,
    oldPrice: 6200,
    text: 'For established brands requiring full-funnel execution.',
    features: [
      'End-to-end execution',
      'Advanced attribution setup',
      'Dedicated growth lead',
      'CRO experiments every month',
      'Executive strategy sessions',
    ],
    featured: true,
  },
]

const Services = () => {
  return (
    <div className="space-y-14 pb-16">
      <SectionTitle
        eyebrow="Services"
        title="Growth solutions built around your business goals"
        description="From visibility to conversion, we help you grow with a focused strategy."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>

      <section>
        <SectionTitle eyebrow="Pricing" title="Simple packages for every stage" />
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                item.featured
                  ? 'border-indigo-300 bg-indigo-50/40 shadow-[0_20px_40px_-28px_rgba(79,70,229,0.7)]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {item.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Best value
                </span>
              )}
              <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
              <p className="mt-2 text-3xl font-black text-slate-900">
                <CountUp to={item.price} step={100} />
              </p>
              {item.oldPrice && (
                <p className="mt-1 text-sm text-slate-500">
                  <span className="line-through">${item.oldPrice.toLocaleString('en-US')}</span>{' '}
                  <span className="font-semibold text-indigo-600">Save ${item.oldPrice - item.price}</span>
                </p>
              )}
              <p className="mt-3 text-slate-600">{item.text}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  item.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-900 text-white hover:bg-slate-700'
                }`}
              >
                Choose {item.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-indigo-600 p-8 text-center text-white">
        <h3 className="text-2xl font-black md:text-3xl">Need a custom package?</h3>
        <p className="mt-3 text-indigo-100">
          Tell us your goals and we will design the best growth plan for your stage.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}

export default Services

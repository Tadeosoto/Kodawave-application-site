import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { AnimatePresence, motion as Motion } from 'motion/react'
import { blogPosts } from '../data/content'

const Blog = () => {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <div className="space-y-12 pb-16">
      <SectionTitle
        eyebrow="Blog"
        title="Insights on websites, SEO and growth"
        description="Short practical articles to help your team improve results."
      />

      <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">{post.title}</h3>
            <p className="mt-3 text-slate-600">{post.description}</p>
            {openIdx !== idx && (
              <button
                onClick={() => toggle(idx)}
                className="mt-5 inline-flex cursor-pointer rounded-md px-2 py-1 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                aria-expanded={false}
                aria-controls={`post-${idx}-content`}
              >
                Read more →
              </button>
            )}
            <AnimatePresence initial={false}>
              {openIdx === idx && (
                <Motion.div
                  id={`post-${idx}-content`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-700">
                    <p>
                      This is a preview of the article with additional context, examples and
                      quick tips. We cover step-by-step actions, common pitfalls and a brief
                      checklist you can apply today.
                    </p>
                    <ul className="mt-3 list-disc pl-5">
                      <li>Key takeaway 1 tailored for service businesses.</li>
                      <li>Key takeaway 2 around data and measurement.</li>
                      <li>Key takeaway 3 to ship improvements faster.</li>
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                          onClick={() => toggle(idx)}
                          className="inline-flex cursor-pointer rounded-md px-2 py-1 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                          aria-expanded={true}
                          aria-controls={`post-${idx}-content`}
                        >
                          Hide →
                      </button>
                      <a
                        href="#"
                        className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300/60"
                      >
                        Go to blog →
                      </a>
                    </div>
                  </div>
                </Motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog

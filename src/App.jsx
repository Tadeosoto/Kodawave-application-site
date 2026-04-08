import { Navigate, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import SiteLayout from './components/SiteLayout'
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))

function App() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-10 text-slate-500">Loading…</div>}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App

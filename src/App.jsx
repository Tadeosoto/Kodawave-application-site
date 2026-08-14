import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PageMetricsRouteTracker from './components/PageMetricsRouteTracker'
import SiteLayout from './components/SiteLayout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Alignna = lazy(() => import('./pages/Alignna'))
const AlignnaV2 = lazy(() => import('./pages/AlignnaV2'))
const Contact = lazy(() => import('./pages/Contact'))
const MyWork = lazy(() => import('./pages/MyWork'))
const LandingPageEsp = lazy(() => import('./pages/LandingPageEsp'))
const LandingPageEng = lazy(() => import('./pages/LandingPageEng'))

function LandingFallback() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="min-h-screen w-full bg-[#f8f6f3] motion-safe:animate-pulse"
    />
  )
}

function App() {
  return (
    <>
    <PageMetricsRouteTracker />
    <Routes>
      {/* Standalone waitlist landings (no site nav/footer) */}
      <Route
        path="/landing-page-esp"
        element={
          <Suspense fallback={<LandingFallback />}>
            <LandingPageEsp />
          </Suspense>
        }
      />
      <Route
        path="/landing-page-eng"
        element={
          <Suspense fallback={<LandingFallback />}>
            <LandingPageEng />
          </Suspense>
        }
      />
      <Route
        path="/alignna-v2"
        element={
          <Suspense fallback={<LandingFallback />}>
            <AlignnaV2 />
          </Suspense>
        }
      />
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/services" element={<Navigate to="/my-work" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alignna" element={<Alignna />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default App

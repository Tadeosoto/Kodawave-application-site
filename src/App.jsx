import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import SiteLayout from './components/SiteLayout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Alignna = lazy(() => import('./pages/Alignna'))
const Contact = lazy(() => import('./pages/Contact'))
const MyWork = lazy(() => import('./pages/MyWork'))

function App() {
  return (
    <Routes>
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
  )
}

export default App

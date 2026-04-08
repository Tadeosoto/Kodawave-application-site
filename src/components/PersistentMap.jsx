import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import LazyMap from './LazyMap'

const getTarget = () => {
  return document.getElementById('contact-map-root') || document.getElementById('hidden-map-root')
}

const PersistentMap = () => {
  const [target, setTarget] = useState(null)

  useEffect(() => {
    const update = () => setTarget(getTarget())
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('hashchange', update)
    window.addEventListener('popstate', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', update)
      window.removeEventListener('popstate', update)
    }
  }, [])

  if (!target) return null
  return createPortal(<LazyMap />, target)
}

export default PersistentMap

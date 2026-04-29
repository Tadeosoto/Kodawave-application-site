import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import AU from 'country-flag-icons/react/3x2/AU'
import MX from 'country-flag-icons/react/3x2/MX'

const LOCALES = [
  { code: 'en-AU', labelKey: 'language.enAU', Flag: AU },
  { code: 'es-MX', labelKey: 'language.esMX', Flag: MX },
]

export default function LanguageSelect() {
  const { i18n, t } = useTranslation()
  const active =
    LOCALES.find((l) => l.code === i18n.resolvedLanguage || l.code === i18n.language) ?? LOCALES[0]

  return (
    <Listbox value={active.code} onChange={(code) => void i18n.changeLanguage(code)}>
      <div className="relative">
        <ListboxButton
          type="button"
          aria-label={t('language.listLabel')}
          className="inline-flex items-center gap-2 rounded-xl border border-secundario/30 bg-terciario/95 px-2.5 py-2 text-left text-ink shadow-sm outline-none transition hover:border-secundario/45 focus-visible:ring-2 focus-visible:ring-principal/40 md:px-3"
        >
          <active.Flag title="" className="h-4 w-6 shrink-0 rounded-sm shadow-sm" />
          <span className="hidden max-w-[10rem] truncate text-[0.7rem] font-semibold uppercase tracking-[0.12em] sm:inline">
            {t(active.labelKey)}
          </span>
          <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-neutral-500" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.896a.75.75 0 111.08 1.04l-4.24 4.47a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </ListboxButton>

        <ListboxOptions
          anchor="bottom end"
          transition
          className="z-80 mt-1 w-[min(100vw-2rem,16rem)] origin-top rounded-xl border border-secundario/30 bg-terciario p-1 shadow-lg outline-none transition [--anchor-gap:4px] data-closed:scale-95 data-closed:opacity-0"
        >
          {LOCALES.map(({ code, labelKey, Flag }) => (
            <ListboxOption
              key={code}
              value={code}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink data-focus:bg-principal/15 data-selected:bg-principal/35 data-selected:font-semibold"
            >
              <Flag title="" className="h-4 w-6 shrink-0 rounded-sm shadow-sm" />
              <span>{t(labelKey)}</span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

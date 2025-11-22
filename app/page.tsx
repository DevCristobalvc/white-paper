"use client"

import { useState } from "react"
import { Languages, ChevronDown, Check } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import Link from "next/link"

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en")
  const [showLangMenu, setShowLangMenu] = useState(false)
  const t = useTranslation(locale)

  return (
    <div className="h-screen bg-white text-black font-mono flex flex-col overflow-hidden">
      {/* Header with language selector */}
      <header className="border-b border-black/10 bg-white flex-shrink-0">
        <nav className="container mx-auto px-3 py-2 md:px-4 md:py-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[9px] opacity-40 font-light tracking-wide uppercase">
                {t.whitepaper.subtitle_small}
              </span>
              <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-black flex items-center justify-center font-bold text-[10px] md:text-xs">
                  RP
                </div>
                <span className="font-bold text-xs md:text-sm tracking-tight">ReFi_Universe_Protocol</span>
              </Link>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="hover:bg-black/5 transition-colors flex items-center gap-1 border border-black/20 px-2 py-1 text-[10px] md:text-xs"
              >
                <Languages className="w-3 h-3" />
                <span className="uppercase">{locale}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-1 bg-white border border-black shadow-sm overflow-hidden min-w-[100px] z-50">
                  <button
                    onClick={() => {
                      setLocale("en")
                      setShowLangMenu(false)
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  >
                    <span>EN</span>
                    {locale === "en" && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => {
                      setLocale("es")
                      setShowLangMenu(false)
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  >
                    <span>ES</span>
                    {locale === "es" && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => {
                      setLocale("pt")
                      setShowLangMenu(false)
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  >
                    <span>PT</span>
                    {locale === "pt" && <Check className="w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-3 py-4 md:px-4 overflow-hidden">
        <div className="max-w-4xl w-full space-y-4 md:space-y-6">
          {/* Title Block */}
          <div className="space-y-2 md:space-y-3 text-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">{t.home.title}</h1>
            <p className="text-[10px] md:text-xs leading-relaxed max-w-2xl mx-auto opacity-70">{t.home.tagline}</p>
          </div>

          <div className="border-2 border-black p-3 md:p-4 space-y-3 md:space-y-4">
            {/* Problem */}
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-wide">{t.home.problem.title}</h2>
              <p className="text-[10px] md:text-xs leading-relaxed opacity-80">{t.home.problem.desc}</p>
            </div>

            <div className="border-t border-black/20" />

            {/* Solution */}
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-wide">{t.home.solution.title}</h2>
              <p className="text-[10px] md:text-xs leading-relaxed opacity-80">{t.home.solution.desc}</p>
            </div>

            <div className="border-t border-black/20" />

            {/* Model */}
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-wide">{t.home.model.title}</h2>
              <p className="text-[10px] md:text-xs leading-relaxed opacity-80">{t.home.model.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[10px] md:text-xs">
            <Link
              href="/tech"
              className="border-2 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.tech}
            </Link>

            <Link
              href="/context"
              className="border-2 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.context}
            </Link>

            <Link
              href="/history"
              className="border-2 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.history}
            </Link>

            <Link
              href="/ux"
              className="border-2 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.ux}
            </Link>

            <Link
              href="/roadmap"
              className="border-2 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.nav.roadmap}
            </Link>

            <Link
              href="/faq"
              className="border-2 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.nav.faq}
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black bg-black text-white py-2 px-3 md:py-3 md:px-4 flex-shrink-0">
        <p className="text-[8px] md:text-[10px] opacity-60 text-center">{t.whitepaper.footer.message}</p>
      </footer>
    </div>
  )
}

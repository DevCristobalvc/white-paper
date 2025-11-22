"use client"

import { useState } from "react"
import { Languages, ChevronDown, Check, ArrowLeft } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import Link from "next/link"

export default function RoadmapPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const [showLangMenu, setShowLangMenu] = useState(false)
  const t = useTranslation(locale)

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b border-black/20 bg-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-xs">RP</div>
              <span className="font-bold text-sm tracking-tight">ReFi_Universe_Protocol</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="hover:bg-black/5 transition-colors flex items-center gap-1 border border-black/20 px-2 py-1 text-xs"
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

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.roadmap.heading}</h1>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-8">
            {/* Phase 1 */}
            <section className="border-2 border-black p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black bg-black text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h2 className="text-lg font-bold">{t.roadmap.phase1.title}</h2>
              </div>
              <ul className="space-y-2 text-sm pl-11">
                {t.roadmap.phase1.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="opacity-40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Phase 2 */}
            <section className="border-2 border-black p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="text-lg font-bold">{t.roadmap.phase2.title}</h2>
              </div>
              <ul className="space-y-2 text-sm pl-11">
                {t.roadmap.phase2.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="opacity-40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Phase 3 */}
            <section className="border-2 border-black p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h2 className="text-lg font-bold">{t.roadmap.phase3.title}</h2>
              </div>
              <ul className="space-y-2 text-sm pl-11">
                {t.roadmap.phase3.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="opacity-40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black bg-black text-white py-3 px-4 mt-12">
        <p className="text-[10px] opacity-60 text-center">{t.whitepaper.footer.message}</p>
      </footer>
    </div>
  )
}

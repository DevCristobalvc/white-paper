"use client"

import { useState } from "react"
import { Languages, ChevronDown, Check, ArrowRight } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import Link from "next/link"

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en")
  const [showLangMenu, setShowLangMenu] = useState(false)
  const t = useTranslation(locale)

  return (
    <div className="h-screen bg-white text-black font-mono flex flex-col overflow-hidden">
      {/* Minimalist Header - just logo and lang selector */}
      <header className="border-b border-black/20 bg-white flex-shrink-0">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
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
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content - White Paper Style */}
      <main className="flex-1 flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-3xl w-full space-y-12">
          {/* Title Block */}
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{t.whitepaper.title}</h1>
              <p className="text-xs md:text-sm opacity-60 tracking-wide uppercase">{t.whitepaper.subtitle}</p>
            </div>

            <div className="border-t border-b border-black/20 py-6">
              <p className="text-base md:text-xl leading-relaxed">{t.whitepaper.tagline}</p>
            </div>

            <p className="text-sm leading-relaxed max-w-2xl mx-auto">{t.whitepaper.description}</p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link
              href="/tech"
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="font-bold text-sm">{t.whitepaper.modules.tech}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/context"
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="font-bold text-sm">{t.whitepaper.modules.context}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/history"
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="font-bold text-sm">{t.whitepaper.modules.history}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/ux"
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="font-bold text-sm">{t.whitepaper.modules.ux}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/roadmap"
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="font-bold text-sm">{t.nav.roadmap}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/faq"
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="font-bold text-sm">{t.nav.faq}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-black bg-black text-white py-3 px-4 flex-shrink-0">
        <p className="text-[10px] opacity-60 text-center">{t.whitepaper.footer.message}</p>
      </footer>
    </div>
  )
}

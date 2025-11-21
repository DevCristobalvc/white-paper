"use client"

import { useState } from "react"
import { Languages, ChevronDown, Check, ArrowLeft, Plus, Minus } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import Link from "next/link"

export default function FAQPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const t = useTranslation(locale)

  const faqs = [
    { q: t.faq.q1.q, a: t.faq.q1.a },
    { q: t.faq.q2.q, a: t.faq.q2.a },
    { q: t.faq.q3.q, a: t.faq.q3.a },
    { q: t.faq.q4.q, a: t.faq.q4.a },
  ]

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
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.faq.heading}</h1>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-black">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-black/5 transition-colors text-left"
                >
                  <span className="font-bold text-sm md:text-base">{faq.q}</span>
                  {openQuestion === index ? (
                    <Minus className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 flex-shrink-0" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="px-4 pb-4 text-sm leading-relaxed border-t border-black/20 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
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

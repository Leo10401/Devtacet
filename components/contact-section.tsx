'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Mail,
  ArrowRight,
  Clock3,
  Code2,
  MessageCircle,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web App',
    budget: '$5k - $10k',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message || 'Direct inquiry submitted from contact form',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          service: 'Full-Stack Web App',
          budget: '$5k - $10k',
          message: '',
        })
      } else {
        setErrorMsg(data.message || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full my-auto px-4 sm:px-6 md:px-8 py-8 md:py-14 xl:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Outer Card Container */}
        <div className="relative overflow-hidden bg-[#111218] border border-zinc-800/80 rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl">
          {/* Background subtle purple glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Form Card */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="relative rounded-2xl bg-[#0b0c10] border border-zinc-800/90 shadow-2xl p-4 sm:p-6 overflow-hidden">
                {/* Purple top border line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

                {/* Form Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                      DEVTACET SUPPORT
                    </p>
                    <h3 className="text-base sm:text-xl font-bold tracking-tight text-white font-display mt-0.5">
                      Need project help?
                    </h3>
                  </div>
                  <div className="size-8 sm:size-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    <MessageSquare className="size-3.5 sm:size-4" />
                  </div>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 mb-3 border border-purple-500/20">
                      <CheckCircle2 className="size-6" />
                    </div>
                    <h4 className="font-bold text-base text-white">Message Received!</h4>
                    <p className="mt-1 text-xs text-zinc-400 max-w-xs">
                      Thank you! We will reply within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] px-4 py-2 text-xs font-semibold text-white hover:from-[#9333ea] hover:to-[#7c3aed] transition"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="ct-name" className="block text-xs font-semibold text-zinc-300 mb-1">
                          Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="ct-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#161720] border border-zinc-700/80 text-white font-medium placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="ct-email" className="block text-xs font-semibold text-zinc-300 mb-1">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="size-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="ct-email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-8 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#161720] border border-zinc-700/80 text-white font-medium placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Inquiry Type & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="ct-service" className="block text-xs font-semibold text-zinc-300 mb-1">
                          Inquiry Type
                        </label>
                        <div className="relative">
                          <select
                            id="ct-service"
                            name="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full appearance-none px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#161720] border border-zinc-700/80 text-white font-medium outline-none focus:ring-2 focus:ring-purple-500 pr-8 transition-all"
                          >
                            <option value="Full-Stack Web App" className="bg-[#161720] text-white">Full-Stack Web App</option>
                            <option value="Mobile App (iOS / Android)" className="bg-[#161720] text-white">Mobile App</option>
                            <option value="UI/UX & Product Design" className="bg-[#161720] text-white">UI/UX Design</option>
                            <option value="Cloud Architecture & API" className="bg-[#161720] text-white">Cloud & Backend</option>
                            <option value="Technical SEO & GEO" className="bg-[#161720] text-white">Technical SEO</option>
                            <option value="Other Inquiry" className="bg-[#161720] text-white">Other Inquiry</option>
                          </select>
                          <ChevronDown className="size-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="ct-budget" className="block text-xs font-semibold text-zinc-300 mb-1">
                          Budget
                        </label>
                        <div className="relative">
                          <select
                            id="ct-budget"
                            name="budget"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full appearance-none px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#161720] border border-zinc-700/80 text-white font-medium outline-none focus:ring-2 focus:ring-purple-500 pr-8 transition-all"
                          >
                            <option value="$5k - $10k" className="bg-[#161720] text-white">$5k - $10k</option>
                            <option value="< $5k" className="bg-[#161720] text-white">&lt; $5k</option>
                            <option value="$10k - $25k" className="bg-[#161720] text-white">$10k - $25k</option>
                            <option value="$25k+" className="bg-[#161720] text-white">$25k+</option>
                            <option value="Flexible / Undecided" className="bg-[#161720] text-white">Flexible</option>
                          </select>
                          <ChevronDown className="size-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label htmlFor="ct-msg" className="block text-xs font-semibold text-zinc-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="ct-msg"
                        name="message"
                        rows={3}
                        placeholder="Tell us what you want to build—timeline, features, or idea..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#161720] border border-zinc-700/80 text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-purple-500 transition-all min-h-[80px]"
                      />
                    </div>

                    {errorMsg && (
                      <div className="rounded-lg bg-rose-950/40 border border-rose-800/80 px-3 py-1.5 text-xs text-rose-300">
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:from-[#9333ea] hover:to-[#7c3aed] text-white px-4 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="size-4 ml-2" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-zinc-500 text-center font-medium">
                      We respect your privacy. No spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Copy & Badges Column */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent font-display leading-[1.15]">
                Let&apos;s build it.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 sm:mt-3 max-w-lg leading-relaxed">
                Full-stack engineering, design systems, and cloud architecture. Send us your project details and we will reply within 24 hours.
              </p>

              {/* Feature Highlights */}
              <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg">
                <div className="flex items-start gap-3">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#1c1d28] border border-purple-500/20 flex items-center justify-center text-[#c084fc] shrink-0">
                    <Clock3 className="size-3.5 sm:size-4" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs sm:text-sm">Quick response</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Reply in under 24h.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#1c1d28] border border-purple-500/20 flex items-center justify-center text-[#c084fc] shrink-0">
                    <Code2 className="size-3.5 sm:size-4" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs sm:text-sm">Clear roadmap</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Concise timeline &amp; plan.</p>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="mt-5 sm:mt-6">
                <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 rounded-2xl bg-[#161720] border border-zinc-800/90 shadow-xl p-2.5 sm:p-3 max-w-md w-full justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src="/Ayush_Kumar_Yadav.png"
                      alt="Ayush Kumar Yadav"
                      className="size-9 sm:size-10 rounded-xl object-cover border border-zinc-700 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] text-[#c084fc] leading-none uppercase tracking-wider font-bold">
                        LEAD ENGINEER
                      </p>
                      <p className="text-white font-bold text-xs sm:text-sm tracking-tight truncate mt-1">
                        Ayush Kumar Yadav
                      </p>
                    </div>
                  </div>

                  <a
                    href="mailto:hello@devtacet.me"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#222432] hover:bg-[#2b2e40] border border-zinc-700/80 text-white px-3 py-2 text-xs font-semibold transition-colors shrink-0 shadow-sm"
                  >
                    Direct Email
                    <MessageCircle className="size-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


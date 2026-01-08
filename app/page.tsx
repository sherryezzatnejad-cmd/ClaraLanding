import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChatWidget from '@/components/ChatWidget'
import Features from '@/components/Features'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              {/* About Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  About Clara AI
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Handle 70% of Support Tickets with Safe AI Automation
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Clara answers repetitive WhatsApp and web chat questions
                instantly. When it is unsure, it escalates to your team—so
                customers always get the right answer.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-clara-dark text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-clara-dark-light transition-colors">
                  Start Free Trial Now!
                </button>
                <button className="bg-clara-green-light text-clara-dark px-8 py-4 rounded-lg text-base font-semibold hover:bg-green-100 transition-colors border border-clara-green">
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Chat Widget */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <ChatWidget />
            </div>
          </div>
        </div>
      </section>
      <Features />
    </main>
  )
}

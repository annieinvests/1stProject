import { Link } from 'react-router-dom'

const steps = [
  {
    step: '01',
    icon: '💬',
    title: 'Tell Us About Them',
    details: [
      "Who's the gift for?",
      "What's the occasion? (Birthday, anniversary, holiday, corporate, just because)",
      "What are they into? (Coffee, books, wine, self-care — pick all that apply)",
      "What's your budget? ($50, $100, $200, $500+)",
    ],
    note: "That's it. Takes 2 minutes, we promise.",
  },
  {
    step: '02',
    icon: '✨',
    title: 'We Curate the Perfect Hamper',
    details: [
      'Our gifting specialists hand-select 4–10 premium items that match their personality and occasion',
      'Each item is chosen for quality, delight factor, and how well it fits together',
      "We'll send you a preview — love it? Great, we ship. Want changes? We'll tweak until it feels right.",
    ],
    note: 'No algorithms. Just care.',
  },
  {
    step: '03',
    icon: '🎁',
    title: 'Beautifully Packaged & Delivered',
    details: [
      'Wrapped in our signature cream and gold packaging',
      'Premium tissue paper and ribbon with the Numbers 6:24 blessing',
      'A personalized handwritten note with your words, our handwriting',
      'Tracked delivery straight to their door',
    ],
    note: 'Optional upgrades include velvet ribbon, dried florals, wax seal, and express delivery.',
  },
]

const faqs = [
  {
    q: 'How long does it take?',
    a: 'Most orders ship within 2–3 business days. Express delivery is available for next-day shipping.',
  },
  {
    q: 'Can I customize the contents?',
    a: 'Absolutely. After our curators build your hamper, we\'ll send you a preview. You can swap, add, or remove items until it\'s perfect.',
  },
  {
    q: 'What if they don\'t like it?',
    a: 'We guarantee satisfaction. If anything misses the mark, we\'ll work with you to make it right — including a full refund on the hamper cost.',
  },
  {
    q: 'Do you deliver nationwide?',
    a: 'Yes. We deliver anywhere in the continental US. International shipping is coming soon.',
  },
]

export default function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative motif-lattice-bg">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-burgundy mb-4 font-primary">
          Gifting, made simple. Thoughtful, every time.
        </h1>
        <p className="text-brand-taupe text-lg max-w-2xl mx-auto">
          We take the guesswork out of gift-giving so you can focus on what matters — the person on the other end.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-16 mb-20">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-brand-gold/20" />
            )}
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-1 flex md:flex-col items-center md:items-center gap-4">
                <div className="w-24 h-24 bg-brand-cream rounded-full flex items-center justify-center text-3xl shadow-sm border border-brand-gold/20">
                  {step.icon}
                </div>
                <div className="text-xl font-bold text-brand-gold font-primary">{step.step}</div>
              </div>
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold text-brand-burgundy mb-4 font-primary">{step.title}</h2>
                <ul className="space-y-3 mb-4">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-brand-charcoal">
                      <span className="text-brand-gold mt-1">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-taupe italic text-sm">{step.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upgrades */}
      <div className="bg-brand-cream rounded-3xl p-8 md:p-12 mb-20">
        <h2 className="text-2xl font-bold text-brand-burgundy mb-6 font-primary">Optional Upgrades</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Premium Wrapping', price: '+$15', desc: 'Velvet ribbon, dried florals, wax seal with monogram', bg: 'bg-pink-50' },
            { name: 'Blessing Card Upgrade', price: '+$5', desc: 'Premium letterpress card with occasion verse calligraphed', bg: 'bg-purple-50' },
            { name: 'Handwritten Note', price: 'Free', desc: 'Your personal message, hand-lettered on premium card stock', bg: 'bg-blue-50' },
            { name: 'Express Delivery', price: '+$12', desc: 'Next-business-day shipping (order by 2 PM)', bg: 'bg-green-50' },
            { name: 'Add-On Gift', price: '+$20–$50', desc: 'Small surprise item — candle, chocolate box, mini plant, or curated pick', bg: 'bg-orange-50' },
            { name: 'Add-On Flowers', price: '+$35–$75', desc: 'Dried flower bouquet or fresh seasonal arrangement', bg: 'bg-amber-50' },
          ].map((upgrade) => (
            <div key={upgrade.name} className={`flex items-start justify-between ${upgrade.bg} rounded-xl p-5 border border-brand-gold/10`}>
              <div>
                <h3 className="font-semibold text-brand-burgundy">{upgrade.name}</h3>
                <p className="text-brand-taupe text-sm">{upgrade.desc}</p>
              </div>
              <span className="text-brand-gold font-bold whitespace-nowrap ml-4">{upgrade.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-brand-burgundy text-center mb-8 font-primary">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-brand-cream rounded-2xl p-5 border border-brand-gold/10 open:border-brand-gold/30 transition-all group">
              <summary className="font-semibold text-brand-burgundy cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-brand-gold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-brand-taupe leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-burgundy mb-4 font-primary">Ready to be the best gift-giver they know?</h2>
        <Link
          to="/builder"
          className="inline-block bg-brand-gold text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg shadow-brand-gold/20"
        >
          Start building your gift &rarr;
        </Link>
      </div>
    </div>
  )
}

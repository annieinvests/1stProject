import { Link } from 'react-router-dom'

const steps = [
  {
    icon: '💬',
    title: 'Tell us about them',
    description: 'Describe the recipient — their interests, the occasion, your budget. Takes two minutes.',
  },
  {
    icon: '✨',
    title: 'We curate it',
    description: 'Our gifting specialists hand-pick premium items that match their taste. No algorithms, just care.',
  },
  {
    icon: '🎁',
    title: 'We wrap & deliver',
    description: 'Beautifully packaged with a handwritten note and the Numbers 6:24 blessing, delivered to their door.',
  },
  {
    icon: '😊',
    title: 'You get all the credit',
    description: 'They feel cherished. You look like a hero. Gifting, done right.',
  },
]

const valueProps = [
  {
    icon: '🕊️',
    title: 'Effortless Thoughtfulness',
    desc: 'No scrolling. No second-guessing. Just answer a few questions and we build the perfect hamper for you.',
  },
  {
    icon: '🎁',
    title: 'Hand-Curated, Not Mass-Produced',
    desc: 'Every hamper is assembled by our gifting specialists, not a computer. Each item is chosen to delight.',
  },
  {
    icon: '📦',
    title: 'Beautifully Boxed & Delivered',
    desc: 'Premium packaging, handwritten note, tracked delivery. Your gift arrives like a warm hug at the doorstep.',
  },
]

const categories = [
  { icon: '☕', label: 'Coffee Lover', bg: 'bg-orange-50' },
  { icon: '🧀', label: 'Wine & Cheese', bg: 'bg-purple-50' },
  { icon: '📚', label: 'Bookworm', bg: 'bg-blue-50' },
  { icon: '🌿', label: 'Spa & Self-Care', bg: 'bg-green-50' },
  { icon: '🍫', label: 'Chocoholic', bg: 'bg-pink-50' },
  { icon: '🍳', label: 'Foodie', bg: 'bg-orange-50' },
  { icon: '🫖', label: 'Tea Lover', bg: 'bg-amber-50' },
]

const testimonials = [
  {
    quote: "I'm the worst gift-giver. Blessings made me look like a hero. My sister cried when she opened it.",
    author: 'Michael T.',
  },
  {
    quote: 'Ordered for a corporate client and got a thank-you email from their whole team. The curation was spot-on.',
    author: 'Priya K.',
  },
  {
    quote: "My go-to for every birthday now. I don't even think about it — just fill in the form and wait for the photos.",
    author: 'Sarah L.',
  },
]

const tiers = [
  { price: '$50', label: 'Essential', items: '3–4 items', desc: 'Thoughtful and modest — perfect for colleagues or "just because".' },
  { price: '$100', label: 'Classic', items: '4–5 items', desc: 'Well-rounded and generous — our most popular tier.', popular: true },
  { price: '$200', label: 'Premium', items: '5–7 items', desc: 'Indulgent — includes one hero item (premium coffee, wine, or luxury candle).' },
  { price: '$500+', label: 'Luxury', items: '7–10 items', desc: 'Opulent — top-shelf products, custom packaging, maximum wow factor.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-gold/10 motif-mandala-bg">
        <div className="absolute top-0 left-0 w-32 h-32 z-10 pointer-events-none" style={{ backgroundImage: 'url(/motifs/paisley-corner.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '120px', opacity: '0.7' }} />
        <div className="absolute bottom-0 right-0 w-32 h-32 z-10 pointer-events-none" style={{ backgroundImage: 'url(/motifs/paisley-corner.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '120px', opacity: '0.7', transform: 'rotate(180deg)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-burgundy leading-tight mb-6 font-primary">
                The perfect gift is out there. We'll find it.
              </h1>
              <p className="text-lg md:text-xl text-brand-taupe mb-8 max-w-xl">
                Tell us about them — their tastes, their passions, the occasion. We'll hand-curate a beautiful gift hamper
                that says exactly what you mean. Thoughtful gifting, zero effort.
              </p>
              <Link
                to="/builder"
                className="inline-block bg-brand-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg shadow-brand-gold/20"
              >
                Start building your gift &rarr;
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="text-8xl animate-float">🎀</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 h-16 bg-gradient-to-t from-brand-cream to-transparent" />
      </section>

      <div className="motif-divider-floral" />

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-burgundy mb-4 font-primary">How It Works</h2>
          <p className="text-brand-taupe text-center max-w-2xl mx-auto mb-16">
            Three simple steps to the perfect gift. No stress, no last-minute panics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`text-center p-6 rounded-2xl ${i === 0 ? 'bg-orange-50' : i === 1 ? 'bg-purple-50' : i === 2 ? 'bg-green-50' : 'bg-blue-50'} hover:bg-brand-gold/5 transition-colors`}>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-burgundy mb-2 font-primary">{step.title}</h3>
                <p className="text-brand-taupe text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-brand-burgundy hover:text-brand-gold font-medium transition-colors">
              Learn more about how it works &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="motif-divider-paisley" />

      {/* Value Props */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-burgundy mb-12 font-primary">Why Blessings?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white border border-brand-gold/10 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold text-brand-burgundy mb-3 font-primary">{prop.title}</h3>
                <p className="text-brand-taupe leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="motif-divider-paisley" />

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-burgundy mb-4 font-primary">Pricing Tiers</h2>
          <p className="text-brand-taupe text-center max-w-2xl mx-auto mb-16">
            Every tier includes premium gift box, tissue paper, ribbon, the Numbers 6:24 blessing on packaging, and a handwritten note.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((tier, idx) => (
              <div key={tier.label} className={`rounded-2xl p-8 text-center border-2 transition-all hover:shadow-xl ${tier.popular ? 'border-brand-gold bg-white shadow-lg shadow-brand-gold/10 relative' : `${['bg-pink-50', 'bg-purple-50', 'bg-blue-50', 'bg-green-50'][idx]} border-brand-taupe/20`}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-3xl font-bold text-brand-burgundy mb-1 font-primary">{tier.price}</div>
                <div className="text-sm font-medium text-brand-taupe uppercase tracking-wider mb-1">{tier.items}</div>
                <div className="text-lg font-semibold text-brand-gold mb-3 font-primary">{tier.label}</div>
                <p className="text-brand-taupe text-sm leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="motif-divider-floral" />

      {/* Categories Strip */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-burgundy mb-8 font-primary">Shop by Interest</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Link key={cat.label} to="/catalog" className={`flex items-center gap-2 ${cat.bg} px-5 py-3 rounded-full border border-brand-gold/20 hover:border-brand-gold hover:shadow-md transition-all text-brand-burgundy font-medium`}>
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/catalog" className="text-brand-burgundy hover:text-brand-gold font-medium transition-colors">
              Browse all categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="motif-divider-paisley" />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-burgundy mb-12 font-primary">Loved by Givers</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-brand-cream rounded-2xl p-8 border border-brand-gold/10">
                <p className="text-brand-charcoal text-lg mb-4 italic leading-relaxed">"{t.quote}"</p>
                <p className="text-brand-taupe font-medium">&mdash; {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="motif-divider-floral" />

      {/* Closing CTA */}
      <section className="py-20 bg-brand-burgundy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-primary">Ready to make someone's day?</h2>
          <p className="text-brand-gold-light/80 text-lg mb-8 max-w-xl mx-auto">
            Tell us a little about them, choose your budget, and let us work our magic. Free shipping on orders over $100.
          </p>
          <Link
            to="/builder"
            className="inline-block bg-brand-gold text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg"
          >
            Build your gift &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}

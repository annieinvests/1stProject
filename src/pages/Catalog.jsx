const categories = [
  { name: 'Coffee Lover', emoji: '☕', desc: 'Specialty roasts, brewing equipment, and artisan pairings', bg: 'bg-orange-50' },
  { name: 'Tea Lover', emoji: '🫖', desc: 'Premium loose-leaf teas, cast-iron teapots, and honey', bg: 'bg-amber-50' },
  { name: 'Wine & Cheese', emoji: '🧀', desc: 'Curated wines, artisan cheeses, boards, and accessories', bg: 'bg-purple-50' },
  { name: 'Chocoholic', emoji: '🍫', desc: 'Artisan chocolates, truffles, and gourmet hot cocoa', bg: 'bg-pink-50' },
  { name: 'Foodie', emoji: '🍳', desc: 'Truffle oils, pastas, spices, and cooking essentials', bg: 'bg-orange-50' },
  { name: 'Spa & Self-Care', emoji: '🌿', desc: 'Candles, bath sets, aromatherapy, and silk accessories', bg: 'bg-green-50' },
  { name: 'Bookworm', emoji: '📚', desc: 'Curated books, reading accessories, and literary treats', bg: 'bg-blue-50' },
  { name: 'Fitness & Wellness', emoji: '🏃', desc: 'Yoga gear, resistance training, and wellness bundles', bg: 'bg-green-50' },
]

const tiers = [
  { name: 'Essential', price: '$50', items: '3–4 items', desc: 'Thoughtful and modest — perfect for colleagues or "just because".' },
  { name: 'Classic', price: '$100', items: '4–5 items', desc: 'Well-rounded and generous — our most popular tier for birthdays and anniversaries.' },
  { name: 'Premium', price: '$200', items: '5–7 items', desc: 'Indulgent — includes one hero item (premium coffee, wine, or luxury candle).' },
  { name: 'Luxury', price: '$500+', items: '7–10 items', desc: 'Opulent — top-shelf products, custom packaging, maximum wow factor.' },
]

export default function Catalog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-burgundy mb-4 font-primary">Our Hamper Collection</h1>
        <p className="text-brand-taupe text-lg max-w-3xl mx-auto">
          Every hamper is hand-curated by our gifting specialists and includes the Numbers 6:24-26 blessing
          on all items and packaging. Browse by interest, then choose your tier.
        </p>
      </div>

      {/* Interest Categories */}
      <div className="motif-divider-floral mb-6" />
      <h2 className="text-2xl font-bold text-brand-burgundy mb-6 font-primary text-center">Shop by Interest</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((cat) => (
          <div key={cat.name} className={`${cat.bg} rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-lg transition-all group relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-10" style={{ backgroundImage: 'url(/motifs/mandala-quarter.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '80px' }} />
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.emoji}</div>
            <h3 className="text-lg font-semibold text-brand-burgundy mb-1 font-primary">{cat.name}</h3>
            <p className="text-brand-taupe text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>

      <div className="motif-divider-paisley mb-6" />

      {/* Pricing Tiers */}
      <h2 className="text-2xl font-bold text-brand-burgundy mb-6 font-primary text-center">Pricing Tiers</h2>
      <p className="text-brand-taupe text-center max-w-3xl mx-auto mb-10">
        All tiers include premium gift box, tissue paper, ribbon, the Numbers 6:24-26 blessing on packaging, and a handwritten note with an occasion-specific verse.
      </p>
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {tiers.map((tier) => (
          <div key={tier.name} className={`rounded-2xl p-8 text-center border-2 transition-all hover:shadow-xl ${tier.name === 'Classic' ? 'border-brand-gold bg-white shadow-lg shadow-brand-gold/10 relative' : 'border-brand-taupe/20 bg-white'}`}>
            {tier.name === 'Classic' && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
            )}
            <div className="text-3xl font-bold text-brand-burgundy mb-1 font-primary">{tier.price}</div>
            <div className="text-sm font-medium text-brand-taupe uppercase tracking-wider mb-1">{tier.items}</div>
            <div className="text-lg font-semibold text-brand-gold mb-3 font-primary">{tier.name}</div>
            <p className="text-brand-taupe text-sm leading-relaxed">{tier.desc}</p>
          </div>
        ))}
      </div>

      <div className="motif-divider-floral mb-6" />

      {/* Sample Hamper Cards */}
      <h2 className="text-2xl font-bold text-brand-burgundy mb-6 font-primary text-center">Popular Combinations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          { category: '☕ Coffee Lover', occasion: 'Birthday', tier: 'Classic', items: '12oz specialty coffee + 8oz decaf, assorted biscotti tin, French press, ceramic mug set (2), honey sticks', verse: 'Psalm 20:4', bg: 'bg-orange-50' },
          { category: '🧀 Wine & Cheese', occasion: 'Anniversary', tier: 'Premium', items: '2-bottle wine selection, 5-cheese artisan box, slate cheese board, truffle honey, fig crisps, wine journal', verse: 'Lamentations 3:22-23', bg: 'bg-purple-50' },
          { category: '🌿 Spa & Self-Care', occasion: 'Sympathy', tier: 'Classic', items: 'Calming candle set (2), relaxing bath soak, bamboo tray, silk sleep mask, aromatherapy diffuser', verse: 'Romans 15:13', bg: 'bg-green-50' },
          { category: '📚 Bookworm', occasion: 'Graduation', tier: 'Essential', items: 'Curated career book, bookmark set, bookish candle, tea sampler', verse: 'Joshua 1:9', bg: 'bg-blue-50' },
          { category: '🍫 Chocoholic', occasion: 'Christmas', tier: 'Premium', items: '36-piece international chocolate set, chocolate-making kit, gourmet hot cocoa, chocolate bark', verse: 'Isaiah 9:6', bg: 'bg-pink-50' },
          { category: '🍳 Foodie', occasion: 'Housewarming', tier: 'Classic', items: 'Truffle oil set, aged balsamic, artisan pasta trio, Italian spices, salt flakes, pasta measurer', verse: 'Joshua 24:15', bg: 'bg-orange-50' },
        ].map((hamper, i) => (
          <div key={i} className="bg-white rounded-2xl border border-brand-gold/10 overflow-hidden hover:shadow-xl transition-all group relative">
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'url(/motifs/mandala-quarter.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '80px' }} />
            <div className={`${hamper.bg} p-4 text-center`}>
              <span className="text-3xl">{hamper.category.split(' ')[0]}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">{hamper.tier}</span>
                <span className="text-xs text-brand-taupe">{hamper.occasion}</span>
              </div>
              <h3 className="font-semibold text-brand-burgundy mb-1 font-primary">{hamper.category}</h3>
              <p className="text-brand-taupe text-sm mb-3 leading-relaxed">{hamper.items}</p>
              <p className="text-xs text-brand-sage italic">{hamper.verse}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-brand-burgundy rounded-3xl p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-primary">Not sure where to start?</h2>
        <p className="text-brand-gold-light/80 mb-8 max-w-xl mx-auto">Answer a few questions about the recipient and we'll build the perfect hamper from scratch.</p>
        <a href="/builder" className="inline-block bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg">
          Build Custom Hamper &rarr;
        </a>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

const values = [
  {
    icon: '🕊️',
    title: 'Generosity',
    desc: '"A generous person will prosper; whoever refreshes others will be refreshed." — Proverbs 11:25',
  },
  {
    icon: '💝',
    title: 'Thoughtfulness',
    desc: 'Every gift is curated with intention and care. We take the time to understand who you\'re gifting for.',
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'Gifts strengthen bonds between people. We celebrate relationships and the joy of connection.',
  },
  {
    icon: '✨',
    title: 'Joy',
    desc: 'Giving should be joyful, not stressful. Receiving should feel like a blessing.',
  },
  {
    icon: '🌟',
    title: 'Excellence',
    desc: '"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23',
  },
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative motif-mandala-bg">
      {/* Story */}
      <section className="text-center mb-20">
        <div className="text-6xl mb-6">💝</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-burgundy mb-6 font-primary">We believe the best gifts are felt, not just given.</h1>
        <div className="max-w-3xl mx-auto text-left space-y-5 text-brand-charcoal leading-relaxed">
          <p>
            Gift-giving shouldn't be stressful. But let's be honest — we've all stared at a browser tab, paralyzed by options,
            wondering if they'd <em>actually</em> like that candle set.
          </p>
          <p>
            Blessings was born from that feeling. We started as two friends who wished there was a better way — a service that
            took the guesswork out of gifting, so the giver could focus on what matters: the person on the other end.
          </p>
          <h2 className="text-xl font-bold text-brand-burgundy font-primary mt-8">Our approach is simple:</h2>
          <p>
            We pair every sender with a real human curator. You tell us about the recipient — their hobbies, their tastes,
            the occasion, your budget — and we hand-pick every item in the hamper. No automated suggestions, no generic boxes.
            Just honest, thoughtful curation from people who care about getting it right.
          </p>
          <div className="bg-brand-cream rounded-2xl p-8 border border-brand-gold/10 my-8">
            <h2 className="text-xl font-bold text-brand-burgundy font-primary mb-4">Why we do it:</h2>
            <p className="text-brand-charcoal italic">
              Because a truly thoughtful gift can change someone's day. And everyone deserves that moment — the surprise,
              the smile, the <em>"you didn't have to, but I'm so glad you did."</em>
            </p>
          </div>
          <div className="bg-brand-burgundy rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white font-primary mb-4">Our promise:</h2>
            <p className="text-brand-gold-light/90">
              Every hamper is packed with intention, wrapped with care, and sent with love. If they don't love it, we'll make it right.
            </p>
          </div>
        </div>
      <div className="motif-divider-floral my-8" />
      </section>

      {/* Values */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-burgundy mb-12 font-primary">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className={`${['bg-pink-50', 'bg-purple-50', 'bg-green-50', 'bg-blue-50', 'bg-orange-50'][i]} rounded-2xl p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-all`}>
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-semibold text-brand-burgundy mb-3 font-primary">{v.title}</h3>
              <p className="text-brand-taupe leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blessing */}
      <section className="text-center mb-20 bg-brand-cream rounded-3xl p-12 border border-brand-gold/10">
        <h2 className="text-2xl font-bold text-brand-burgundy mb-6 font-primary">Our Blessing</h2>
        <p className="text-brand-charcoal text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
          "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you;
          the Lord turn his face toward you and give you peace."
        </p>
        <p className="text-brand-taupe">&mdash; Numbers 6:24-26</p>
        <p className="text-brand-taupe text-sm mt-6 max-w-xl mx-auto">
          Every hamper carries this blessing as a printed element on all items and packaging. It is a warm,
          quiet presence — a reminder that every gift is given with love and intention.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-brand-burgundy mb-4 font-primary">Ready to find the perfect gift?</h2>
        <Link to="/builder" className="inline-block bg-brand-gold text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg shadow-brand-gold/20">
          Let's find the perfect gift &rarr;
        </Link>
      </div>
    </div>
  )
}

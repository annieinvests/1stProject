import { useState } from 'react'

const budgetTiers = [
  { value: '50', label: '$50', tier: 'Essential', items: '3–4 items', desc: 'Thoughtful and modest' },
  { value: '100', label: '$100', tier: 'Classic', items: '4–5 items', desc: 'Well-rounded and generous' },
  { value: '200', label: '$200', tier: 'Premium', items: '5–7 items', desc: 'Indulgent with a hero item' },
  { value: '500', label: '$500+', tier: 'Luxury', items: '7–10 items', desc: 'Opulent, top-shelf products' },
]

const occasions = [
  'Birthday', 'Anniversary', 'Wedding', 'Graduation', 'New Baby',
  'Housewarming', 'Christmas', 'Easter', 'Sympathy', 'Just Because',
  'Corporate Gift', 'Thank You',
]

const interests = [
  'Coffee Lover', 'Tea Lover', 'Wine & Cheese', 'Chocoholic',
  'Foodie', 'Spa & Self-Care', 'Bookworm', 'Fitness & Wellness',
]

const addOns = [
  { id: 'premium-wrap', label: 'Premium Wrapping', price: 15, desc: 'Velvet ribbon, dried florals, wax seal with monogram' },
  { id: 'note-upgrade', label: 'Blessing Card Upgrade', price: 5, desc: 'Letterpress card with occasion verse calligraphed' },
  { id: 'express', label: 'Express Delivery', price: 12, desc: 'Next-business-day shipping (order by 2 PM)' },
  { id: 'addon-gift', label: 'Add-On Gift', price: 25, desc: 'Small surprise item — candle, chocolate box, or curated pick' },
  { id: 'flowers', label: 'Add-On Flowers', price: 35, desc: 'Dried flower bouquet or fresh seasonal arrangement' },
]

export default function HamperBuilder() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    budget: '100',
    occasion: '',
    recipientName: '',
    interests: [],
    message: '',
    addOns: [],
  })

  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const toggleAddOn = (id) => {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id],
    }))
  }

  const totalAddOns = form.addOns.reduce((sum, id) => {
    const addon = addOns.find((a) => a.id === id)
    return sum + (addon?.price || 0)
  }, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(4)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative motif-lattice-bg">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= s ? 'bg-brand-gold text-white' : 'bg-brand-taupe/20 text-brand-taupe'
              }`}
            >
              {s}
            </div>
            <span className={`text-sm hidden sm:inline ${step >= s ? 'text-brand-burgundy font-medium' : 'text-brand-taupe'}`}>
              {s === 1 ? 'Budget' : s === 2 ? 'Recipient' : 'Extras'}
            </span>
            {s < 3 && <div className={`w-8 h-0.5 ${step > s ? 'bg-brand-gold' : 'bg-brand-taupe/20'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h1 className="text-3xl font-bold text-brand-burgundy mb-2 font-primary">Choose Your Budget</h1>
          <p className="text-brand-taupe mb-8">Pick a tier and we'll fill it with love.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {budgetTiers.map((tier) => (
              <button
                key={tier.value}
                onClick={() => setForm({ ...form, budget: tier.value })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  form.budget === tier.value
                    ? 'border-brand-gold bg-brand-cream shadow-md'
                    : 'border-brand-taupe/20 hover:border-brand-gold/50 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-brand-burgundy">{tier.label}</span>
                  <span className="text-sm text-brand-taupe">{tier.items}</span>
                </div>
                <div className="text-sm font-medium text-brand-gold">{tier.tier}</div>
                <div className="text-brand-taupe text-sm mt-1">{tier.desc}</div>
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <button onClick={() => setStep(2)} className="bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-gold/90 transition-colors">
              Next: Recipient Details
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="text-3xl font-bold text-brand-burgundy mb-2 font-primary">Tell Us About Them</h1>
          <p className="text-brand-taupe mb-8">The more we know, the more personal the gift.</p>

          <div className="space-y-6">
            {/* Recipient Name */}
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Recipient's Name *</label>
              <input
                type="text"
                value={form.recipientName}
                onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
                placeholder="e.g., Sarah"
                className="w-full px-4 py-3 rounded-xl border border-brand-taupe/30 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-white"
                required
              />
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Occasion *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setForm({ ...form, occasion: occ })}
                    className={`px-4 py-2 rounded-xl text-sm border transition-all ${
                      form.occasion === occ
                        ? 'border-brand-gold bg-brand-cream text-brand-burgundy font-medium'
                        : 'border-brand-taupe/20 text-brand-taupe hover:border-brand-gold/50'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Interests (pick all that fit)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-xl text-sm border transition-all ${
                      form.interests.includes(interest)
                        ? 'border-brand-gold bg-brand-cream text-brand-burgundy font-medium'
                        : 'border-brand-taupe/20 text-brand-taupe hover:border-brand-gold/50 bg-orange-50'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Message */}
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Personal Message (optional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Something special you'd like to say..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-brand-taupe/30 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none resize-none bg-white"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button onClick={() => setStep(1)} className="text-brand-taupe hover:text-brand-burgundy font-medium px-6 py-3">
              &larr; Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!form.recipientName || !form.occasion}
              className="bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next: Add Extras
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1 className="text-3xl font-bold text-brand-burgundy mb-2 font-primary">Add the Finishing Touches</h1>
          <p className="text-brand-taupe mb-8">Make it extra special with optional upgrades.</p>

          <div className="space-y-4 mb-8">
            {addOns.map((addon) => (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddOn(addon.id)}
                className={`w-full p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                  form.addOns.includes(addon.id)
                    ? 'border-brand-gold bg-brand-cream'
                    : 'border-brand-taupe/20 hover:border-brand-gold/50 bg-white'
                }`}
              >
                <div>
                  <div className="font-semibold text-brand-burgundy">{addon.label}</div>
                  <div className="text-sm text-brand-taupe">{addon.desc}</div>
                </div>
                <div className="text-lg font-bold text-brand-gold">${addon.price}</div>
              </button>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-brand-cream rounded-2xl p-6 mb-8 border border-brand-gold/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none" style={{ backgroundImage: 'url(/motifs/paisley-corner.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '60px', opacity: '0.2' }} />
            <h3 className="font-semibold text-brand-burgundy mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-brand-taupe">
                <span>Hamper (${form.budget} tier)</span>
                <span>${form.budget}</span>
              </div>
              {form.addOns.length > 0 && (
                <div className="flex justify-between text-brand-taupe">
                  <span>Add-ons ({form.addOns.length})</span>
                  <span>${totalAddOns}</span>
                </div>
              )}
              <div className="border-t border-brand-gold/20 pt-2 flex justify-between font-bold text-brand-burgundy">
                <span>Total</span>
                <span>${parseInt(form.budget) + totalAddOns}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="text-brand-taupe hover:text-brand-burgundy font-medium px-6 py-3">
              &larr; Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-brand-gold text-white px-10 py-3 rounded-full font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg shadow-brand-gold/20"
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-brand-burgundy mb-4 font-primary">Blessings on the Way! 🎁</h1>
          <p className="text-brand-taupe text-lg mb-2">
            Your hamper for <strong className="text-brand-burgundy">{form.recipientName}</strong> is being curated with care.
          </p>
          <p className="text-brand-taupe mb-8">
            Budget: <strong className="text-brand-burgundy">${form.budget}</strong> | Occasion: <strong className="text-brand-burgundy">{form.occasion}</strong>
            {form.addOns.length > 0 && <span> | Add-ons: {form.addOns.length}</span>}
          </p>
          <div className="bg-brand-cream rounded-2xl p-8 max-w-lg mx-auto mb-8 border border-brand-gold/10">
            <p className="text-brand-charcoal text-lg italic mb-3 leading-relaxed">
              "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you."
            </p>
            <p className="text-brand-taupe font-medium">&mdash; Numbers 6:24-26</p>
            <div className="border-t border-brand-gold/10 mt-4 pt-4">
              <p className="text-brand-taupe text-sm">
                We'll hand-pick every item and deliver within 3&ndash;5 business days. You'll get a tracking link via email.
              </p>
            </div>
          </div>
          <a
            href="/"
            className="inline-block bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-gold/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      )}
    </div>
  )
}

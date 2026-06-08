export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-burgundy mb-4 font-primary">Get in Touch</h1>
          <p className="text-brand-taupe text-lg mb-8">
            Have a question? Want a custom corporate order? We'd love to hear from you.
          </p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-brand-taupe/30 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Email *</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-brand-taupe/30 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-white"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-brand-taupe/30 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-white text-brand-charcoal">
                <option>General Inquiry</option>
                <option>Corporate / Bulk Order</option>
                <option>Partnership Opportunity</option>
                <option>Order Issue</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-burgundy mb-1">Message *</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-brand-taupe/30 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none resize-none bg-white"
                placeholder="Tell us how we can help..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-gold/90 transition-colors w-full shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="bg-brand-cream rounded-3xl p-8 space-y-6 border border-brand-gold/10">
            <h2 className="text-xl font-bold text-brand-burgundy mb-2 font-primary">Other Ways to Reach Us</h2>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-semibold text-brand-burgundy">Email</h3>
                <p className="text-brand-taupe">hello@blessings.gifts</p>
                <p className="text-brand-taupe/60 text-sm">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <h3 className="font-semibold text-brand-burgundy">Phone</h3>
                <p className="text-brand-taupe">1-800-BLESSINGS</p>
                <p className="text-brand-taupe/60 text-sm">Mon-Fri, 9am–6pm PST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-brand-burgundy">Visit Us</h3>
                <p className="text-brand-taupe">742 Gifting Lane, Suite 200</p>
                <p className="text-brand-taupe/60 text-sm">San Francisco, CA 94105</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🏢</div>
              <div>
                <h3 className="font-semibold text-brand-burgundy">Corporate Orders</h3>
                <p className="text-brand-taupe">corporate@blessings.gifts</p>
                <p className="text-brand-taupe/60 text-sm">Volume discounts available for 10+ hampers</p>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-gold/20">
              <p className="text-brand-taupe text-sm">
                <strong className="text-brand-burgundy">Office Hours:</strong> Our team is available Monday through Friday,
                9:00 AM to 6:00 PM PST. For urgent order inquiries, please include your order number in the subject line.
              </p>
              <p className="text-brand-taupe/60 text-xs mt-4 italic">
                "The Lord bless you and keep you" — Numbers 6:24
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

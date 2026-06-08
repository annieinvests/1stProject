import { Link } from 'react-router-dom'

export default function Hero({ title, subtitle, ctaText, ctaTo, image }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-burgundy leading-tight mb-6 font-primary">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-brand-taupe mb-8 max-w-xl">
              {subtitle}
            </p>
            {ctaText && ctaTo && (
              <Link
                to={ctaTo}
                className="inline-block bg-brand-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-gold/90 transition-colors shadow-lg shadow-brand-gold/20"
              >
                {ctaText}
              </Link>
            )}
          </div>
          {image && (
            <div className="hidden md:flex justify-center">
              <div className="text-8xl animate-bounce" style={{ animationDuration: '3s' }}>{image}</div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute -bottom-2 left-0 right-0 h-16 bg-gradient-to-t from-brand-cream to-transparent" />
    </section>
  )
}

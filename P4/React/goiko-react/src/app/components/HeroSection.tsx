interface HeroSectionProps {
  translations: any;
}

export function HeroSection({ translations: t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1654682941243-3813acb2d6b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Goiko Restaurant"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
        <h1
          className="text-primary mb-6 leading-tight"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '96px',
            textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
          }}
        >
          {t.hero.title}
          <br />
          <span className="text-accent">{t.hero.titleAccent}</span>
        </h1>

        <p className="text-foreground/80 text-2xl mb-16 font-['Inter',sans-serif] max-w-[800px] mx-auto">
          {t.hero.subtitle}
        </p>

        {/* Hamburguesa del Mes */}
        <div className="max-w-[900px] mx-auto">
          <h2
            className="text-primary mb-8 uppercase tracking-wider"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: '48px',
              textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)'
            }}
          >
            {t.hero.burgerOfMonth}
          </h2>
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Hamburguesa del Mes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

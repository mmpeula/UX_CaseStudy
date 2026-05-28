interface VotingSectionProps {
  translations: any;
  burgers: any[];
}

export function VotingSection({ translations: t, burgers }: VotingSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-background">
      <div className="max-w-[1600px] w-full mx-auto px-6">
        <h2
          className="text-primary text-center mb-16 uppercase tracking-wider"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '56px',
            textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)'
          }}
        >
          {t.voting.title}
        </h2>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-12 items-center">
          {/* Hamburguesa 1 */}
          <div className="relative group cursor-pointer transition-all hover:scale-105">
            <div className="relative h-[700px] rounded-2xl overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/30 hover:border-primary hover:shadow-primary/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Burger Option 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-primary mb-3 uppercase"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: '36px'
                  }}
                >
                  {burgers[0]?.name || 'LA BESTIA'}
                </h3>
                <p className="text-foreground/80 font-['Inter',sans-serif] text-lg mb-6">
                  {burgers[0]?.description || 'Doble carne, queso fundido, bacon crujiente, cebolla caramelizada'}
                </p>
                <button className="w-full bg-primary hover:bg-accent text-background px-8 py-4 rounded-lg uppercase tracking-wide transition-all font-['Montserrat',sans-serif] font-bold text-xl">
                  {t.voting.voteButton}
                </button>
              </div>
            </div>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <div
                className="relative text-primary"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: '120px',
                  textShadow: '0 4px 30px rgba(212, 175, 55, 0.5)',
                  letterSpacing: '0.1em'
                }}
              >
                VS
              </div>
            </div>
          </div>

          {/* Hamburguesa 2 */}
          <div className="relative group cursor-pointer transition-all hover:scale-105">
            <div className="relative h-[700px] rounded-2xl overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/30 hover:border-primary hover:shadow-primary/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Burger Option 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-primary mb-3 uppercase"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: '36px'
                  }}
                >
                  {burgers[1]?.name || 'BARBACOA FURY'}
                </h3>
                <p className="text-foreground/80 font-['Inter',sans-serif] text-lg mb-6">
                  {burgers[1]?.description || 'Carne premium, salsa BBQ casera, jalapeños, cheddar madurado'}
                </p>
                <button className="w-full bg-primary hover:bg-accent text-background px-8 py-4 rounded-lg uppercase tracking-wide transition-all font-['Montserrat',sans-serif] font-bold text-xl">
                  {t.voting.voteButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

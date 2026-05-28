export function MyGoikoSection() {
  return (
    <section className="flex-1 bg-muted py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <h1
          className="text-primary mb-8"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '48px'
          }}
        >
          Tu Perfil
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile Info */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
              {/* Avatar */}
              <div className="w-full aspect-square bg-muted border-2 border-primary/30 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Username */}
              <h3 className="text-primary text-center font-['Montserrat',sans-serif] font-bold text-xl mb-2">
                @goikofan2024
              </h3>

              {/* Bio */}
              <div className="bg-muted border border-primary/20 rounded p-3 mb-4">
                <p className="text-foreground/70 text-sm font-['Inter',sans-serif] text-center">
                  Amante de las hamburguesas gourmet 🍔 | Nivel Gold MyGoiko | 350 GoiKoronas
                </p>
              </div>

              {/* Modify Button */}
              <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-2 rounded-lg font-['Montserrat',sans-serif] font-bold text-sm transition-all hover:scale-105">
                Modificar Perfil
              </button>
            </div>
          </div>

          {/* Center - Orders History */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
              <h2 className="text-primary font-['Montserrat',sans-serif] font-bold text-2xl mb-6">
                Mis Pedidos
              </h2>

              {/* Order Cards */}
              <div className="space-y-4">
                {/* Order 1 */}
                <div className="bg-muted border border-primary/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-foreground text-lg">
                      Pedido #12345
                    </h3>
                    <span className="text-primary text-sm font-['Inter',sans-serif]">24/04/2026</span>
                  </div>
                  <div className="space-y-1 mb-3">
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 1x La Clásica Goiko</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 2x Barbacoa Crujiente</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 1x Patatas Goiko</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 2x Coca-Cola</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-['Montserrat',sans-serif] font-bold text-primary text-lg">
                      Total: 52.80€
                    </span>
                    <button className="bg-background hover:bg-muted border border-primary/30 hover:border-primary text-primary px-4 py-1 rounded text-xs font-['Inter',sans-serif] font-medium transition-all">
                      Saber más
                    </button>
                  </div>
                </div>

                {/* Order 2 */}
                <div className="bg-muted border border-primary/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-foreground text-lg">
                      Pedido #12344
                    </h3>
                    <span className="text-primary text-sm font-['Inter',sans-serif]">18/04/2026</span>
                  </div>
                  <div className="space-y-1 mb-3">
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 1x Vegan Deluxe</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 1x Pollo Premium</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 1x Patatas Bravas</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-['Montserrat',sans-serif] font-bold text-primary text-lg">
                      Total: 34.70€
                    </span>
                    <button className="bg-background hover:bg-muted border border-primary/30 hover:border-primary text-primary px-4 py-1 rounded text-xs font-['Inter',sans-serif] font-medium transition-all">
                      Saber más
                    </button>
                  </div>
                </div>

                {/* Order 3 */}
                <div className="bg-muted border border-primary/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-foreground text-lg">
                      Pedido #12343
                    </h3>
                    <span className="text-primary text-sm font-['Inter',sans-serif]">10/04/2026</span>
                  </div>
                  <div className="space-y-1 mb-3">
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 2x La Bestia</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 1x Triple Queso</p>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif]">• 3x Cerveza Artesanal</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-['Montserrat',sans-serif] font-bold text-primary text-lg">
                      Total: 61.20€
                    </span>
                    <button className="bg-background hover:bg-muted border border-primary/30 hover:border-primary text-primary px-4 py-1 rounded text-xs font-['Inter',sans-serif] font-medium transition-all">
                      Saber más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Points & Rewards */}
          <div className="lg:col-span-3 space-y-6">
            {/* Points Card */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
              <h3 className="text-primary font-['Montserrat',sans-serif] font-bold text-xl mb-4">
                Mis GoiKoronas
              </h3>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 rounded-lg p-6 mb-4">
                <p className="text-foreground/70 text-sm font-['Inter',sans-serif] mb-2">Puntos totales</p>
                <p className="text-primary font-['Montserrat',sans-serif] font-black text-4xl">350</p>
              </div>
              <p className="text-foreground/60 text-xs font-['Inter',sans-serif] mb-4">
                ¡Estás a 50 puntos de alcanzar el nivel Platino!
              </p>
              <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-2 rounded-lg font-['Montserrat',sans-serif] font-bold text-sm transition-all hover:scale-105">
                Canjear Puntos
              </button>
            </div>

            {/* Rewards Card */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
              <h3 className="text-primary font-['Montserrat',sans-serif] font-bold text-lg mb-4">
                Premios Disponibles
              </h3>
              <div className="space-y-3">
                <div className="bg-muted border border-primary/20 rounded p-3">
                  <p className="text-foreground font-['Inter',sans-serif] text-sm font-medium mb-1">
                    Hamburguesa Gratis
                  </p>
                  <p className="text-primary text-xs font-bold">200 GoiKoronas</p>
                </div>
                <div className="bg-muted border border-primary/20 rounded p-3">
                  <p className="text-foreground font-['Inter',sans-serif] text-sm font-medium mb-1">
                    Patatas Premium
                  </p>
                  <p className="text-primary text-xs font-bold">100 GoiKoronas</p>
                </div>
                <div className="bg-muted border border-primary/20 rounded p-3">
                  <p className="text-foreground font-['Inter',sans-serif] text-sm font-medium mb-1">
                    Bebida Gratis
                  </p>
                  <p className="text-primary text-xs font-bold">50 GoiKoronas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section - Full Width */}
        <div className="mt-8">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
            <h2 className="text-primary font-['Montserrat',sans-serif] font-bold text-2xl mb-6">
              Desafíos Activos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Challenge 1 */}
              <div className="bg-muted border border-primary/20 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-foreground text-base">
                    Come 5 Burgers
                  </h3>
                  <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-bold">
                    +100
                  </span>
                </div>
                <p className="text-foreground/70 text-xs font-['Inter',sans-serif] mb-3">
                  Pide 5 hamburguesas este mes y gana GoiKoronas extra
                </p>
                <div className="bg-background rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-foreground/60 text-xs font-['Inter',sans-serif]">3 de 5 completado</p>
              </div>

              {/* Challenge 2 */}
              <div className="bg-muted border border-primary/20 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-foreground text-base">
                    Recomienda a un Amigo
                  </h3>
                  <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-bold">
                    +50
                  </span>
                </div>
                <p className="text-foreground/70 text-xs font-['Inter',sans-serif] mb-3">
                  Invita a un amigo y ambos ganan puntos
                </p>
                <div className="bg-background rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-foreground/60 text-xs font-['Inter',sans-serif]">0 de 1 completado</p>
              </div>

              {/* Challenge 3 */}
              <div className="bg-muted border border-primary/20 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-foreground text-base">
                    Visita 3 Locales
                  </h3>
                  <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-bold">
                    +75
                  </span>
                </div>
                <p className="text-foreground/70 text-xs font-['Inter',sans-serif] mb-3">
                  Visita 3 restaurantes Goiko diferentes
                </p>
                <div className="bg-background rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <p className="text-foreground/60 text-xs font-['Inter',sans-serif]">1 de 3 completado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

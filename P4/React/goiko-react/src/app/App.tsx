import { useState, useEffect, useRef } from 'react';
import { GoikoLogo } from './components/GoikoLogo';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VotingSection } from './components/VotingSection';
import { Footer } from './components/Footer';

const translations = {
  ES: {
    nav: {
      order: 'HACER PEDIDO',
      reserve: 'RESERVAR',
      goiko: 'GOIKO',
      myGoiko: 'MI GOIKO',
      menu: 'CARTA',
      locations: 'NUESTROS RESTAURANTES',
      joinTeam: 'ÚNETE AL EQUIPO'
    },
    hero: {
      title: 'TU PRÓXIMA BURGER FAVORITA',
      titleAccent: 'A UN CLIC',
      subtitle: 'Reserva, vota, comparte. Goiko es tuyo. Experiencia gourmet premium al alcance de tu mano.',
      burgerOfMonth: 'HAMBURGUESA DEL MES'
    },
    voting: {
      title: 'VOTA TU FAVORITA',
      voteButton: 'VOTAR'
    },
    menu: {
      title: 'HAMBURGUESA DEL MES',
      subtitle: 'Vota tu favorita. La comunidad Goiko decide cada mes nuestra nueva creación estrella.',
      orderBtn: 'Votar',
      seeMenu: 'VER CARTA COMPLETA'
    },
    burgers: [
      {
        name: "LA BESTIA",
        description: "Doble carne, queso fundido, bacon crujiente, cebolla caramelizada"
      },
      {
        name: "BARBACOA FURY",
        description: "Carne premium, salsa BBQ casera, jalapeños, cheddar madurado"
      },
      {
        name: "CLASSIC RELOADED",
        description: "La tradicional con nuestro toque: carne artesanal, salsa secreta"
      },
      {
        name: "VEGAN REBEL",
        description: "100% vegetal, más sabor que la carne. Sin compromisos."
      }
    ],
    booking: {
      title: 'Haz tu Reserva',
      subtitle: 'Te ayudamos a encontrar el Goiko ideal para ti. Tú tan solo preocúpate de disfrutar',
      address: 'Dirección',
      date: '04/07/2026',
      time: 'Hora',
      people: 'Personas',
      button: 'Buscar Mesa',
      person: 'persona',
      persons: 'personas'
    },
    footer: {
      tagline: 'Hamburguesas gourmet.\nExperiencia digital premium.',
      links: 'Enlaces',
      menu: 'Carta',
      locations: 'Nuestros Restaurantes',
      jobs: 'Únete al Equipo',
      contact: 'Contacto',
      newsletter: 'Comunidad Goiko',
      newsletterText: 'Sé el primero en votar y recibe ofertas exclusivas.',
      emailPlaceholder: 'tu@email.com',
      submitBtn: 'Unirme',
      copyright: '© 2026 Goiko Burgers. Todos los derechos reservados.',
      authors: 'Diseño web por Alberto García Lara, Enrique Fernández Veslaco, Marcos Medina Peula'
    }
  },
  CA: {
    nav: {
      order: 'FER COMANDA',
      reserve: 'RESERVAR',
      goiko: 'GOIKO',
      myGoiko: 'EL MEU GOIKO',
      menu: 'CARTA',
      locations: 'ELS NOSTRES RESTAURANTS',
      joinTeam: 'UNEIX-TE A L\'EQUIP'
    },
    hero: {
      title: 'LA TEVA PROPERA BURGER FAVORITA',
      titleAccent: 'A UN CLIC',
      subtitle: 'Reserva, vota, comparteix. Goiko és teu. Experiència gourmet premium a l\'abast de la teva mà.',
      burgerOfMonth: 'HAMBURGUESA DEL MES'
    },
    voting: {
      title: 'VOTA LA TEVA FAVORITA',
      voteButton: 'VOTAR'
    },
    menu: {
      title: 'HAMBURGUESA DEL MES',
      subtitle: 'Vota la teva favorita. La comunitat Goiko decideix cada mes la nostra nova creació estrella.',
      orderBtn: 'Votar',
      seeMenu: 'VEURE CARTA COMPLETA'
    },
    burgers: [
      {
        name: "LA BÈSTIA",
        description: "Doble carn, formatge fos, bacon cruixent, ceba caramel·litzada"
      },
      {
        name: "BARBACOA FURY",
        description: "Carn premium, salsa BBQ casolana, jalapeños, cheddar madurat"
      },
      {
        name: "CLASSIC RELOADED",
        description: "La tradicional amb el nostre toc: carn artesanal, salsa secreta"
      },
      {
        name: "VEGAN REBEL",
        description: "100% vegetal, més sabor que la carn. Sense compromisos."
      }
    ],
    booking: {
      title: 'Fes la teva Reserva',
      subtitle: 'T\'ajudem a trobar el Goiko ideal per a tu. Tu només preocupa\'t de gaudir',
      address: 'Adreça',
      date: '04/07/2026',
      time: 'Hora',
      people: 'Persones',
      button: 'Buscar Taula',
      person: 'persona',
      persons: 'persones'
    },
    footer: {
      tagline: 'Hamburgueses gourmet.\nExperiència digital premium.',
      links: 'Enllaços',
      menu: 'Carta',
      locations: 'Els Nostres Restaurants',
      jobs: 'Uneix-te a l\'Equip',
      contact: 'Contacte',
      newsletter: 'Comunitat Goiko',
      newsletterText: 'Sigues el primer a votar i rep ofertes exclusives.',
      emailPlaceholder: 'el.teu@email.com',
      submitBtn: 'Unir-me',
      copyright: '© 2026 Goiko Burgers. Tots els drets reservats.',
      authors: 'Disseny web per Alberto García Lara, Enrique Fernández Veslaco, Marcos Medina Peula'
    }
  },
  EN: {
    nav: {
      order: 'ORDER NOW',
      reserve: 'BOOK TABLE',
      goiko: 'GOIKO',
      myGoiko: 'MY GOIKO',
      menu: 'MENU',
      locations: 'OUR RESTAURANTS',
      joinTeam: 'JOIN THE TEAM'
    },
    hero: {
      title: 'YOUR NEXT FAVORITE BURGER',
      titleAccent: 'ONE CLICK AWAY',
      subtitle: 'Reserve, vote, share. Goiko is yours. Premium gourmet experience at your fingertips.',
      burgerOfMonth: 'BURGER OF THE MONTH'
    },
    voting: {
      title: 'VOTE YOUR FAVORITE',
      voteButton: 'VOTE'
    },
    menu: {
      title: 'BURGER OF THE MONTH',
      subtitle: 'Vote for your favorite. The Goiko community decides our next star creation every month.',
      orderBtn: 'Vote',
      seeMenu: 'SEE FULL MENU'
    },
    burgers: [
      {
        name: "THE BEAST",
        description: "Double meat, melted cheese, crispy bacon, caramelized onions"
      },
      {
        name: "BARBECUE FURY",
        description: "Premium beef, homemade BBQ sauce, jalapeños, aged cheddar"
      },
      {
        name: "CLASSIC RELOADED",
        description: "The traditional with our twist: artisan meat, secret sauce"
      },
      {
        name: "VEGAN REBEL",
        description: "100% plant-based, more flavor than meat. No compromises."
      }
    ],
    booking: {
      title: 'Make your Reservation',
      subtitle: 'We help you find the perfect Goiko for you. You just focus on enjoying',
      address: 'Address',
      date: '07/04/2026',
      time: 'Time',
      people: 'People',
      button: 'Find Table',
      person: 'person',
      persons: 'people'
    },
    footer: {
      tagline: 'Gourmet burgers.\nPremium digital experience.',
      links: 'Links',
      menu: 'Menu',
      locations: 'Our Restaurants',
      jobs: 'Join the Team',
      contact: 'Contact',
      newsletter: 'Goiko Community',
      newsletterText: 'Be the first to vote and receive exclusive offers.',
      emailPlaceholder: 'your@email.com',
      submitBtn: 'Join',
      copyright: '© 2026 Goiko Burgers. All rights reserved.',
      authors: 'Web design by Alberto García Lara, Enrique Fernández Veslaco, Marcos Medina Peula'
    }
  }
};

export default function App() {
  const [logoMenuOpen, setLogoMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [myGoikoOpen, setMyGoikoOpen] = useState(false);
  const [restaurantsOpen, setRestaurantsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuType, setMenuType] = useState<'normal' | 'gluten-free' | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [language, setLanguage] = useState<'ES' | 'CA' | 'EN'>('ES');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPeople, setSelectedPeople] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    ternera: false,
    pollo: false,
    huevo: false,
    sinGluten: false,
    sinLactosa: false,
    vegana: false
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [currentPage, setCurrentPage] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const logoMenuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const myGoikoRef = useRef<HTMLDivElement>(null);
  const restaurantsRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const timeOptions = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '20:00', '20:30', '21:00', '21:30',
    '22:00', '22:30', '23:00', '23:30'
  ];

  const peopleOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  const allBurgers = [
    { name: "LA CLÁSICA GOIKO", description: "Ternera premium, queso cheddar, bacon, huevo, salsa Goiko", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.50, tags: ['ternera', 'huevo'] },
    { name: "BARBACOA CRUJIENTE", description: "Carne de ternera, salsa BBQ casera, cebolla frita crujiente", image: "https://images.unsplash.com/photo-1632898658005-af95f6fa589c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 13.90, tags: ['ternera'] },
    { name: "POLLO PREMIUM", description: "Pechuga de pollo empanada, lechuga, tomate, mayonesa de ajo", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 11.90, tags: ['pollo'] },
    { name: "VEGAN DELUXE", description: "Hamburguesa 100% vegetal, aguacate, rúcula, tomate seco", image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.90, tags: ['vegana', 'sinLactosa'] },
    { name: "LA BESTIA", description: "Doble ternera, triple queso, bacon, cebolla caramelizada", image: "https://images.unsplash.com/photo-1632898657999-ae6920976661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 15.90, tags: ['ternera'] },
    { name: "MEDITERRÁNEA", description: "Ternera, queso de cabra, tomate confitado, albahaca fresca", image: "https://images.unsplash.com/photo-1632898657953-f41f81bfa892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 14.50, tags: ['ternera'] },
    { name: "CÉSAR CHICKEN", description: "Pollo a la parrilla, parmesano, lechuga romana, salsa César", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.50, tags: ['pollo'] },
    { name: "SIN GLUTEN ESPECIAL", description: "Ternera, pan sin gluten, queso, tomate, lechuga, pepinillos", image: "https://images.unsplash.com/photo-1632898658005-af95f6fa589c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 13.50, tags: ['ternera', 'sinGluten'] },
    { name: "PICANTE MEXICANA", description: "Ternera especiada, jalapeños, guacamole, queso pepper jack", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 14.90, tags: ['ternera'] },
    { name: "VEGGIE MEDITERRÁNEA", description: "Hamburguesa vegetal, pimientos asados, aceitunas, hummus", image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 11.90, tags: ['vegana', 'sinLactosa'] },
    { name: "HUEVO Y BACON", description: "Ternera, huevo frito, bacon crujiente, queso cheddar ahumado", image: "https://images.unsplash.com/photo-1632898657999-ae6920976661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 13.90, tags: ['ternera', 'huevo'] },
    { name: "POLLO TERIYAKI", description: "Pollo marinado, salsa teriyaki, sésamo, cebolla morada", image: "https://images.unsplash.com/photo-1632898657953-f41f81bfa892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.90, tags: ['pollo'] },
    { name: "TRIPLE QUESO", description: "Ternera, cheddar, gouda, queso azul, cebolla caramelizada", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 14.50, tags: ['ternera'] },
    { name: "FIT PROTEIN", description: "Ternera magra, pan integral, aguacate, tomate, sin salsas", image: "https://images.unsplash.com/photo-1632898658005-af95f6fa589c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 13.50, tags: ['ternera', 'sinLactosa'] },
    { name: "VEGAN BBQ", description: "Carne vegetal, salsa BBQ vegana, col morada encurtida", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.90, tags: ['vegana', 'sinLactosa'] },
    { name: "POLLO CRISPY", description: "Pollo frito extra crujiente, coleslaw, salsa ranch picante", image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.50, tags: ['pollo', 'huevo'] },
    { name: "LA TRUFADA", description: "Ternera premium, queso brie, champiñones, aceite de trufa", image: "https://images.unsplash.com/photo-1632898657999-ae6920976661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 16.90, tags: ['ternera'] },
    { name: "SIN LACTOSA GOURMET", description: "Ternera, queso sin lactosa, tomate, rúcula, mostaza Dijon", image: "https://images.unsplash.com/photo-1632898657953-f41f81bfa892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 13.90, tags: ['ternera', 'sinLactosa'] },
    { name: "CAPRESE VEGANA", description: "Hamburguesa vegetal, tomate, albahaca, mozzarella vegana", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 12.90, tags: ['vegana', 'sinLactosa'] },
    { name: "LA SUPREMA", description: "Doble ternera, queso, huevo, bacon, cebolla, pepinillos", image: "https://images.unsplash.com/photo-1632898658005-af95f6fa589c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", price: 17.90, tags: ['ternera', 'huevo'] }
  ];

  const filteredBurgers = allBurgers.filter(burger => {
    const matchesSearch = burger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         burger.description.toLowerCase().includes(searchTerm.toLowerCase());
    const activeFilters = Object.entries(filters).filter(([_, value]) => value).map(([key, _]) => key);
    const matchesFilters = activeFilters.length === 0 || activeFilters.some(filter => burger.tags.includes(filter));
    return matchesSearch && matchesFilters;
  });

  const burgersPerPage = 4;
  const totalPages = Math.ceil(filteredBurgers.length / burgersPerPage);
  const displayedBurgers = filteredBurgers.slice(currentPage * burgersPerPage, (currentPage + 1) * burgersPerPage);

  const cartTotal = Object.entries(cart).reduce((total, [name, quantity]) => {
    const burger = allBurgers.find(b => b.name === name);
    return total + (burger ? burger.price * quantity : 0);
  }, 0);

  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const t = translations[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (logoMenuRef.current && !logoMenuRef.current.contains(event.target as Node)) {
        setLogoMenuOpen(false);
      }
      if (reserveRef.current && !reserveRef.current.contains(event.target as Node)) {
        setReserveOpen(false);
      }
      if (orderRef.current && !orderRef.current.contains(event.target as Node)) {
        setOrderOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
      if (myGoikoRef.current && !myGoikoRef.current.contains(event.target as Node)) {
        setMyGoikoOpen(false);
      }
      if (restaurantsRef.current && !restaurantsRef.current.contains(event.target as Node)) {
        setRestaurantsOpen(false);
      }
      if (careersRef.current && !careersRef.current.contains(event.target as Node)) {
        setCareersOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setMenuType(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const restaurants = [
    {
      name: "Goiko Madrid Centro",
      address: "Calle Gran Vía, 32",
      city: "Madrid, 28013",
      phone: "+34 910 123 456",
      hours: "Lun-Dom: 12:00 - 00:00",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
      features: ["Terraza", "WiFi", "Accesible"]
    },
    {
      name: "Goiko Barcelona Gòtic",
      address: "Carrer del Portal de l'Àngel, 15",
      city: "Barcelona, 08002",
      phone: "+34 932 456 789",
      hours: "Lun-Dom: 12:00 - 00:30",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      features: ["Terraza", "WiFi", "Parking cercano"]
    },
    {
      name: "Goiko Valencia Ruzafa",
      address: "Calle Sueca, 47",
      city: "Valencia, 46006",
      phone: "+34 963 789 012",
      hours: "Lun-Dom: 13:00 - 23:30",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600",
      features: ["WiFi", "Delivery", "Accesible"]
    },
    {
      name: "Goiko Sevilla Triana",
      address: "Calle Betis, 23",
      city: "Sevilla, 41010",
      phone: "+34 954 234 567",
      hours: "Lun-Jue: 13:00 - 23:30, Vie-Dom: 12:00 - 00:30",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
      features: ["Terraza", "Vistas al río", "WiFi"]
    },
    {
      name: "Goiko Bilbao Casco Viejo",
      address: "Calle Somera, 8",
      city: "Bilbao, 48005",
      phone: "+34 944 567 890",
      hours: "Lun-Dom: 12:30 - 23:30",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600",
      features: ["WiFi", "Pintxos", "Accesible"]
    },
    {
      name: "Goiko Málaga Puerto",
      address: "Muelle Uno, Local 12",
      city: "Málaga, 29001",
      phone: "+34 951 345 678",
      hours: "Lun-Dom: 12:00 - 01:00",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      features: ["Terraza", "Vistas al mar", "WiFi", "Parking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Careers Modal */}
      <div
        ref={careersRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          careersOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />
              <button
                onClick={() => setCareersOpen(false)}
                className="text-primary hover:text-accent text-4xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Content */}
          <section className="flex-1 bg-muted py-12">
            <div className="max-w-[1440px] mx-auto px-6">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1
                  className="text-primary mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: '64px'
                  }}
                >
                  Únete al Equipo Goiko
                </h1>
                <p className="text-foreground/70 text-xl font-['Inter',sans-serif] max-w-[800px] mx-auto">
                  Forma parte de la revolución gourmet. Trabajamos con pasión, innovación y un compromiso único con la calidad.
                </p>
              </div>

              {/* Application Form */}
              <div className="max-w-[800px] mx-auto">
                <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
                  <h2 className="text-primary font-['Montserrat',sans-serif] font-bold text-3xl mb-2 text-center">
                    Candidatura Espontánea
                  </h2>
                  <p className="text-foreground/70 text-sm font-['Inter',sans-serif] mb-8 text-center">
                    ¿No encuentras una posición que encaje? Envíanos tu CV y nos pondremos en contacto contigo
                  </p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          placeholder="Juan Pérez"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          placeholder="+34 600 000 000"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Posición de Interés *
                        </label>
                        <select className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                          <option value="">Selecciona una opción</option>
                          <option value="cocina">Cocina</option>
                          <option value="sala">Sala</option>
                          <option value="delivery">Delivery</option>
                          <option value="management">Management</option>
                          <option value="marketing">Marketing</option>
                          <option value="otras">Otras</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                        Mensaje / Motivación
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Cuéntanos por qué quieres formar parte del equipo Goiko..."
                        className="w-full bg-background border-2 border-primary/30 rounded-lg p-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                        Adjuntar CV *
                      </label>
                      <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-all cursor-pointer">
                        <svg className="w-12 h-12 text-primary/50 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-foreground/70 font-['Inter',sans-serif] text-sm">
                          Haz clic para subir o arrastra tu archivo aquí
                        </p>
                        <p className="text-foreground/40 font-['Inter',sans-serif] text-xs mt-1">
                          PDF, DOC, DOCX (máx. 5MB)
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 mt-0.5 accent-primary cursor-pointer" />
                        <span className="text-foreground/70 text-sm font-['Inter',sans-serif]">
                          Acepto la <a href="#" className="text-primary hover:text-accent">política de privacidad</a> y el tratamiento de mis datos personales para procesos de selección
                        </span>
                      </label>
                    </div>

                    <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-4 rounded-lg font-['Montserrat',sans-serif] font-bold text-[18px] transition-all hover:scale-105 shadow-lg shadow-primary/30">
                      ENVIAR CANDIDATURA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Restaurants Modal */}
      <div
        ref={restaurantsRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          restaurantsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />
              <button
                onClick={() => setRestaurantsOpen(false)}
                className="text-primary hover:text-accent text-4xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Content */}
          <section className="flex-1 bg-muted py-12">
            <div className="max-w-[1440px] mx-auto px-6">
              {/* Title */}
              <div className="text-center mb-12">
                <h1
                  className="text-primary mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: '64px'
                  }}
                >
                  Nuestros Restaurantes
                </h1>
                <p className="text-foreground/70 text-xl font-['Inter',sans-serif]">
                  Encuentra tu Goiko más cercano y ven a disfrutar de la mejor experiencia gourmet
                </p>
              </div>

              {/* Search and Filter Bar */}
              <div className="max-w-[800px] mx-auto mb-12">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Buscar por ciudad o dirección..."
                    className="flex-1 bg-card border-2 border-primary/30 rounded-lg h-[60px] px-6 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] text-[16px] focus:outline-none focus:border-primary transition-all"
                  />
                  <button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[16px] transition-all hover:scale-105 shadow-lg shadow-primary/30 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Buscar
                  </button>
                </div>
              </div>

              {/* Restaurant Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant, index) => (
                  <div
                    key={index}
                    className="bg-card border-2 border-primary/20 rounded-lg overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-['Montserrat',sans-serif] font-bold">
                        ABIERTO
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-primary font-['Montserrat',sans-serif] font-bold text-xl mb-3">
                        {restaurant.name}
                      </h3>

                      {/* Address */}
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-foreground text-sm font-['Inter',sans-serif]">{restaurant.address}</p>
                          <p className="text-foreground/60 text-xs font-['Inter',sans-serif]">{restaurant.city}</p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-foreground text-sm font-['Inter',sans-serif]">{restaurant.phone}</p>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-foreground text-sm font-['Inter',sans-serif]">{restaurant.hours}</p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {restaurant.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-muted border border-primary/30 text-foreground/70 px-3 py-1 rounded-full text-xs font-['Inter',sans-serif]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div>
                        <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
                          Reservar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* MyGoiko Profile Modal */}
      <div
        ref={myGoikoRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          myGoikoOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />
              <button
                onClick={() => setMyGoikoOpen(false)}
                className="text-primary hover:text-accent text-4xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Content */}
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
                <h2 className="text-primary font-['Montserrat',sans-serif] font-bold text-2xl mb-6">
                  Retos MyGoiko
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Challenge 1 */}
                  <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
                    <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🍔</span>
                    </div>
                    <h3 className="text-foreground font-['Montserrat',sans-serif] font-bold text-lg mb-2">
                      Maestro Burguer
                    </h3>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif] mb-3">
                      Prueba 10 hamburguesas diferentes
                    </p>
                    <div className="bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary rounded-full h-2" style={{width: '70%'}}></div>
                    </div>
                    <p className="text-primary text-xs font-bold">7/10 completado</p>
                  </div>

                  {/* Challenge 2 */}
                  <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
                    <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">⭐</span>
                    </div>
                    <h3 className="text-foreground font-['Montserrat',sans-serif] font-bold text-lg mb-2">
                      Cliente VIP
                    </h3>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif] mb-3">
                      Realiza 5 pedidos este mes
                    </p>
                    <div className="bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary rounded-full h-2" style={{width: '60%'}}></div>
                    </div>
                    <p className="text-primary text-xs font-bold">3/5 completado</p>
                  </div>

                  {/* Challenge 3 */}
                  <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
                    <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🏆</span>
                    </div>
                    <h3 className="text-foreground font-['Montserrat',sans-serif] font-bold text-lg mb-2">
                      Votador Activo
                    </h3>
                    <p className="text-foreground/70 text-sm font-['Inter',sans-serif] mb-3">
                      Vota en 3 hamburguesas del mes
                    </p>
                    <div className="bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary rounded-full h-2" style={{width: '33%'}}></div>
                    </div>
                    <p className="text-primary text-xs font-bold">1/3 completado</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Login/Register Modal */}
      <div
        ref={loginRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          loginOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />
              <button
                onClick={() => setLoginOpen(false)}
                className="text-primary hover:text-accent text-4xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Content */}
          <section className="flex-1 bg-muted py-24">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Branding */}
                <div className="text-center lg:text-left">
                  <h1
                    className="text-primary mb-6"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                      fontSize: '64px',
                      lineHeight: '1.2'
                    }}
                  >
                    MI GOIKO
                  </h1>
                  <p className="text-foreground/70 text-xl mb-8 font-['Inter',sans-serif]">
                    Únete a la comunidad Goiko y disfruta de beneficios exclusivos
                  </p>
                  <div className="space-y-4 text-left bg-card border-2 border-primary/20 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-['Montserrat',sans-serif] font-bold text-primary text-lg">GoiKoronas</h3>
                        <p className="text-foreground/60 text-sm">Acumula puntos con cada pedido y canjéalos por premios</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-['Montserrat',sans-serif] font-bold text-primary text-lg">Pedidos Rápidos</h3>
                        <p className="text-foreground/60 text-sm">Guarda tus favoritos y repite pedidos en segundos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-['Montserrat',sans-serif] font-bold text-primary text-lg">Retos Exclusivos</h3>
                        <p className="text-foreground/60 text-sm">Completa desafíos y gana recompensas únicas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Login/Register Form */}
                <div className="bg-card border-2 border-primary/20 rounded-lg p-8 shadow-2xl shadow-primary/10">
                  {/* Toggle Login/Register */}
                  <div className="flex gap-4 mb-8">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[16px] transition-all ${
                        isLogin
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                          : 'bg-muted text-foreground/70 hover:bg-muted/80'
                      }`}
                    >
                      Iniciar Sesión
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[16px] transition-all ${
                        !isLogin
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                          : 'bg-muted text-foreground/70 hover:bg-muted/80'
                      }`}
                    >
                      Registrarse
                    </button>
                  </div>

                  {/* Login Form */}
                  {isLogin ? (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Email o Username
                        </label>
                        <input
                          type="text"
                          placeholder="tu@email.com"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 accent-primary cursor-pointer" />
                          <span className="text-foreground/70 font-['Inter',sans-serif]">Recordarme</span>
                        </label>
                        <a href="#" className="text-primary hover:text-accent font-['Inter',sans-serif] font-medium">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[18px] transition-all hover:scale-105 shadow-lg shadow-primary/30">
                        INICIAR SESIÓN
                      </button>
                    </div>
                  ) : (
                    /* Register Form */
                    <div className="space-y-6">
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          placeholder="Juan Pérez"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="@usuario"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-['Inter',sans-serif] font-medium mb-2">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-background border-2 border-primary/30 rounded-lg h-[50px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 mt-1 accent-primary cursor-pointer" />
                          <span className="text-foreground/70 text-sm font-['Inter',sans-serif]">
                            Acepto los <a href="#" className="text-primary hover:text-accent">términos y condiciones</a> y la <a href="#" className="text-primary hover:text-accent">política de privacidad</a>
                          </span>
                        </label>
                      </div>
                      <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[18px] transition-all hover:scale-105 shadow-lg shadow-primary/30">
                        CREAR CUENTA
                      </button>
                    </div>
                  )}

                  {/* Social Login */}
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-primary/20"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-card text-foreground/50 font-['Inter',sans-serif]">O continúa con</span>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-2 bg-background hover:bg-muted border-2 border-primary/30 hover:border-primary py-3 rounded-lg transition-all">
                        <span className="font-['Inter',sans-serif] font-medium text-foreground">Google</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-background hover:bg-muted border-2 border-primary/30 hover:border-primary py-3 rounded-lg transition-all">
                        <span className="font-['Inter',sans-serif] font-medium text-foreground">Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Order Modal - Fullscreen */}
      <div
        ref={orderRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          orderOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="relative min-h-screen">
          {/* Header */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />

              <button
                onClick={() => setReserveOpen(true)}
                className="bg-primary hover:bg-accent text-primary-foreground px-10 py-3 rounded uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-primary/30"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
              >
                RESERVAR
              </button>

              <div className="flex items-center gap-4">
                <button className="bg-card hover:bg-muted border-2 border-primary/30 text-primary px-5 py-3 rounded flex items-center gap-2 transition-all hover:scale-105" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  <span className="text-lg">{language}</span>
                </button>

                <button
                  onClick={() => setOrderOpen(false)}
                  className="text-primary hover:text-accent text-4xl font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Background */}
          <div className="bg-muted min-h-screen pt-12 pb-24" />

          {/* Title and Search Row */}
          <div className="absolute left-[120px] right-[340px] top-[150px] flex items-center gap-6">
            {/* Title */}
            <h1
              className="text-primary whitespace-nowrap"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: '48px'
              }}
            >
              Hamburguesas
            </h1>

            {/* Search Bar */}
            <div className="flex-1 max-w-[500px]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(0);
                }}
                placeholder="Buscar hamburguesas..."
                className="w-full bg-card border-2 border-primary/30 rounded-lg h-[55px] px-4 text-foreground placeholder:text-foreground/40 font-['Inter',sans-serif] text-[16px] focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Filters Sidebar */}
          <div className="absolute right-[32px] top-[150px] w-[280px]">
            {/* Filters Title - Clickable */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full bg-card border-2 border-primary/30 rounded-lg h-[55px] hover:bg-muted transition-colors flex items-center justify-between px-4"
            >
              <p className="font-['Montserrat',sans-serif] font-bold text-[18px] text-primary">Filtros</p>

              {/* Filter Dropdown Arrow */}
              <div className={`transition-transform ${filtersOpen ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" className="text-primary" />
                </svg>
              </div>
            </button>

            {/* Filter Checkboxes - Dropdown */}
            {filtersOpen && (
              <div className="mt-2 bg-card border-2 border-primary/30 rounded-lg p-4 z-10">
                <div className="grid grid-cols-2 gap-3">
                  {/* Left Column */}
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.ternera}
                      onChange={(e) => {
                        setFilters({...filters, ternera: e.target.checked});
                        setCurrentPage(0);
                      }}
                      className="w-4 h-4 border-2 border-primary/30 rounded cursor-pointer accent-primary"
                    />
                    <span className="font-['Inter',sans-serif] text-[13px] text-foreground group-hover:text-primary transition-colors">Ternera</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.sinGluten}
                      onChange={(e) => {
                        setFilters({...filters, sinGluten: e.target.checked});
                        setCurrentPage(0);
                      }}
                      className="w-4 h-4 border-2 border-primary/30 rounded cursor-pointer accent-primary"
                    />
                    <span className="font-['Inter',sans-serif] text-[13px] text-foreground group-hover:text-primary transition-colors">Sin Gluten</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.pollo}
                      onChange={(e) => {
                        setFilters({...filters, pollo: e.target.checked});
                        setCurrentPage(0);
                      }}
                      className="w-4 h-4 border-2 border-primary/30 rounded cursor-pointer accent-primary"
                    />
                    <span className="font-['Inter',sans-serif] text-[13px] text-foreground group-hover:text-primary transition-colors">Pollo</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.sinLactosa}
                      onChange={(e) => {
                        setFilters({...filters, sinLactosa: e.target.checked});
                        setCurrentPage(0);
                      }}
                      className="w-4 h-4 border-2 border-primary/30 rounded cursor-pointer accent-primary"
                    />
                    <span className="font-['Inter',sans-serif] text-[13px] text-foreground group-hover:text-primary transition-colors">Sin Lactosa</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.huevo}
                      onChange={(e) => {
                        setFilters({...filters, huevo: e.target.checked});
                        setCurrentPage(0);
                      }}
                      className="w-4 h-4 border-2 border-primary/30 rounded cursor-pointer accent-primary"
                    />
                    <span className="font-['Inter',sans-serif] text-[13px] text-foreground group-hover:text-primary transition-colors">Huevo</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.vegana}
                      onChange={(e) => {
                        setFilters({...filters, vegana: e.target.checked});
                        setCurrentPage(0);
                      }}
                      className="w-4 h-4 border-2 border-primary/30 rounded cursor-pointer accent-primary"
                    />
                    <span className="font-['Inter',sans-serif] text-[13px] text-foreground group-hover:text-primary transition-colors">Vegana</span>
                  </label>
                </div>
              </div>
            )}

            {/* Order Summary Section */}
            <div className="mt-6 bg-card border-2 border-primary/30 rounded-lg p-4">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-primary mb-3">
                Resumen del Pedido ({cartItemCount})
              </h3>

              <div className="border-t border-primary/20 pt-3 mb-3">
                {/* Cart Items */}
                <div className="max-h-[180px] overflow-y-auto mb-3 space-y-2">
                  {Object.entries(cart).length === 0 ? (
                    <p className="font-['Inter',sans-serif] text-[12px] text-foreground/50 text-center py-4">No hay items en el carrito</p>
                  ) : (
                    Object.entries(cart).map(([name, quantity]) => {
                      const burger = allBurgers.find(b => b.name === name);
                      return burger ? (
                        <div key={name} className="pb-2 border-b border-primary/10">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <span className="font-['Inter',sans-serif] text-[12px] text-foreground flex-1 leading-tight">
                              {name}
                            </span>
                            <span className="font-['Inter',sans-serif] text-[12px] text-primary font-bold whitespace-nowrap">
                              {(burger.price * quantity).toFixed(2)}€
                            </span>
                          </div>
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCart(prev => {
                                  const newCart = {...prev};
                                  if (newCart[name] > 1) {
                                    newCart[name]--;
                                  } else {
                                    delete newCart[name];
                                  }
                                  return newCart;
                                });
                              }}
                              className="w-5 h-5 bg-muted hover:bg-primary/20 border border-primary/30 rounded flex items-center justify-center text-primary text-[14px] font-bold transition-colors"
                            >
                              −
                            </button>
                            <span className="font-['Inter',sans-serif] text-[11px] text-primary font-bold min-w-[20px] text-center">
                              {quantity}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCart(prev => ({...prev, [name]: (prev[name] || 0) + 1}));
                              }}
                              className="w-5 h-5 bg-muted hover:bg-primary/20 border border-primary/30 rounded flex items-center justify-center text-primary text-[14px] font-bold transition-colors"
                            >
                              +
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCart(prev => {
                                  const newCart = {...prev};
                                  delete newCart[name];
                                  return newCart;
                                });
                              }}
                              className="ml-auto text-[10px] text-foreground/50 hover:text-destructive transition-colors font-['Inter',sans-serif]"
                            >
                              🗑️ Eliminar
                            </button>
                          </div>
                        </div>
                      ) : null;
                    })
                  )}
                </div>

                {/* MyGoiko Number */}
                <div className="mb-3 pb-3 border-b border-primary/20">
                  <p className="font-['Inter',sans-serif] text-[13px] text-foreground/70">Nº MyGoiko: <span className="text-primary">---</span></p>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-4">
                  <p className="font-['Montserrat',sans-serif] font-bold text-[18px] text-foreground">Total:</p>
                  <p className="font-['Montserrat',sans-serif] font-bold text-[20px] text-primary">{cartTotal.toFixed(2)}€</p>
                </div>

                {/* Finalizar Compra Button */}
                <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[16px] transition-all hover:scale-105 shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" disabled={Object.entries(cart).length === 0}>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>

          {/* Burger Grid - Dynamic 2x2 layout */}
          <div className="absolute left-[120px] top-[250px] right-[340px] grid grid-cols-2 gap-6">
            {displayedBurgers.map((burger, index) => (
              <div
                key={burger.name}
                className="bg-card border-2 border-primary/20 rounded-lg h-[280px] cursor-pointer hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all group relative overflow-hidden"
                onClick={() => {
                  setCart(prev => ({...prev, [burger.name]: (prev[burger.name] || 0) + 1}));
                }}
              >
                <div className="flex h-full">
                  {/* Image Box */}
                  <div className="relative w-[140px] h-full overflow-hidden border-r-2 border-primary/20">
                    <img src={burger.image} alt={burger.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    {/* Diagonal Lines Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="flex-none rotate-45">
                        <div className="h-0 relative w-[200px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1">
                            <line stroke="var(--primary)" strokeOpacity="0.3" x2="200" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="flex-none -rotate-45">
                        <div className="h-0 relative w-[200px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1">
                            <line stroke="var(--primary)" strokeOpacity="0.3" x2="200" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    {/* Name */}
                    <div>
                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[16px] text-primary mb-2 line-clamp-1">
                        {burger.name}
                      </h3>

                      {/* Description */}
                      <p className="font-['Inter',sans-serif] text-[12px] text-foreground/70 leading-[1.4] line-clamp-4">
                        {burger.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <p className="font-['Montserrat',sans-serif] font-bold text-[20px] text-primary">
                        {burger.price.toFixed(2)}€
                      </p>

                      {/* Add to Cart indicator */}
                      <div className="bg-primary text-primary-foreground px-3 py-1 text-[11px] rounded font-['Montserrat',sans-serif] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        + AÑADIR
                      </div>
                    </div>
                  </div>

                  {/* Cart Badge */}
                  {cart[burger.name] && (
                    <div className="absolute right-3 top-3 bg-primary text-primary-foreground rounded-full w-[28px] h-[28px] flex items-center justify-center text-[13px] font-bold shadow-lg shadow-primary/50">
                      {cart[burger.name]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="absolute left-[120px] top-[870px] right-[340px] flex items-center justify-center gap-6">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="bg-card border-2 border-primary/30 hover:border-primary hover:bg-muted px-6 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[14px] text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:border-primary/30 transition-all"
            >
              ← ANTERIOR
            </button>
            <div className="text-center">
              <p className="font-['Inter',sans-serif] text-[14px] text-foreground">
                Página <span className="text-primary font-bold">{currentPage + 1}</span> de <span className="text-primary font-bold">{totalPages || 1}</span>
              </p>
              <p className="font-['Inter',sans-serif] text-[12px] text-foreground/50 mt-1">
                {filteredBurgers.length} hamburguesas encontradas
              </p>
            </div>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage >= totalPages - 1}
              className="bg-card border-2 border-primary/30 hover:border-primary hover:bg-muted px-6 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-[14px] text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:border-primary/30 transition-all"
            >
              SIGUIENTE →
            </button>
          </div>
        </div>
      </div>

      {/* Reserve Modal - Fullscreen */}
      <div
        ref={reserveRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          reserveOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />
              <button
                onClick={() => setReserveOpen(false)}
                className="text-primary hover:text-accent text-4xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Booking Section */}
          <section className="flex-1 bg-muted py-24">
            <div className="max-w-[1440px] mx-auto px-6">
              {/* Title */}
              <h2
                className="text-center text-primary mb-6"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: '48px'
                }}
              >
                {t.booking.title}
              </h2>

              {/* Subtitle */}
              <p
                className="text-center text-foreground/70 mb-12"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px'
                }}
              >
                {t.booking.subtitle}
              </p>

              {/* Form */}
              <div className="max-w-[960px] mx-auto space-y-6">
                {/* Dirección */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.booking.address}
                    className="w-full bg-card border-2 border-primary/30 rounded-lg h-[55px] px-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px'
                    }}
                  />
                </div>

                {/* Fecha */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.booking.date}
                    className="w-full bg-card border-2 border-primary/30 rounded-lg h-[55px] px-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px'
                    }}
                  />
                </div>

                {/* Hora y Personas */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Hora */}
                  <div className="relative">
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className={`w-full bg-card border-2 border-primary/30 rounded-lg h-[55px] px-4 focus:outline-none focus:border-primary appearance-none cursor-pointer ${
                        selectedTime ? 'text-foreground' : 'text-foreground/40'
                      }`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px'
                      }}
                    >
                      <option value="" disabled className="text-foreground/40">{t.booking.time}</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time} className="bg-card text-foreground">
                          {time}
                        </option>
                      ))}
                    </select>
                    {/* Dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-2" fill="none" viewBox="0 0 8.66026 8.25">
                        <path d="M4.33013 8.25L0 0L8.66026 0L4.33013 8.25Z" fill="var(--primary)" />
                      </svg>
                    </div>
                  </div>

                  {/* Personas */}
                  <div className="relative">
                    <select
                      value={selectedPeople}
                      onChange={(e) => setSelectedPeople(e.target.value)}
                      className={`w-full bg-card border-2 border-primary/30 rounded-lg h-[55px] px-4 focus:outline-none focus:border-primary appearance-none cursor-pointer ${
                        selectedPeople ? 'text-foreground' : 'text-foreground/40'
                      }`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px'
                      }}
                    >
                      <option value="" disabled className="text-foreground/40">{t.booking.people}</option>
                      {peopleOptions.map((people) => (
                        <option key={people} value={people} className="bg-card text-foreground">
                          {people} {people === '1' ? t.booking.person : t.booking.persons}
                        </option>
                      ))}
                    </select>
                    {/* Dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-2" fill="none" viewBox="0 0 8.66026 8.25">
                        <path d="M4.33013 8.25L0 0L8.66026 0L4.33013 8.25Z" fill="var(--primary)" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Buscar Mesa Button */}
                <button
                  className="w-full bg-card border-2 border-primary/30 hover:bg-primary hover:border-primary rounded-full h-[55px] text-foreground hover:text-primary-foreground transition-all"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px'
                  }}
                >
                  {t.booking.button}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Logo Fullscreen Menu - Exact Figma Design */}
      <div
        ref={logoMenuRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 ${
          logoMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Main background */}
        <div className="absolute bg-background h-screen left-0 top-0 w-full" />

        {/* Close X - Top Left */}
        <div className="absolute left-0 top-0 w-[120px] h-[120px] flex items-center justify-center cursor-pointer" onClick={() => setLogoMenuOpen(false)}>
          <div className="relative w-12 h-12">
            <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-primary/60 rotate-45 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-primary/60 -rotate-45 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Vertical GOIKO text */}
        <div className="absolute flex h-[235px] items-center justify-center left-[21px] top-[169px] w-[85px]">
          <div className="-rotate-90 flex-none">
            <p className="font-['Montserrat',sans-serif] font-black leading-[normal] not-italic relative text-[70px] text-primary/30 w-[235px]">
              {t.nav.goiko}
            </p>
          </div>
        </div>

        {/* MI GOIKO */}
        <p
          className="absolute font-['Montserrat',sans-serif] font-black leading-[normal] left-[120px] not-italic text-[100px] text-foreground top-[170px] whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
          onClick={() => {
            setLogoMenuOpen(false);
            setMyGoikoOpen(true);
          }}
        >
          {t.nav.myGoiko}
        </p>

        {/* CARTA */}
        <p
          className="absolute font-['Montserrat',sans-serif] font-black leading-[normal] left-[106px] not-italic text-[100px] text-foreground top-[320px] whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
          onClick={() => {
            setLogoMenuOpen(false);
            setMenuOpen(true);
          }}
        >
          {t.nav.menu}
        </p>

        {/* RESERVAR */}
        <div className="absolute font-['Montserrat',sans-serif] font-black h-[120px] leading-[0] left-[120px] not-italic text-[100px] text-foreground top-[470px] w-[503px]">
          <p
            className="leading-[normal] mb-0 cursor-pointer hover:text-primary transition-colors"
            onClick={() => {
              setLogoMenuOpen(false);
              setReserveOpen(true);
            }}
          >
            {t.nav.reserve}
          </p>
        </div>

        {/* HACER PEDIDO */}
        <p
          className="absolute font-['Montserrat',sans-serif] font-black leading-[normal] left-[120px] not-italic text-[100px] text-foreground top-[620px] whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
          onClick={() => {
            setLogoMenuOpen(false);
            setOrderOpen(true);
          }}
        >
          {t.nav.order}
        </p>

        {/* NUESTROS RESTAURANTES */}
        <p
          className="absolute font-['Montserrat',sans-serif] font-bold leading-[normal] left-[133px] not-italic text-[40px] text-foreground/70 top-[770px] whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
          onClick={() => {
            setLogoMenuOpen(false);
            setRestaurantsOpen(true);
          }}
        >
          {t.nav.locations}
        </p>

        {/* ÚNETE AL EQUIPO */}
        <p
          className="absolute font-['Montserrat',sans-serif] font-bold leading-[normal] left-[133px] not-italic text-[40px] text-foreground/70 top-[850px] whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
          onClick={() => {
            setLogoMenuOpen(false);
            setCareersOpen(true);
          }}
        >
          {t.nav.joinTeam}
        </p>

        {/* Language Selector - Top Right */}
        <div className="absolute right-[32px] top-[28px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLangDropdownOpen(!langDropdownOpen);
            }}
            className="bg-card border-2 border-primary/30 text-primary px-4 py-3 rounded flex items-center gap-2 transition-all hover:bg-muted w-[61px] h-[55px] justify-center"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px' }}
          >
            <span>{language}</span>
          </button>

          {/* Dropdown for language in menu */}
          {langDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-card border-2 border-primary/30 rounded overflow-hidden shadow-xl min-w-[61px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage('ES');
                  setLangDropdownOpen(false);
                }}
                className={`w-full px-4 py-2 text-center transition-colors ${
                  language === 'ES' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px' }}
              >
                ES
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage('CA');
                  setLangDropdownOpen(false);
                }}
                className={`w-full px-4 py-2 text-center transition-colors ${
                  language === 'CA' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px' }}
              >
                CA
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage('EN');
                  setLangDropdownOpen(false);
                }}
                className={`w-full px-4 py-2 text-center transition-colors ${
                  language === 'EN' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px' }}
              >
                EN
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <Header
        language={language}
        langDropdownOpen={langDropdownOpen}
        dropdownRef={dropdownRef}
        onLogoClick={() => setLogoMenuOpen(!logoMenuOpen)}
        onOrderClick={() => setOrderOpen(true)}
        onReserveClick={() => setReserveOpen(true)}
        onLoginClick={() => setLoginOpen(true)}
        onLanguageToggle={() => setLangDropdownOpen(!langDropdownOpen)}
        onLanguageSelect={(lang) => {
          setLanguage(lang);
          setLangDropdownOpen(false);
        }}
        translations={t}
      />

      {/* Hero Section */}
      <HeroSection translations={t} />

      {/* Voting Section */}
      <VotingSection translations={t} burgers={t.burgers} />

      {/* Menu Modal - Fullscreen */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-background z-50 transition-all duration-300 overflow-y-auto ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="sticky top-0 bg-background border-b-2 border-primary/20 z-10">
            <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
              <GoikoLogo className="w-20 h-20" />
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setMenuType(null);
                }}
                className="text-primary hover:text-accent text-4xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Menu Section */}
          <section className="flex-1 bg-background py-24">
            <div className="w-full max-w-[1440px] mx-auto px-12">
              {!menuType ? (
                <>
                  {/* Menu Type Selection - Based on Carta Layer */}
                  <div className="flex flex-col items-center justify-center min-h-[600px]">
                    {/* Title */}
                    <div className="text-center mb-12">
                      <h2
                        className="text-primary mb-0"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 900,
                          fontSize: '80px',
                          lineHeight: '1.2'
                        }}
                      >
                        MISMO SABOR,
                      </h2>
                      <h2
                        className="text-primary"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 900,
                          fontSize: '80px',
                          lineHeight: '1.2'
                        }}
                      >
                        DOS CARTAS.
                      </h2>
                    </div>

                    {/* Subtitle */}
                    <p
                      className="text-foreground mb-20"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '60px',
                        fontWeight: 400
                      }}
                    >
                      ELIGE LA TUYA:
                    </p>

                    {/* Two Buttons Side by Side */}
                    <div className="flex gap-12 items-center justify-center">
                      {/* Carta Normal - GOIKO */}
                      <button
                        onClick={() => setMenuType('normal')}
                        className="bg-card hover:bg-primary border-2 border-primary/30 hover:border-primary rounded-[60px] w-[480px] h-[115px] flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-primary/20 group"
                      >
                        <p
                          className="text-foreground group-hover:text-primary-foreground"
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '60px',
                            fontWeight: 900
                          }}
                        >
                          GOIKO
                        </p>
                      </button>

                      {/* Carta Sin Gluten - GOIKO GLUTEN FREE */}
                      <button
                        onClick={() => setMenuType('gluten-free')}
                        className="bg-card hover:bg-primary border-2 border-primary/30 hover:border-primary rounded-[60px] w-[480px] h-[115px] flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-primary/20 group"
                      >
                        <div className="text-center">
                          <p
                            className="text-foreground group-hover:text-primary-foreground mb-0"
                            style={{
                              fontFamily: 'Montserrat, sans-serif',
                              fontSize: '60px',
                              fontWeight: 900,
                              lineHeight: '1'
                            }}
                          >
                            GOIKO
                          </p>
                          <p
                            className="text-foreground group-hover:text-primary-foreground"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '30px',
                              fontWeight: 400,
                              lineHeight: '1'
                            }}
                          >
                            GLUTEN FREE
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Title */}
                  <div className="flex items-center justify-between mb-12">
                    <button
                      onClick={() => setMenuType(null)}
                      className="text-primary hover:text-accent flex items-center gap-2 transition-colors"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '16px'
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      VOLVER
                    </button>
                    <h2
                      className="text-center text-primary flex-1"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 900,
                        fontSize: '48px'
                      }}
                    >
                      {menuType === 'normal' ? 'CARTA NORMAL' : 'CARTA SIN GLUTEN'}
                    </h2>
                    <div className="w-[100px]"></div>
                  </div>

                  <p className="text-center text-foreground/70 mb-20 text-xl font-['Inter',sans-serif]">
                    Hamburguesas gourmet hechas con los mejores ingredientes
                  </p>

                  {/* Burgers Grid - 12 Column System (4 columns = 3/12 each) */}
                  <div className="grid grid-cols-12 gap-6">
                {allBurgers.map((burger, index) => (
                  <div
                    key={index}
                    className="col-span-12 md:col-span-6 lg:col-span-3 bg-card border-2 border-primary/20 rounded-xl overflow-hidden hover:border-primary transition-all hover:scale-105 group"
                  >
                    {/* Image */}
                    <div className="relative h-[320px] overflow-hidden">
                      <img
                        src={burger.image}
                        alt={burger.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-primary mb-3 uppercase leading-tight"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 900,
                          fontSize: '20px'
                        }}
                      >
                        {burger.name}
                      </h3>

                      <p className="text-foreground/70 font-['Inter',sans-serif] text-xs mb-4 min-h-[50px] leading-relaxed">
                        {burger.description}
                      </p>

                      {/* Price */}
                      <div className="mb-3">
                        <p
                          className="text-primary"
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 800,
                            fontSize: '24px'
                          }}
                        >
                          {burger.price.toFixed(2)}€
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-1.5 flex-wrap">
                        {burger.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[10px] uppercase font-['Montserrat',sans-serif] font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer translations={t} />
    </div>
  );
}

import { GoikoLogo } from './GoikoLogo';

interface HeaderProps {
  language: 'ES' | 'CA' | 'EN';
  langDropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  onLogoClick: () => void;
  onOrderClick: () => void;
  onReserveClick: () => void;
  onLoginClick: () => void;
  onLanguageToggle: () => void;
  onLanguageSelect: (lang: 'ES' | 'CA' | 'EN') => void;
  translations: any;
}

export function Header({
  language,
  langDropdownOpen,
  dropdownRef,
  onLogoClick,
  onOrderClick,
  onReserveClick,
  onLoginClick,
  onLanguageToggle,
  onLanguageSelect,
  translations: t
}: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary/30">
      <div className="w-full max-w-[1440px] mx-auto h-24 px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 h-full items-center">
          {/* Logo - Left (2 columns) */}
          <div className="col-span-2 flex items-center justify-start">
            <GoikoLogo
              className="w-24 h-24 hover:scale-105 transition-transform"
              onClick={onLogoClick}
            />
          </div>

          {/* Center - Hacer Pedido y Reservar (6 columns) */}
          <div className="col-span-6 flex items-center justify-center gap-4">
            <button
              onClick={onOrderClick}
              className="bg-card hover:bg-muted border-2 border-primary/30 text-foreground px-8 py-3.5 rounded uppercase tracking-wide transition-all hover:scale-105 hover:border-primary"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '14px' }}
            >
              {t.nav.order}
            </button>
            <button
              onClick={onReserveClick}
              className="bg-primary hover:bg-accent text-primary-foreground px-10 py-3.5 rounded uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-primary/30"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '14px' }}
            >
              {t.nav.reserve}
            </button>
          </div>

          {/* Right - Login & Language (4 columns) */}
          <div className="col-span-4 flex items-center justify-end gap-3">
            {/* Login Button */}
            <button
              onClick={onLoginClick}
              className="bg-card hover:bg-muted border-2 border-primary/30 text-primary px-4 py-2.5 rounded flex items-center gap-1.5 uppercase tracking-wide transition-all hover:scale-105 hover:border-primary"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '11px' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>SESIÓN</span>
            </button>

            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={onLanguageToggle}
                className="bg-card hover:bg-muted border-2 border-primary/30 text-primary px-5 py-3 rounded flex items-center gap-2 transition-all hover:scale-105"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                <span className="text-lg">{language}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border-2 border-primary/30 rounded overflow-hidden shadow-xl min-w-[120px]">
                  <button
                    onClick={() => onLanguageSelect('ES')}
                    className={`w-full px-6 py-3 text-left transition-colors ${
                      language === 'ES' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => onLanguageSelect('CA')}
                    className={`w-full px-6 py-3 text-left transition-colors ${
                      language === 'CA' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    CA
                  </button>
                  <button
                    onClick={() => onLanguageSelect('EN')}
                    className={`w-full px-6 py-3 text-left transition-colors ${
                      language === 'EN' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

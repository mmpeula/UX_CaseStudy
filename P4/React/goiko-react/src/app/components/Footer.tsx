import { Twitter, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export function Footer({ translations: t }: FooterProps) {
  return (
    <footer className="relative bg-card border-t-2 border-primary/20 h-[110px]">
      <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Copyright */}
        <p className="text-foreground/60 text-sm">
          {t.footer.copyright}
        </p>

        {/* Links */}
        <div className="text-foreground/60 text-sm">
          Aviso Legal  .  Política de Cookies  .  Condiciones de venta
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <div className="w-[38px] h-[34px] bg-background border-2 border-primary/30 flex items-center justify-center cursor-pointer hover:bg-primary hover:border-primary transition-all group">
            <Twitter className="w-4 h-4 text-foreground/60 group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="w-[38px] h-[34px] bg-background border-2 border-primary/30 flex items-center justify-center cursor-pointer hover:bg-primary hover:border-primary transition-all group">
            <Instagram className="w-4 h-4 text-foreground/60 group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="w-[38px] h-[34px] bg-background border-2 border-primary/30 flex items-center justify-center cursor-pointer hover:bg-primary hover:border-primary transition-all group">
            <Facebook className="w-4 h-4 text-foreground/60 group-hover:text-primary-foreground transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}

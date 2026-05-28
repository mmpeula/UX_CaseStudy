import logoImage from '../../imports/image-2.png';

export function GoikoLogo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <div
      className={`relative ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <img
        src={logoImage}
        alt="Goiko Burgers Logo"
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: 'screen',
          opacity: 1,
          filter: 'brightness(1.1)'
        }}
      />
    </div>
  );
}

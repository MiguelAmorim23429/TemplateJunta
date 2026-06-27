const ICON_BASE = 'https://unpkg.com/lucide-static@0.460.0/icons/';

export function getIconStyle(name, color, size) {
  return {
    display: 'inline-block',
    flexShrink: 0,
    width: size || 22,
    height: size || 22,
    backgroundColor: color || 'var(--c-primary)',
    WebkitMaskImage: `url(${ICON_BASE}${name}.svg)`,
    maskImage: `url(${ICON_BASE}${name}.svg)`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
  };
}

export function Icon({ name, color, size, style, className }) {
  const iconStyle = {
    ...getIconStyle(name, color, size),
    ...style,
  };
  return <span className={`ic${className ? ' ' + className : ''}`} style={iconStyle} />;
}

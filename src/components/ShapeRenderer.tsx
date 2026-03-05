import type { ShapeElement } from '@/types/question';

interface ShapeRendererProps {
  element: ShapeElement;
  size?: number;
}

export function ShapeRenderer({ element, size = 120 }: ShapeRendererProps) {
  const { type, filled, rotation, dots, direction, petals, position, points } = element;
  
  const fillColor = filled ? '#1a1a1a' : 'white';
  const strokeColor = '#333';
  const strokeWidth = 2;
  
  // Helper untuk rotasi
  const getRotation = () => {
    if (rotation === 'horizontal' || rotation === '0') return 0;
    if (rotation === 'vertical' || rotation === '90') return 90;
    if (rotation === '45') return 45;
    if (rotation === '135') return 135;
    if (rotation === '180') return 180;
    return 0;
  };

  const renderShape = () => {
    const center = size / 2;
    // Scale factor berdasarkan ukuran (120px adalah ukuran default)
    const s = size / 120;
    
    switch (type) {
      case 'trapesium':
        return (
          <polygon
            points={`${center - 25*s},${center + 15*s} ${center + 25*s},${center + 15*s} ${center + 15*s},${center - 15*s} ${center - 15*s},${center - 15*s}`}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
        
      case 'elips':
        return (
          <ellipse
            cx={center}
            cy={center}
            rx={25*s}
            ry={18*s}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
        
      case 'jajargenjang':
        const jgRotation = rotation === 'vertical' ? 90 : 0;
        return (
          <g transform={`rotate(${jgRotation}, ${center}, ${center})`}>
            <polygon
              points={`${center - 25*s},${center + 15*s} ${center + 15*s},${center + 15*s} ${center + 25*s},${center - 15*s} ${center - 15*s},${center - 15*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'tambah':
        return (
          <g>
            {/* Tanda tambah horizontal */}
            <rect
              x={center - 25*s}
              y={center - 6*s}
              width={50*s}
              height={12*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Tanda tambah vertical */}
            <rect
              x={center - 6*s}
              y={center - 25*s}
              width={12*s}
              height={50*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Titik-titik */}
            {dots && dots > 0 && (
              <g>
                {Array.from({ length: Math.min(dots, 6) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={center - 20*s + (i % 3) * 20*s}
                    cy={center + (i < 3 ? -20*s : 20*s)}
                    r={3*s}
                    fill={filled ? 'white' : '#1a1a1a'}
                  />
                ))}
              </g>
            )}
          </g>
        );
        
      case 'hati':
        return (
          <path
            d={`M ${center} ${center + 20*s}
                C ${center} ${center + 15*s}, ${center - 25*s} ${center - 5*s}, ${center - 25*s} ${center - 15*s}
                C ${center - 25*s} ${center - 25*s}, ${center - 15*s} ${center - 25*s}, ${center} ${center - 10*s}
                C ${center + 15*s} ${center - 25*s}, ${center + 25*s} ${center - 25*s}, ${center + 25*s} ${center - 15*s}
                C ${center + 25*s} ${center - 5*s}, ${center} ${center + 15*s}, ${center} ${center + 20*s} Z`}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
        
      case 'panah':
        const panahRot = getRotation();
        return (
          <g transform={`rotate(${panahRot}, ${center}, ${center})`}>
            {/* Batang panah */}
            <rect
              x={center - 5*s}
              y={center - 20*s}
              width={10*s}
              height={35*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Kepala panah */}
            <polygon
              points={`${center},${center + 25*s} ${center - 15*s},${center + 5*s} ${center + 15*s},${center + 5*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'bulan':
        const isLeft = direction === 'left';
        return (
          <g>
            <path
              d={`M ${center} ${center - 25*s}
                  A ${25*s} ${25*s} 0 1 1 ${center} ${center + 25*s}
                  A ${isLeft ? 15*s : 35*s} ${25*s} 0 1 0 ${center} ${center - 25*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'bunga':
        const petalCount = petals || 6;
        const angleStep = 360 / petalCount;
        return (
          <g>
            {/* Kelopak */}
            {Array.from({ length: petalCount }).map((_, i) => (
              <ellipse
                key={i}
                cx={center}
                cy={center - 18*s}
                rx={8*s}
                ry={15*s}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                transform={`rotate(${i * angleStep}, ${center}, ${center})`}
              />
            ))}
            {/* Pusat bunga */}
            <circle
              cx={center}
              cy={center}
              r={10*s}
              fill="#FFD700"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'silinder':
        const isHorizontal = position === 'horizontal';
        return (
          <g transform={isHorizontal ? `rotate(90, ${center}, ${center})` : ''}>
            {/* Badan silinder */}
            <rect
              x={center - 20*s}
              y={center - 15*s}
              width={40*s}
              height={30*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Tutup atas */}
            <ellipse
              cx={center}
              cy={center - 15*s}
              rx={20*s}
              ry={8*s}
              fill={filled ? '#333' : 'white'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Tutup bawah */}
            <ellipse
              cx={center}
              cy={center + 15*s}
              rx={20*s}
              ry={8*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'kerucut':
        return (
          <g>
            {/* Segitiga kerucut */}
            <polygon
              points={`${center},${center - 25*s} ${center - 25*s},${center + 20*s} ${center + 25*s},${center + 20*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Ellipse alas */}
            <ellipse
              cx={center}
              cy={center + 20*s}
              rx={25*s}
              ry={8*s}
              fill={filled ? '#333' : 'white'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'kubus':
        const pointCount = points || 0;
        return (
          <g>
            {/* Depan */}
            <rect
              x={center - 20*s}
              y={center - 15*s}
              width={30*s}
              height={30*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Samping */}
            <polygon
              points={`${center + 10*s},${center - 15*s} ${center + 25*s},${center - 25*s} ${center + 25*s},${center + 5*s} ${center + 10*s},${center + 15*s}`}
              fill={filled ? '#444' : '#f0f0f0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Atas */}
            <polygon
              points={`${center - 20*s},${center - 15*s} ${center - 5*s},${center - 25*s} ${center + 25*s},${center - 25*s} ${center + 10*s},${center - 15*s}`}
              fill={filled ? '#555' : '#e0e0e0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Titik-titik */}
            {pointCount > 0 && (
              <g>
                {Array.from({ length: Math.min(pointCount, 6) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={center - 10*s + (i % 3) * 10*s}
                    cy={center - 5*s + Math.floor(i / 3) * 10*s}
                    r={2*s}
                    fill={filled ? 'white' : '#1a1a1a'}
                  />
                ))}
              </g>
            )}
          </g>
        );
        
      case 'piramida':
        return (
          <g>
            {/* Alas */}
            <polygon
              points={`${center - 20*s},${center + 15*s} ${center + 20*s},${center + 15*s} ${center + 25*s},${center + 5*s} ${center - 15*s},${center + 5*s}`}
              fill={filled ? '#444' : '#f0f0f0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Sisi depan */}
            <polygon
              points={`${center - 20*s},${center + 15*s} ${center},${center - 25*s} ${center + 20*s},${center + 15*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Sisi kanan */}
            <polygon
              points={`${center + 20*s},${center + 15*s} ${center},${center - 25*s} ${center + 25*s},${center + 5*s}`}
              fill={filled ? '#555' : '#e0e0e0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      default:
        return (
          <rect
            x={center - 20*s}
            y={center - 20*s}
            width={40*s}
            height={40*s}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
    }
  };

  return (
    <svg width={size} height={size} className="shape-renderer">
      {renderShape()}
    </svg>
  );
}

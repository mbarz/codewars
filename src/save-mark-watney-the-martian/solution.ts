const RADIUS_MARS = 3390;

type Position = { lat: number; lon: number };

export function saveMark(c1: string, c2: string): string {
  const pos1 = parsePosition(c1);
  const pos2 = parsePosition(c2);
  const dist = Math.floor(calculateDistance(pos1, pos2) / 10) * 10;
  return `${dist}KM`;
}

const parsePosition = (c: string) => {
  const [lat, lon] = c.split(', ').map((p) => {
    const [num, direction] = p.split('° ');
    const negative = ['S', 'W'].includes(direction) ? -1 : 1;
    return parseFloat(num) * negative;
  });
  return { lon, lat };
};

function radians(n: number): number {
  // return n * 0.0174533;
  return (Math.PI / 180) * n;
}

const calculateDistance = (p1: Position, p2: Position, r = RADIUS_MARS) => {
  const lat1 = radians(p1.lat);
  const lat2 = radians(p2.lat);
  const dLat = radians(p2.lat - p1.lat);
  const dLon = radians(p2.lon - p1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return r * c;
};

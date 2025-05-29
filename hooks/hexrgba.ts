/**
 * Converts a hex color to rgba format with the specified alpha value
 * @param hex - A hex color string (e.g. "#FF0000" or "FF0000")
 * @param alpha - Alpha value between 0 and 1
 * @returns RGBA color string
 */
const rgbaColor = (hex: string, alpha: number): string => {
    // Remove the hash if it exists
    const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    
    // Validate hex format
    if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
      throw new Error('Invalid hex color format. Expected format: "#RRGGBB" or "RRGGBB"');
    }
    
    // Extract and convert RGB values
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    
    // Validate alpha value
    if (alpha < 0 || alpha > 1) {
      throw new Error('Alpha value must be between 0 and 1');
    }
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
 
  export function darkenHex(hex: string, percent: number): string {
  // Remove "#" if present
  hex = hex.replace(/^#/, '');

  // Convert shorthand to full form (e.g., "03F" -> "0033FF")
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  const num = parseInt(hex, 16);

  let r = (num >> 16) - (255 * (percent / 100));
  let g = ((num >> 8) & 0x00FF) - (255 * (percent / 100));
  let b = (num & 0x0000FF) - (255 * (percent / 100));

  // Clamp values and convert to hex
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

  
  export default rgbaColor;
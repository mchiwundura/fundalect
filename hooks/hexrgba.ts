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
  
  export default rgbaColor;
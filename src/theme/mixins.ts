import color from 'color';

const mixins = {
  convertHexToHsl: ({
    colorHex,
    saturation,
    lightness,
  }: {
    colorHex: string;
    saturation: number;
    lightness: number;
  }) => {
    const hue = color(colorHex).hue();

    return `hsl(${hue} ${saturation}% ${lightness}%)`;
  },
};

export default mixins;

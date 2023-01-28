import color from 'color';

const mixins = {
  convertHexToHsl: ({
    hexCode,
    saturation,
    lightness,
  }: {
    hexCode: string;
    saturation: number;
    lightness: number;
  }) => {
    const hue = color(hexCode).hue();

    return `hsl(${hue} ${saturation}% ${lightness}%)`;
  },
};

export default mixins;

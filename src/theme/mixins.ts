import color from "color";

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
  truncate: ({ line }: { line: number }) => `
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
  white-space: pre-wrap;
`,
};

export default mixins;

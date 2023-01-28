import {
  SATURATION,
  LIGHTNESS_L1,
  LIGHTNESS_L2,
  LIGHTNESS_L3,
} from "./constants";

export const whiteThemeColors = {
  //primary color
  primaryColor: "#7C63CF",
  secondaryColor: "#CAC0EC",
  tertiaryColor: "#D8D0F1",

  white: "#fff",
  black: "#2a2e36",

  //bgColor
  primaryBgColor: "#F1EEFA",
  secondaryBgColor: "#E4E0F3",
  tertiaryBgColor: "#D7D1EE",

  //text color
  primaryTextColor: "#160D2E",
  secondaryTextColor: "#382778",
  tertiaryTextColor: "#8C7CD0",
  disabledColor: "#B3ABCF",
  primaryTextColorReversed: "#F1EFF8",

  // greyColor
  primaryGreyColor: "#C5C1D3",
  secondaryGreyColor: "#8F88AA",
  tertiaryGreyColor: "#8179A0",

  //alert color
  successColor: "#07A671",
  warningColor: "#E48181",

  // gradient color
  weatherBg:
    "linear-gradient(90.81deg, rgba(159, 138, 238, 0.38) 29.64%, rgba(0, 80, 91, 0.6) 50.7%)",
  createBtnBg:
    "linear-gradient(215.75deg, rgba(38, 83, 217, 1) 18.6%, rgba(172, 38, 217, 1) 79.07%)",

  //alert color
  warningDark: "#A37E29",
  warningLight: "#EBD8AD",
  successDark: "#29A359",
  successLight: "#ADEBC6",
  errorDark: "#A33029",
  errorLight: "#EBB1AD",

  // colors with transparency

  tempBgColor: "rgba(215, 209, 238, .8)",
  todoItemOverlay: "rgba(241, 238, 250, .8)",
  underlineColor: "rgba(202, 192, 236, .4)",

  ruleBreakerColor: "#2690EB",
  modalMaskOverlay: "rgba(228, 224, 243, 0.8)",

  scrollbarColor: "#9383D4",
  scrollbarBgColor: "rgba(61,61,61, .1)",

  // hue
  [SATURATION]: 45,
  [LIGHTNESS_L1]: 88,
  [LIGHTNESS_L2]: 80,
  [LIGHTNESS_L3]: 60,
};

export const darkThemeColors = {
  //primary color
  primaryColor: "#7C63CF",
  secondaryColor: "#CAC0EC",
  tertiaryColor: "#D8D0F1",

  white: "#fff",
  black: "#2a2e36",

  //bgColor
  primaryBgColor: "#0E0A16",
  secondaryBgColor: "#23194D",
  tertiaryBgColor: "#271C59",

  //text color
  primaryTextColor: "#F1EFF8",
  secondaryTextColor: "#D8D0EE",
  tertiaryTextColor: "#BCB1E3",
  disabledColor: "#392283",
  primaryTextColorReversed: "#F1EFF8",

  // greyColor
  primaryGreyColor: "#393152",
  secondaryGreyColor: "#574A7D",
  tertiaryGreyColor: "#8C7FB3",

  // alert color
  successColor: "#06895D",
  warningColor: "#DA5353",

  // gradient color
  weatherBg:
    "linear-gradient(90.81deg, rgba(28, 19, 60, 0.38) 29.64%, rgba(0, 80, 91, 0.6) 50.7%)",
  createBtnBg:
    "linear-gradient(215.75deg, rgba(38, 83, 217, 1) 18.6%, rgba(172, 38, 217, 1) 79.07%)",

  // alert color
  warningDark: "#A37E29",
  warningLight: "#EBD8AD",
  successDark: "#29A359",
  successLight: "#ADEBC6",
  errorDark: "#A33029",
  errorLight: "#EBB1AD",

  // colors with transparency
  tempBgColor: "rgba(28, 19, 60, .8)",
  todoItemOverlay: "rgba(14, 10, 30, .8)",
  underlineColor: "rgba(202, 192, 236, .4)",
  ruleBreakerColor: "#2690EB",
  modalMaskOverlay: "rgba(14, 10, 22, 0.8)",

  scrollbarColor: "#483C78",
  scrollbarBgColor: "rgba(217, 217, 217, .1)",
  // hue
  [SATURATION]: 45,
  [LIGHTNESS_L1]: 20,
  [LIGHTNESS_L2]: 30,
  [LIGHTNESS_L3]: 50,
};

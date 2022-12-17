import { createGlobalTheme, createThemeContract, createTheme } from "@vanilla-extract/css";

const sizes = {
  lg: "80%",
  md: "60%",
  sm: "50%",
  xs: "max-content",
};

const borderRadii = {
  subtle: "4px",
  normal: "10px",
  circle: "50%",
};

const font = '"Mulish", sans-serif';

const fontSizes = {
  lg: "clamp(2.625rem, 1.2857rem + 3.5714vw, 3.1rem)",
  md: "clamp(0.9rem, 3vw, 1rem)",
  sm: "clamp(0.75rem, 2vw, 0.8rem)",
};

const fontWeights = {};

const letterSpacings = {
  normal: "0",
  tight: "-0.02em",
  wide: "0.08em",
};

const colors = createThemeContract({
  text: null,
  textAlt: null,
  primary: null,
  primaryDark: null,
  background: null,
  muted: null,
})

export const lightTheme = createTheme(colors, {
  text: "#58585D",
  textAlt: "#161617",
  primary: "#665df5",
  primaryDark: "#544af4",
  background: "#544af4",
  muted: "#efefef",
})

export const root = createGlobalTheme(":root", {
  sizes,
  fontSizes,
  borderRadii,
  font,
  letterSpacings,
  fontWeights,
});

export const vars = {...root, colors}
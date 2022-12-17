import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  });

globalStyle('body', {
    backgroundColor: vars.colors.background,
    fontSize: vars.fontSizes.md,
    color: vars.colors.text,
    fontFamily: vars.font
})
/*
|-------------------------------------------------------------------------------
| Tailwind – The Utility-First CSS Framework
|-------------------------------------------------------------------------------
|
| Documentation at https://tailwindcss.com
|
*/

/**
 * Global Styles Plugin
 *
 * This plugin modifies Tailwind’s base styles using values from the theme.
 * https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
 */

const globalStyles = ({ addBase, theme }) => {
  addBase({
    "p, a, li": {
      fontSize: theme("fontSize.base[0]"),
      lineHeight: theme("fontSize.base[1]"),
      color: theme("colors.secondary.DEFAULT"),
      fontWeight: theme("fontWeight.light"),
    },
    ".text-h1, h2, .text-h2, h3, .text-h3, h4, .text-h4, h5, .text-h5, h6, .text-h6":
      {
        // color: theme('colors.secondary.DEFAULT'),
        marginBottom: theme("margin.2"),
      },
    "h1, .text-h1": {
      fontSize: theme("fontSize.h1[0]"),
      lineHeight: theme("fontSize.h1[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    ".text-h1-mobile": {
      fontSize: theme("fontSize.h1-mobile[0]"),
      lineHeight: theme("fontSize.h1-mobile[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    "h2, .text-h2": {
      fontSize: theme("fontSize.h2[0]"),
      lineHeight: theme("fontSize.h2[1]"),
      fontWeight: theme("fontWeight.normal"),
    },
    "h3, .text-h3": {
      fontSize: theme("fontSize.h3[0]"),
      lineHeight: theme("fontSize.h3[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    "h4, .text-h4": {
      fontSize: theme("fontSize.h4[0]"),
      lineHeight: theme("fontSize.h4[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    "h5, .text-h5": {
      fontSize: theme("fontSize.h5[0]"),
      lineHeight: theme("fontSize.h5[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    "h6, .text-h6": {
      fontSize: theme("fontSize.h6[0]"),
      lineHeight: theme("fontSize.h6[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    ".intro, .text-intro": {
      fontSize: theme("fontSize.intro[0]"),
      lineHeight: theme("fontSize.intro[1]"),
      fontWeight: theme("fontWeight.light"),
    },
    ".body, .text-body": {
      fontSize: theme("fontSize.base[0]"),
      lineHeight: theme("fontSize.base[1]"),
      fontWeight: theme("fontWeight.light"),
    },
    ".button, .text-button": {
      fontSize: theme("fontSize.button[0]"),
      lineHeight: theme("fontSize.button[1]"),
      fontWeight: theme("fontWeight.bold"),
    },
    ".small-link, .text-small-link": {
      fontSize: theme("fontSize.small-link[0]"),
      lineHeight: theme("fontSize.small-link[1]"),
      textDecoration: theme("textDecoration.underline"),
    },
    ".overline, .text-overline": {
      fontSize: theme("fontSize.overline[0]"),
      lineHeight: theme("fontSize.overline[1]"),
      textTransform: "uppercase",
      letterSpacing: theme("letterSpacing.tight"),
    },
    ".label, .text-label": {
      fontSize: theme("fontSize.label[0]"),
      lineHeight: theme("fontSize.label[1]"),
    },
    ".caption, .text-caption": {
      fontSize: theme("fontSize.caption[0]"),
      lineHeight: theme("fontSize.caption[1]"),
    },
    ol: { listStyleType: "decimal" },
    ul: { listStyleType: "disc" },
    "ol, ul": {
      paddingLeft: theme("padding.2"),
      marginBottom: theme("margin.2"),
    },
    li: {
      paddingLeft: theme("padding.1"),
      marginBottom: theme("margin.1"),
    },
    figcaption: {
      color: theme("colors.gray.400"),
    },
  });
};

module.exports = {
  mode: "jit",
  purge: {
    content: [
      // relative path globs to template files
      "./**/*/*.html",
    ],
    safelist: [],
    options: {
      whitelist: [],
      // purgecss options (e.g. whitelist: [], etc.)
    },
  },
  theme: {
    colors: {
      current: "currentColor",
      primary: {
        100: "#222a45",
        200: "#293250",
        300: "#18203c",
        400: "#323d5f",
      },
      secondary: {
        100: "#34abba",
      },
      border: {
        green: "#5cc976",
        orange: "#f5ab42",
        red: "#e1465b",
        white: "#7c8790",
      },
      white: {
        100: "#ffffff",
        200: "#FCFDFE",
        300: "#E5E5E5",
        400: "#d8d9de",
      },

      black: {
        100: "#030305",
        200: "#111011",
      },

      blue: {
        100: "#0747a6",
        200: "#0049b0",
      },
      gray: {
        100: "#f4f5f7",
        200: "#5e6c84",
      },
      yellow: "#ffe380",
      max: "#ffab00",
      red: "#F10002",

      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: "century-gothic, sans-serif",
      serif: "Libre Baskerville, serif",
    },
    fontSize: {
      h1: ["3.5rem", { lineHeight: "4rem" }],
      h2: ["1.875rem", { lineHeight: "2.5rem" }],
      h3: ["1.5rem", { lineHeight: "1.5rem" }],
      h4: ["1.125rem", { lineHeight: "1.5rem" }],
      base: ["0.9375rem", { lineHeight: "1.5rem" }],
      subtitel: ["1.25rem", { lineHeight: "1.5rem" }],
      button: ["1rem", { lineHeight: "1.5rem" }],
      overline: ["0.75rem", { lineHeight: "1rem" }],
      caption: ["0.75rem", { lineHeight: "1rem" }],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    spacing: {
      px: "1px",
      "2px": "2px",
      0: "0px",
      0.25: "2px",
      0.5: "4px",
      0.75: "6px",
      1: "8px",
      1.5: "12px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      3.5: "28px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      11: "88px",
      12: "96px",
      13: "104px",
      14: "112px",
      15: "120px",
      16: "128px",
      18: "144px",
      20: "160px",
      21: "168px",
      24: "192px",
      26: "230px",
      32: "256px",
      35: "280px",
      36: "288px",
      37: "304px",
      38: "313px",
      40: "320px",
      48: "384px",
      56: "448px",
      64: "512px",
      68: "544px",
      78: "624px",
      90: "720px",
      96: "768px",
      120: "960px",
      128: "1024px",
      150: "1200px",
      half: "50%",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    borderRadius: {
      DEFAULT: "16px",
      null: "0px",
      smaller: "2px",
      button: "4px",
      small: "8px",
      searchbar: "28px",
      full: "9999px",
    },
    boxShadow: {
      button: "4px 8px 32px rgba(201, 71, 228, 0.5)",
      discord: "4px 8px 32px rgba(88, 101, 242,  0.5)",
      small: "0px 4px 16px rgba(17, 17, 17, 0.08)",
      large: "0px 24px 32px rgba(17, 17, 17, 0.08);",
    },
    hyphens: {
      auto: "auto",
      none: "none",
    },
    extend: {
      maxWidth: {
        container: "1440px",
        custom: "372px",
      },
      minWidth: {
        custom: "372px",
      },
      minHeight: {
        0: "0",
        15: "120px",
        48: "384px",
        full: "100%",
        screen: "100vh",
      },
      maxHeight: {
        99999: "99999px",
      },
    },
  },
  variants: {
    // Define variants
  },
  plugins: [
    globalStyles,
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('tailwindcss-hyphens'),
    // https://heroicons.com/
  ],
};

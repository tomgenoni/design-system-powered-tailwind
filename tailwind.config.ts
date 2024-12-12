import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: [
    'margin',
    'padding',
    'gap',
    'display',
    'flex',
    'flexDirection',
    'flexWrap',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'alignContent',
    'alignItems',
    'alignSelf',
    'order',
  ],
  theme: {
    spacing: {
      // Intentionally left empty to disable all spacing classes
    },
    extend: {
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        '7xl': '6rem',
      },
    },
  },
  plugins: [],
} satisfies Config;

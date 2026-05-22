/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Fonds
        ivoire: '#F2EDE3',       // fond global
        surface: '#EDE7DA',      // surface elevee (cartes, hover discret)

        // Texte
        ink: '#2A2520',          // texte principal (brun tres fonce)
        'ink-soft': '#5A5246',   // texte secondaire / lede
        mono: '#8A7E66',         // etiquettes mono, metadonnees

        // Bordures
        border: '#C9C1AE',
        'border-light': '#DDD7C8',

        // Alias section sombre
        dark: '#2A2520',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        // Echelle editoriale (rem)
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.125em' }], // 11px
        'micro': ['0.75rem', { lineHeight: '1.4' }],          // 12px
        'small': ['0.875rem', { lineHeight: '1.5' }],         // 14px
        'body': ['1rem', { lineHeight: '1.65' }],             // 16px
        'lede': ['1.125rem', { lineHeight: '1.6' }],          // 18px
        'h6': ['1.125rem', { lineHeight: '1.3' }],            // 18px
        'h5': ['1.25rem', { lineHeight: '1.3' }],             // 20px
        'h4': ['1.5rem', { lineHeight: '1.25' }],             // 24px
        'h3': ['2rem', { lineHeight: '1.2' }],                // 32px
        'h2': ['2.5rem', { lineHeight: '1.15' }],             // 40px
        'h1': ['3.5rem', { lineHeight: '1.05' }],             // 56px
        'display': ['4.5rem', { lineHeight: '1' }],           // 72px (hero desktop)
      },
      letterSpacing: {
        eyebrow: '0.125em',
        tight: '-0.02em',
        tighter: '-0.03em',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        prose: '700px',
        editorial: '1200px',
        wide: '1280px',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.75rem',
      },
      borderWidth: {
        hair: '0.5px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(42, 37, 32, 0.04)',
        lift: '0 2px 0 rgba(42, 37, 32, 0.06)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        300: '300ms',
        700: '700ms',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

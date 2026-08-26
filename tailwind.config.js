/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Neutral ink scale — the canvas of the whole site */
        ink: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          150: '#ECECEF',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#0A0A0B',
        },
        /* The single accent. Used sparingly: CTAs, links, one mark. */
        brand: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      /* Fluid type — no per-breakpoint overrides needed in markup */
      fontSize: {
        display: ['clamp(2.75rem, 6.2vw, 5rem)',      { lineHeight: '0.98', letterSpacing: '-0.042em', fontWeight: '600' }],
        h1:      ['clamp(2.25rem, 4.6vw, 3.5rem)',    { lineHeight: '1.04', letterSpacing: '-0.038em', fontWeight: '600' }],
        h2:      ['clamp(1.875rem, 3.4vw, 2.75rem)',  { lineHeight: '1.08', letterSpacing: '-0.032em', fontWeight: '600' }],
        h3:      ['clamp(1.1875rem, 1.7vw, 1.5rem)',  { lineHeight: '1.22', letterSpacing: '-0.02em',  fontWeight: '600' }],
        lead:    ['clamp(1.0625rem, 1.4vw, 1.1875rem)', { lineHeight: '1.62', letterSpacing: '-0.011em' }],
        body:    ['1rem',      { lineHeight: '1.65' }],
        sm:      ['0.9375rem', { lineHeight: '1.6' }],
        xs:      ['0.8125rem', { lineHeight: '1.55' }],
        label:   ['0.6875rem', { lineHeight: '1', letterSpacing: '0.13em', fontWeight: '500' }],
      },
      borderRadius: { sm: '5px', DEFAULT: '7px', md: '9px', lg: '12px', xl: '16px', '2xl': '20px' },
      boxShadow: {
        xs:   '0 1px 2px rgba(10,10,11,0.04)',
        sm:   '0 1px 3px rgba(10,10,11,0.05), 0 1px 2px rgba(10,10,11,0.03)',
        lift: '0 14px 36px -14px rgba(10,10,11,0.16), 0 3px 8px -3px rgba(10,10,11,0.06)',
        nav:  '0 1px 0 rgba(10,10,11,0.06)',
        cta:  '0 1px 2px rgba(10,10,11,0.18), inset 0 1px 0 rgba(255,255,255,0.11)',
      },
      maxWidth: { shell: '1200px', prose: '68ch' },
      transitionTimingFunction: { out: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        rise:    { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-rev': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(40px, -30px) scale(1.12)' },
        },
        'drift-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.08)' },
          '50%':      { transform: 'translate(-36px, 24px) scale(0.96)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        rise: 'rise 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 38s linear infinite',
        'marquee-rev': 'marquee-rev 44s linear infinite',
        drift: 'drift 14s ease-in-out infinite',
        'drift-2': 'drift-2 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

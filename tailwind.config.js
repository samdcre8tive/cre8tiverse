/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#232464',
        accent: '#f48515',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Professional typography scale - Industry Standard
        // Mobile-first approach with perfect scaling
        'xs': ['12px', { lineHeight: '16px' }],      // Small labels, captions
        'sm': ['14px', { lineHeight: '20px' }],      // Secondary text, small buttons
        'base': ['16px', { lineHeight: '24px' }],    // Body text, primary buttons (WCAG standard)
        'lg': ['18px', { lineHeight: '28px' }],      // Large body text, subheadings
        'xl': ['20px', { lineHeight: '28px' }],      // Small headings
        '2xl': ['24px', { lineHeight: '32px' }],     // Medium headings
        '3xl': ['30px', { lineHeight: '36px' }],     // Large headings
        '4xl': ['36px', { lineHeight: '40px' }],     // Extra large headings
        '5xl': ['48px', { lineHeight: '1' }],        // Display headings
        '6xl': ['60px', { lineHeight: '1' }],        // Hero headings
        '7xl': ['72px', { lineHeight: '1' }],        // Large hero headings
        '8xl': ['96px', { lineHeight: '1' }],        // Extra large displays
        '9xl': ['128px', { lineHeight: '1' }],       // Maximum display size
      },
      screens: {
        // Professional breakpoints
        'xs': '375px',   // Small phones
        'sm': '640px',   // Large phones
        'md': '768px',   // Tablets
        'lg': '1024px',  // Small laptops
        'xl': '1280px',  // Large laptops
        '2xl': '1536px', // Desktop monitors
      },
      spacing: {
        // 8px grid system - Industry standard
        '0.5': '2px',
        '1.5': '6px',
        '2.5': '10px',
        '3.5': '14px',
        '4.5': '18px',
        '5.5': '22px',
        '6.5': '26px',
        '7.5': '30px',
        '8.5': '34px',
        '9.5': '38px',
        '10.5': '42px',
        '11.5': '46px',
        '12.5': '50px',
        '13': '52px',
        '15': '60px',
        '17': '68px',
        '18': '72px',
        '19': '76px',
        '20': '80px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
        '34': '136px',
        '38': '152px',
        '42': '168px',
        '46': '184px',
        '50': '200px',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.5',
        'relaxed': '1.6',
        'loose': '1.8',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
};
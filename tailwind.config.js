module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      colors: {
        base: {
          bg: '#0B0F19',
          surface: '#111827',
          card: '#151B2B',
          border: '#232B3E',
        },
        brand: {
          indigo: '#6366F1',
          blue: '#3B82F6',
          cyan: '#22D3EE',
          purple: '#A855F7',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99, 102, 241, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.35)',
      },
    },
  },
};

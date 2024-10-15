import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        customColors: {
          background: '#1C1C1D',
          headerBackground: '#D9D9D9'
        },

        background: {
          DEFAULT: '#ffffff',
          dark: '#0c0a09'
        },
        foreground: {
          DEFAULT: '#09090b',
          dark: '#f2f2f2'
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#1c1917',
          foreground: {
            DEFAULT: '#09090b',
            dark: '#f2f2f2'
          }
        },
        popover: {
          DEFAULT: '#ffffff',
          dark: '#171717',
          foreground: {
            DEFAULT: '#09090b',
            dark: '#f2f2f2'
          }
        },
        primary: {
          DEFAULT: '#16a34a',
          dark: '#22c55e',
          foreground: {
            DEFAULT: '#fff1f2',
            dark: '#052e16'
          }
        },
        secondary: {
          DEFAULT: '#f4f4f5',
          dark: '#27272a',
          foreground: {
            DEFAULT: '#18181b',
            dark: '#fafafa'
          }
        },
        muted: {
          DEFAULT: '#f4f4f5',
          dark: '#262626',
          foreground: {
            DEFAULT: '#71717a',
            dark: '#a1a1aa'
          }
        },
        accent: {
          DEFAULT: '#f4f4f5',
          dark: '#292524',
          foreground: {
            DEFAULT: '#18181b',
            dark: '#fafafa'
          }
        },
        destructive: {
          DEFAULT: '#ef4444',
          dark: '#7f1d1d',
          foreground: {
            DEFAULT: '#fafafa',
            dark: '#fef2f2'
          }
        },
        border: {
          DEFAULT: '#e4e4e7',
          dark: '#27272a'
        },
        input: {
          DEFAULT: '#e4e4e7',
          dark: '#27272a'
        },
        ring: {
          DEFAULT: '#16a34a',
          dark: '#15803d'
        },
        chart: {
          1: {
            DEFAULT: '#e76e50',
            dark: '#2662d9'
          },
          2: {
            DEFAULT: '#2a9d90',
            dark: '#2eb88a'
          },
          3: {
            DEFAULT: '#274754',
            dark: '#e88c30'
          },
          4: {
            DEFAULT: '#e8c468',
            dark: '#af57db'
          },
          5: {
            DEFAULT: '#f4a462',
            dark: '#e23670'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        fly: {
          // Both occasional zoom and up-down movement
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '100%'
          },
          '50%': {
            transform: 'translateY(-9px) translateX(6px) scale(1.05) rotate(2deg)',
            opacity: '90%'
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '100%'
          }
        }
      },
      animation: {
        'fly-animation': 'fly 3s ease-in-out infinite'
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
export default config

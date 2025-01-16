import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
    	container: {
    		center: true,
    		padding: '1rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			sans: [
    				'var(--font-inter)',
                    ...fontFamily.sans
                ],
                mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    		},
    		typography: {
    			DEFAULT: {
    				css: {
    					'h1,h2,h3,h4': {
    						'text-wrap': 'balance',
    					},
    					pre: {
    						background: 'none',
    						padding: 0,
    					},
    					code: {
    						fontWeight: '500',
    					},
    				},
    			},
    		},
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-reverse': {
    				from: {
    					transform: 'translateX(calc(-50% - var(--gap)/2))'
    				},
    				to: {
    					transform: 'translateX(0)'
    				}
    			},
    			'marquee-vertical': {
    				'0%': { transform: 'translateY(0)' },
    				'100%': { transform: 'translateY(-50%)' }
    			},
    			'marquee-vertical-reverse': {
    				'0%': { transform: 'translateY(-50%)' },
    				'100%': { transform: 'translateY(0)' }
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-reverse': 'marquee-reverse var(--duration) linear infinite',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			'marquee-vertical-reverse': 'marquee-vertical-reverse var(--duration) linear infinite'
    		},
    		transitionDelay: {
    			'200': '200ms',
    			'400': '400ms',
    			'600': '600ms',
    		}
    	}
    },
    plugins: [animate],
} satisfies Config;

export default config;

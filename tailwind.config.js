/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
    	extend: {
    		colors: {
    			'cod-gray': {
    				'50': '#f6f6f6',
    				'100': '#e7e7e7',
    				'200': '#d1d1d1',
    				'300': '#b0b0b0',
    				'400': '#888888',
    				'500': '#6d6d6d',
    				'600': '#5d5d5d',
    				'700': '#4f4f4f',
    				'800': '#454545',
    				'900': '#3d3d3d',
    				'950': '#121212'
    			},
    			starship: {
    				'50': '#fafde9',
    				'100': '#f4fcc5',
    				'200': '#eef98f',
    				'300': '#e9f54f',
    				'400': '#edf237',
    				'500': '#e1dd11',
    				'600': '#c2b00c',
    				'700': '#9b810d',
    				'800': '#806613',
    				'900': '#6d5316',
    				'950': '#3f2c09'
    			},
    			'dodger-blue': {
    				'50': '#edfaff',
    				'100': '#d7f2ff',
    				'200': '#b9ebff',
    				'300': '#88e0ff',
    				'400': '#50ccff',
    				'500': '#28b0ff',
    				'600': '#068fff',
    				'700': '#0a7aeb',
    				'800': '#0f61be',
    				'900': '#135495',
    				'950': '#11335a'
    			},
    			lima: {
    				'50': '#f0ffee',
    				'100': '#d9ffd7',
    				'200': '#b5ffb2',
    				'300': '#7aff76',
    				'400': '#38f533',
    				'500': '#0ede09',
    				'600': '#04bf00',
    				'700': '#069104',
    				'800': '#0b710a',
    				'900': '#0a5d0b',
    				'950': '#003401'
    			},
    			danger: {
    				'50': '#fef2f3',
    				'100': '#ffe1e3',
    				'200': '#ffc9cc',
    				'300': '#fea3a9',
    				'400': '#fb6e77',
    				'500': '#f3404b',
    				'600': '#e0222e',
    				'700': '#c91a25',
    				'800': '#9c1820',
    				'900': '#811b21',
    				'950': '#46090d'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}

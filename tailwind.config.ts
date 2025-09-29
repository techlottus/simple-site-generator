/** @type {import('tailwindcss').Config} */
import * as tenantBase from "./tailwindBase.js";
import * as tailwindBase from "./src/design-system/branding/tailwind-base";

export default {
   content: [
      './src/**/*.{js,ts,tsx,jsx}',
      '!./src/**/node_modules/**/*'
   ],
  safelist: [{pattern: /bg-[a-z]*-[0-9]*/g}],
  presets: [tailwindBase.default, (tenantBase as any).default],
  theme: {
    extend: {
      "zIndex": {
         "15": "15"
      },
      "screens": {
         "w-p": {
            "max": "599px"
         },
         "w-t": {
            "min": "600px",
            "max": "1023px"
         },
         "w-d": {
            "min": "1024px"
         },
         "w-d-base": {
            "max": "1300px"
         }
      },
      "maxWidth": {
         "72": "18rem",
         "78": "19.5rem",
         "96": "24rem",
         "147": "36.75rem",
         "d-base": "1200px"
      },
      "spacing": {
         "18": "4.5rem",
         "22": "5.5rem",
         "55": "13.375rem",
         "59": "14.375rem",
         "72": "18rem",
         "78": "19.5rem",
         "88": "22.188",
         "96": "24rem",
         "100": "25rem",
         "125": "31.25rem",
         "683": "170.75rem",
         "12.5": "3.125rem",
         "8.5": "2.125rem",
         "13.75": "3.438rem",
         "16.5": "4.125rem",
         "58.5": "14.625rem",
         "135.5": "33.375rem",
         "140.5": "36.438",
         "170.75": "42.688rem",
         "341.5": "85.375rem",
         "grid-gap": "1.5rem"
      },
			fontSize: {
				xs: ['0.75rem', '125%'],
				sm: ['0.875rem', '125%'],
				base: ['1rem', '125%'],
				lg: ['1.125rem', '125%'],
				xl: ['1.25rem', '125%'],
				'2xl': ['1.5rem', '125%'],
				'3xl': ['1.75rem', '125%'],
				'4xl': ['2rem', '125%'],
				'5xl': ['2.125rem', '125%'],
				'6xl': ['2.5rem', '125%'],
				'7xl': ['3.25rem', '125%'],
				'8xl': ['3.875rem', '125%'],
			},
      "lineHeight": {
         "12": "3rem",
         "13": "3.75rem",
         "14": "3.5rem",
         "16": "4rem",
         "5.2": "1.3rem",
         "5.625": "1.406rem",
         "7.15": "1.788rem",
         "7.5": "1.875rem",
         "8.6": "2.172rem",
         "9.375": "2.344rem",
         "9.435": "2.359rem",
         "12.5": "3.125rem",
         "16.25": "4.063rem",
         "semi-tight": "1.125"
      },
      "colors": {
         "white": "#fff",
         "transparent": "transparent"
      },
      "gridTemplateColumns": {
         "4": "repeat(4, 1fr)",
         "8": "repeat(8, 1fr)",
         "12": "repeat(12, 1fr)",
         "12-gap": "repeat(12, minmax(0, 1fr))",
         "12-nogap": "repeat(12, minmax(0, 1fr))",
         "8-gap": "repeat(8, minmax(0, 1fr))",
         "8-nogap": "repeat(8, minmax(0, 1fr))",
         "4-gap": "repeat(4, minmax(0, 1fr))",
         "4-nogap": "repeat(4, minmax(0, 1fr))"
      },
      "aspectRatio": {
         "1/1": "1 / 1",
         "1/2": "1 / 2",
         "2/1": "2 / 1",
         "3/4": "3 / 4",
         "4/3": "4 / 3",
         "7/2": "7 / 2"
      },
      boxShadow: {
         sm: '0px 2px 12px rgba(0,0,0,0.12)',
         md: '0px 5px 15px rgba(0,0,0,0.15)',
         lg: '0px 10px 30px rgba(0,0,0,0.15)',
         xl: '0px 20px 60px rgba(0,0,0,0.15)',
         solid: '4px 6px 0px 0px rgba(0,0,0,1)',
       },
      "minHeight": {
         "22": "5.25rem",
         "26": "6.563rem",
         "54": "13.25rem",
         "58": "14.75rem"
      },
      "minWidth": {
         "130": "7.5rem"
      },
      keyframes: {
         enterFromLeft: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
         },
         enterFromRight: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
         },
         exitToLeft: {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' },
         },
         exitToRight: {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' },
         },
         scaleIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
         },
         scaleOut: {
            '0%': {  opacity: '1' },
            '100%': { opacity: '0' },
         },
				 skeleton: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
				skeleton: 'skeleton 2.5s ease infinite forwards',
        enterFromLeft: 'enterFromLeft 0.5s ease-in-out',
        enterFromRight: 'enterFromRight 0.5s ease-in-out',
        exitToLeft: 'exitToLeft 0.5s ease-in-out',
        exitToRight: 'exitToRight 0.5s ease-in-out',
        scaleIn: 'scaleIn 300ms ease',
        scaleOut: 'scaleOut 300ms ease',
      },
			width: {
        35: '8.75rem',
        'modal-profile': '43.75rem',
      },
			height: {
        35: '8.75rem',
        slider: '18.75rem',
        'slider-mobile': '37.5rem',
      },
   }
  },
  plugins: [],
}
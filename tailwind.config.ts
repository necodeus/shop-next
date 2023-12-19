import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        wildsand: '#f6f6f6',
      },
      colors: {
        mineshaft: '#3e3e3e',
      },
    },
  },
  plugins: [],
}
export default config

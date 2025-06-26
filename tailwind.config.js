import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
})

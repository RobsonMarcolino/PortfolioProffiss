import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/PortifolioProfiss/', // Assumindo que o nome do repositório será este. Se for diferente, precisaremos ajustar.
})

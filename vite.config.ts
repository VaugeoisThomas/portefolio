import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { resolve, relative } from 'node:path'

function includeStandaloneProjects() {
  const projectsRoot = resolve(__dirname, 'projects')

  return {
    name: 'include-standalone-projects',
    generateBundle() {
      const emitProjectFiles = (directory: string) => {
        for (const entry of readdirSync(directory)) {
          const entryPath = resolve(directory, entry)

          if (statSync(entryPath).isDirectory()) {
            emitProjectFiles(entryPath)
            continue
          }

          this.emitFile({
            type: 'asset',
            fileName: relative(resolve(__dirname), entryPath).replaceAll('\\', '/'),
            source: readFileSync(entryPath),
          })
        }
      }

      emitProjectFiles(projectsRoot)
    },
  }
}

export default defineConfig({
  plugins: [react(), includeStandaloneProjects()],
})

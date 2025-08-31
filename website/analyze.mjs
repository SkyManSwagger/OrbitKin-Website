// Bundle analyzer script
// Run with: npm run analyze

import { exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs/promises'
import path from 'path'

const execAsync = promisify(exec)

async function analyzeBuild() {
  console.log('🔍 Starting bundle analysis...\n')
  
  try {
    // Build the project
    console.log('📦 Building production bundle...')
    await execAsync('npm run build')
    
    // Get build output directory
    const buildDir = '.next'
    const staticDir = path.join(buildDir, 'static')
    
    // Analyze JS chunks
    console.log('\n📊 Analyzing JavaScript chunks:')
    const chunksDir = path.join(staticDir, 'chunks')
    
    try {
      const files = await fs.readdir(chunksDir)
      const jsFiles = files.filter(f => f.endsWith('.js'))
      
      const fileSizes = await Promise.all(
        jsFiles.map(async (file) => {
          const stats = await fs.stat(path.join(chunksDir, file))
          return {
            name: file,
            size: stats.size,
            sizeKB: (stats.size / 1024).toFixed(2),
          }
        })
      )
      
      // Sort by size
      fileSizes.sort((a, b) => b.size - a.size)
      
      console.log('\nTop 10 largest chunks:')
      fileSizes.slice(0, 10).forEach((file, i) => {
        const bar = '█'.repeat(Math.floor(file.size / 5000))
        console.log(`${i + 1}. ${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB ${bar}`)
      })
      
      const totalSize = fileSizes.reduce((sum, f) => sum + f.size, 0)
      console.log(`\n📦 Total JS size: ${(totalSize / 1024).toFixed(2)} KB`)
      
      // Check for large chunks
      const largeChunks = fileSizes.filter(f => f.size > 100000) // 100KB
      if (largeChunks.length > 0) {
        console.log('\n⚠️  Warning: Large chunks detected (>100KB):')
        largeChunks.forEach(chunk => {
          console.log(`   - ${chunk.name}: ${chunk.sizeKB} KB`)
        })
      }
      
      // Recommendations
      console.log('\n💡 Optimization Recommendations:')
      
      if (totalSize > 500000) {
        console.log('   ⚡ Total bundle size is large. Consider:')
        console.log('      - Code splitting with dynamic imports')
        console.log('      - Removing unused dependencies')
        console.log('      - Using lighter alternatives for heavy libraries')
      }
      
      const frameworkChunk = fileSizes.find(f => f.name.includes('framework'))
      if (frameworkChunk && frameworkChunk.size > 100000) {
        console.log('   ⚡ Framework chunk is large. Consider:')
        console.log('      - Enabling SWC minification')
        console.log('      - Using production builds')
      }
      
      console.log('\n✅ Bundle analysis complete!')
      
    } catch (error) {
      console.error('Error reading build output:', error)
    }
    
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

// Run the analysis
analyzeBuild()
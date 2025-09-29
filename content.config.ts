import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    examples: defineCollection({
      type: 'page',
      // Include nested markdown files (e.g., examples/golang/funcstions-topic.md)
      source: 'examples/**/*.md',
    })
  }
})

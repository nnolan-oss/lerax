// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()], },

  app: {
    head: {
      title: 'lerax',
      meta: [
        { name: 'description', content: 'lerax' },
        { name: 'keywords', content: 'lerax, dasturlash, namuna, kod' },
        { name: 'author', content: 'nnolan' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'generator', content: 'Nuxt.js' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: 'lerax' },
        { name: 'theme-color', content: '#00a8e8' },
        { name: 'msapplication-TileColor', content: '#00a8e8' },
        { name: 'msapplication-TileImage', content: '/favicon.ico' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'msapplication-tap-highlight', content: 'no' },
        { name: 'format-detection', content: 'telephone=no, email=no' },
        { name: 'google', content: 'notranslate' },
        { name: 'googlebot', content: 'notranslate' },
        { name: 'googlebot-news', content: 'notranslate' },
        { name: 'googlebot-news', content: 'notranslate' },
        // Open Graph defaults
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'lerax' },
        { property: 'og:title', content: 'lerax' },
        { property: 'og:description', content: 'lerax' },
        { property: 'og:image', content: '/images/android-chrome-512x512.png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        // Twitter Card defaults
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'lerax' },
        { name: 'twitter:description', content: 'lerax' },
        { name: 'twitter:image', content: '/images/android-chrome-512x512.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'image_src', href: '/images/android-chrome-512x512.png' },
      ],
    }
  },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        },
        highlight: {
          langs: [
            "go",
            "php",
            "js",
            "jsx",
            "ts",
            "tsx",
            "python",
            "dart",
            "vue",
            "vue-html",
            "nix"
          ],
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ]
})
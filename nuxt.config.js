export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'projectcleanup',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" },
      { rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;500&family=Poppins:wght@200&display=swap" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/svg',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  svg: {
    fileLoader: {
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
      [
        '@nuxtjs/firebase',
        {
          config: {
            apiKey: 'AIzaSyClWBwrsOSQ4xE-DAIk0FPSiyyPmeNH8UY',
            authDomain: "cleanup-477f9.firebaseapp.com",
            projectId: 'cleanup-477f9',
            storageBucket: "cleanup-477f9.appspot.com",
            messagingSenderId: "278691480250",
            appId:"1:278691480250:web:56fd4e3aa45599de0a7883",
            measurementId:"G-RP6WQM9KPX"
          },
          services: {
            auth: true // Just as example. Can be any other service.
          }
        }
      ]
    ],

toast: {
  position: "top-left",
  duration: 2000,
  theme: "bubble",
  singleton: true,
  register: [
    // Register custom toasts
  ],
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

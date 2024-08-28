// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    routeRules: {
        '/cart': {ssr: false},
        '/order': {ssr: false}
    },

    modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "@nuxt/icon", "@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt'],
});

export default {
    key: 'vdsg-tests-nuxt',
    label: 'nuxt tests',
    app: {
        layoutsPath: 'layouts',
        pages: {
            pathPrefix: 'pages/',
        },
        router: {
            entryPoint: undefined,
        },
        tests: {
            uiSpecsPath: '.designer-tests/.spec',
        },
    },
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 3000,
    }
}
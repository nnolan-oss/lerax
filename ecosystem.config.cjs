module.exports = {
    apps: [
        {
            name: 'lerax.nolan.uz',
            port: '3001',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
        },
    ],
}

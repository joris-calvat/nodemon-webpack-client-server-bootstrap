const serverConfig = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'server.js',
        path: __dirname + '/build/'
    }
}

const clientConfig = {
    target: 'web',
    entry: {
        "index": './src/client/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build/client'
    }
}

module.exports = [
    serverConfig,
    clientConfig
]
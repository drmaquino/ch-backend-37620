import mongoose from 'mongoose'

const config = {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'srv+mongodb://xxxxxxxxxxxxxxxxxxx',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
    }
}

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

export default config

import { CANT_CPUS, MODE, PORT } from './config.js';
import { createServer } from './server.js';
import cluster from 'cluster'

if (MODE === 'CLUSTER' && cluster.isPrimary) {
    console.log('iniciando en modo cluster')
    for (let i = 0; i < CANT_CPUS; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        cluster.fork()
    })
} else {
    createServer(PORT)
}
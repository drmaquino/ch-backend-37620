import { exec, execFile, spawn } from 'child_process'

// exec('ls -lh', (error, stdout, stderr) => {
//     if (error) {
//         throw error
//     }
//     if (stderr) {
//         console.error('hubo un error: ', stderr)
//     }
//     console.log(stdout)
// })

// exec('node holamundox5.js', (error, stdout, stderr) => {
//     if (error) {
//         throw error
//     }
//     if (stderr) {
//         console.error('hubo un error: ', stderr)
//     }
//     console.log(stdout)
// })

// console.log('dsp de invocar el exec')

// execFile('node', ['holamundox5.js'], (error, stdout, stderr) => {
//     if (error) {
//         throw error
//     }
//     if (stderr) {
//         console.error('hubo un error: ', stderr)
//     }
//     console.log(stdout)
// })

// console.log('dsp de invocar el execFile')

// const spawned = spawn('node', ['holamundox5.js'])
// spawned.stdout.on('data', data => {
//     console.log(`STD: ${data}`)
// })
// spawned.stderr.on('data', data => {
//     console.error(`ERR: ${data}`)
// })

// console.log('dsp de invocar el spawn')

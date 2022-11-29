// @ts-nocheck
import { PORT } from './config.js';
import { app } from './server.js';

const server = app.listen(PORT, () => {
    console.log(`conectado a puerto ${server.address().port}`)
})
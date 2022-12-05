// @ts-nocheck
import { app } from './server.js';

const server = app.listen(8080, () => {
    console.log(`escuchando en puerto ${server.address().port} `);
});

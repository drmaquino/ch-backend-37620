import { MongoClient } from 'mongodb';

const cliente = new MongoClient('mongodb://root:mongopassword@localhost:27017/coderhouse?sourcePath=admin');
await cliente.connect()

export default cliente

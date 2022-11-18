import { MongoClient } from 'mongodb'

const host = 'localhost'
const port = '27017'

const username = 'root'
const password = 'mongopassword'

const uri = `mongodb://${host}:${port}`;

const client = new MongoClient(uri, { authSource: "admin", auth: { username, password, } })

await client.connect()

const dbCoderhouse = client.db("coderhouse")

const dbPersonas = dbCoderhouse.collection("personas");

// const personas = await dbPersonas.find().toArray()
// console.log(personas)

// const unaPersona = await dbPersonas.find({ nombre: { $in: ['cachito', 'pepe'] } }).toArray()
// console.log(unaPersona)

await dbPersonas.updateOne({ nombre: 'pepito' }, { $set: { apellido: 'avellaneda' } })

await dbPersonas.insertOne({ nombre: 'papa', apellido: 'francisco' })

await dbPersonas.deleteMany({ edad: 30 })

const personas = await dbPersonas.find().toArray()
console.log(personas)

await client.close();

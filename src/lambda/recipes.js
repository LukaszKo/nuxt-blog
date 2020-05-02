import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

exports.handler = (event, context, callback) => {
  const client = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  client.connect((err, connection) => {
    console.log(connection)
    if (err) {
      throw err
    }
    const collection = connection.db('test').collection('recipes')

    // perform actions on the collection object
    collection.find({}).toArray((err, result) => {
      console.log(result)
      if (err) {
        throw err
      }
      connection.close()

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept'
        }
      })
    })
  })
}

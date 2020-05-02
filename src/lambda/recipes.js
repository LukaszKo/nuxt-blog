import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  client.connect((err) => {
    if (err) {
      throw err
    }
    const collection = client.db('test').collection('recipes')

    // perform actions on the collection object
    collection.find({}).toArray(function (err, result) {
      if (err) {
        throw err
      }
      client.close()

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

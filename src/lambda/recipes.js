import dotenv from 'dotenv'

import { createClient } from './database/db'
dotenv.config()

exports.handler = (event, context, callback) => {
  const client = createClient()

  let collection = null
  client.connect((err, connection) => {
    console.log(connection)
    if (err) { throw err }
    collection = connection.db('test').collection('recipes')
    console.log(collection)

    collection.find({}).toArray((error, data) => {
      if (error) { throw error }
      client.close()
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ data }),
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


// import './database/db'
// import Recipe from './database/recipeModel'

import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

exports.handler = (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  MongoClient.connect(process.env.DB_URI, function (err, connection) {
    if (err) { throw err }
    // eslint-disable-next-line no-console
    console.log('Database created!')
    const db = connection.db('test')
    const recipeCollections = db.collection('recipes')
    recipeCollections.find({}).toArray(function (err, result) {
      if (err) { throw err }
      db.close()
      return {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
        }
      }
    })
  })

  // try {
  //   // const data = await Recipe.find({}).exec()

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(data),
  //     headers: {
  //       'content-type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers':
  //       'Origin, X-Requested-With, Content-Type, Accept'
  //     }
  //   }
  // } catch (err) {
  //   return { statusCode: 500, body: err.toString() }
  // }
}

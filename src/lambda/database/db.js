// // server.js
// import mongoose from 'mongoose'
// require('dotenv').config()
// // Initialize connection to database
// const dbUrl = process.env.DB_URI
// const dbOptions = {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// }
// // Set DB from mongoose connection
// mongoose.connect(dbUrl, dbOptions)
// const db = mongoose.connection
// // eslint-disable-next-line no-console
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// export default db

import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

MongoClient.connect(process.env.DB_URI, function (err, db) {
  if (err) { throw err }
  console.log('Database created!')
  db.close()
})
